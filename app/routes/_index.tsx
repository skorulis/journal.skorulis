import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h2>Journal</h2>
      <p>This is a mix of my journal, calendar todo list all put together that I keep in notion pages which are then scraped into this web version. 
        I don't have a good reason why I did this, it just seemed like a good idea at the time.
      </p>
    </div>
  );
}
