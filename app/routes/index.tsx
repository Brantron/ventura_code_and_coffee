import type { MetaFunction, LoaderFunction } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  }

  // https://remix.run/api/remix#json
  return json(data)
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>()

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Ventura Code & Coffee</h2>
        <p>We're stoked that you're here. 🥳</p>
      </main>
    </div>
  )
}
