import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="space-y-6 text-center -mt-36">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-7xl">
          Wellcome to Yelp Clone
        </h1>

        <p className="text-base text-secondary-foreground sm:text-lg max-w-4xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime illum
          iste aut natus doloribus odit, iure voluptatibus laudantium odio
          suscipit repudiandae officiis dignissimos! Distinctio ab, illum
          ratione mollitia rerum dolor laudantium ad illo ut expedita iste quod,
          quae, quas deleniti.
        </p>
      </div>
    </Layout>
  );
}
