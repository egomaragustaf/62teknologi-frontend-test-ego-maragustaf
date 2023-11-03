import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SearchForm } from "~/components/shared/search-form-businesses";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  const token = process.env.ACCESS_TOKEN;

  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?location=${query}&sort_by=best_match&limit=20`,
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
    <div>
      <SearchForm />

      {!query && <p>Insert keyword!</p>}

      {query && businesses.businesses && businesses.businesses.length > 0 ? (
        <ul>
          {businesses.businesses.map((business: any) => {
            return (
              <li key={business.id}>
                <h2>{business.name}</h2>
                <p>{business.alias}</p>
                <img
                  src={business.image_url}
                  alt={business.alias}
                  width={200}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, businesses not found!</p>
      )}
    </div>
  );
}
