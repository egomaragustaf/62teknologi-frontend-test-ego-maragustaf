import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  const token = process.env.ACCESS_TOKEN;

  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?location=${query}`,
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
      {!query && <p>Insert keyword!</p>}

      {query && businesses.businesses && businesses.businesses.length > 0 ? (
        <ul className="grid grid-cols-5 justify-center items-center">
          {businesses.businesses.map((business: any) => {
            return (
              <Link key={business.id} to={`/business/${business.alias}`}>
                <li>
                  <h2>{business.name}</h2>
                  <p>{business.alias}</p>
                  <img
                    src={business.image_url}
                    alt={business.alias}
                    width={200}
                  />
                </li>
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
