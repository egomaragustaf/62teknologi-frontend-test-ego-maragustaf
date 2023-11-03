import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";
import { BusinessCard } from "~/components/shared/card-businesses";

export async function loader({ request }: LoaderFunctionArgs) {
  const token = process.env.ACCESS_TOKEN;

  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?location=${query}&limit=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await response.json();

  return json({ query, businesses: data });
}

export default function Route() {
  const { query, businesses } = useLoaderData<typeof loader>();

  return (
    <Layout>
      {!query && (
        <p className="text-muted-foreground">
          Insert keyword! Examples: "New York City", "NYC", "350 5th Ave, New
          York, NY 10118".
        </p>
      )}

      {query && businesses.businesses && businesses.businesses.length > 0 ? (
        <ul className="grid grid-cols-5 justify-center items-center gap-4">
          {businesses.businesses.map((business: any) => {
            return (
              <Link key={business.id} to={`/business/${business.alias}`}>
                <BusinessCard business={business as any} />
              </Link>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, businesses not found!</p>
      )}
    </Layout>
  );
}
