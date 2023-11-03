import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const token = process.env.ACCESS_TOKEN;

  const alias = params.alias || "";

  const response = await fetch(`https://api.yelp.com/v3/businesses/${alias}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();

  return json({ businesses: data });
};

export default function Route() {
  const { businesses } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main className="w-full max-w-7xl flex flex-col gap-8 justify-start items-center">
        <article className="flex lg:flex-row flex-col gap-8 w-full max-w-4xl">
          <img
            src={businesses.image_url}
            alt={businesses.alias}
            className="max-w-sm rounded-md border border-slate-200 shadow-lg"
          />

          <div className="flex flex-col flex-grow gap-4 w-full lg:w-1/3">
            <header className="text-2xl font-bold">
              <h1>{businesses.name}</h1>
            </header>
            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-rose-700">
                {businesses.price}
              </h2>
              <span className="font-semibold">Rating: {businesses.rating}</span>
              <span className="font-semibold">
                Review Count: {businesses.review_count}
              </span>
            </section>
          </div>
        </article>

        <div className="w-full max-w-4xl text-justify items-start leading-relaxed font-normal indent-3 flex flex-col gap-4">
          <h1 className="font-semibold text-lg">Phone</h1>
          <blockquote className="p-4 my-2 border-l-4 border-rose-500 bg-gray-50 dark:border-gray-500 dark:bg-zinc-800">
            <p>{businesses.phone}</p>
            <p>{businesses.display_phone}</p>
          </blockquote>
        </div>
      </main>
    </Layout>
  );
}
