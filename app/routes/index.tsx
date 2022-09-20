import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Link, Header, Subheader, Text } from '~/components/typography'

type IndexData = {
  resources: Array<{ name: string; url: string }>
  demos: Array<{ name: string; to: string }>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [],
    demos: [
      {
        to: 'demos/actions',
        name: 'Actions',
      },
      {
        to: 'demos/about',
        name: 'Nested Routes, CSS loading/unloading',
      },
      {
        to: 'demos/params',
        name: 'URL Params and Error Boundaries',
      },
    ],
  }

  // https://remix.run/api/remix#json
  return json(data)
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Ventura Code and Coffee',
    description:
      'Welcome to Ventura Code & Coffee! We meet once every other weekend to code, drink coffee, and learn from each other.',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>()

  return (
    <main>
      <div className="pb-12">
        <Header classes="block text-center pb-8">Ventura Code & Coffee</Header>
        <Text>We're stoked that you're here. 🥳</Text>
        <Text>
          {' '}
          Please check out our <Link href="/conduct">Code of Conduct</Link> if
          you plan on attending
        </Text>
      </div>
      <Subheader classes="block text-center pb-8">How it works</Subheader>
      <section className="grid md:grid-rows-3 md:grid-cols-3 gap-12">
        <div>
          <Subheader>1) Bring a Laptop</Subheader>
          <Text>
            At Ventura Code and Coffee, all you need to bring is a laptop.
            Personal mugs are optional! We are VERY newbie-friendly, social, and
            look forward to developers in and around Ventura County that are
            interested in meeting more developers.
          </Text>
        </div>
        <div>
          <Subheader>2) Standup</Subheader>
          <Text>
            At ~9:20 am, we form a circle to: state our names, mention
            programming languages/frameworks you can help with, and what you
            need help on. Optionally, you can also state if you are hiring or
            looking for work.
          </Text>
        </div>
        <div>
          <Subheader>3) Commence</Subheader>
          <Text>
            Break, grab some coffee, help a fellow coder with a side project, or
            ask about that new JS library she just mentioned. It's all up to
            you!
          </Text>
          <br />
          <Text>
            Code & Coffee partners with organizers that empower our community.
            Our organizers actively reflect on learnings from our predecessors:
          </Text>
          <br />
          <ul className="list-decimal ml-8">
            <li>
              <Link href="http://novacodecoffee.com/">
                Northern Virginia Code & Coffee
              </Link>
            </li>
            <li>
              <Link href="https://www.newyorkcodeandcoffee.com/">
                NY Code & Coffee
              </Link>
            </li>
            <li>
              <Link href="https://www.dccodecoffee.com/">DC Code & Coffee</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
