import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import Main from '~/components/layout/main'
import { useLoaderData } from '@remix-run/react'
import { Link, Header, Subheader, Text } from '~/components/typography'
import Section from '~/components/layout/section'

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
    title: 'Ventura Code and Coffee | Meetup',
    description:
      'Welcome to Ventura Code & Coffee! We meet once every other weekend to code, drink coffee, and learn from each other.',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>()

  return (
    <Main>
      <Section innerClasses="pt-4 md:pt-12 pb-4 md:pb-[100px]">
        <Header classes="sr-only">Ventura Code and Coffee</Header>
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 lg:justify-between pt-0 lg:gap-12 items-center pt-0 md:pt-12">
          <div>
            <Subheader classes="block md:text-center md:text-6xl font-header pb-6 text-m-h1 lg:text-[length:64px] lg:leading-[56px] xl:text-d-j">
              Ventura <span style={{ color: '#095B93' }}>Code & Coffee</span> is
              the community event{' '}
              <span className="underline underline-offset-[14px] text-amber-400">
                you've been looking for.
              </span>
            </Subheader>
          </div>
          <div>
            <Text large>
              This group meets every other week on Saturdays. Our upcoming
              meeting location can be found on{' '}
              <Link href="https://www.meetup.com/ventura-code-coffee">
                our Meetup page.
              </Link>
            </Text>
            <br />
            <Text large>
              Developers of{' '}
              <span className="text-amber-400 font-bold underline underline-offset-6">
                all skill levels
              </span>{' '}
              come together to work on and discuss projects with each other.
            </Text>
          </div>
        </div>
      </Section>
      <Section classes="bg-slate-50">
        <Subheader classes="block pb-8">How it works</Subheader>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Subheader classes="md:text-left">1) Bring a Laptop</Subheader>
            <Text>
              At Ventura Code and Coffee, all you need to bring is a laptop.
              Personal mugs are optional! We are VERY newbie-friendly, social,
              and look forward to developers in and around Ventura County that
              are interested in meeting more developers.
            </Text>
          </div>
          <div>
            <Subheader classes="md:text-left">2) Standup</Subheader>
            <Text>
              At ~9:20 am, we form a circle to: state our names, mention
              programming languages/frameworks you can help with, and what you
              need help on. Optionally, you can also state if you are hiring or
              looking for work.
            </Text>
          </div>
          <div>
            <Subheader classes="md:text-left">3) Commence</Subheader>
            <Text>
              Break, grab some coffee, help a fellow coder with a side project,
              or ask about that new JS library she just mentioned. It's all up
              to you!
            </Text>
            <br />
            <Text>
              Code & Coffee partners with organizers that empower our community.
              Our organizers actively reflect on learnings from our
              predecessors:
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
                <Link href="https://www.dccodecoffee.com/">
                  DC Code & Coffee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section classes=" text-left md:text-center">
        <Subheader classes="block pb-8 pt-8">
          We're always open to questions/concerns
        </Subheader>
        <Text>
          Please check out our <Link href="/conduct">Code of Conduct</Link> if
          you plan on attending.
        </Text>
        <Text>
          If you have any questions or feedback,{' '}
          <Link href="https://forms.gle/rhdzihtMjECboMM78">
            feel free to send it our way!
          </Link>
        </Text>
      </Section>
    </Main>
  )
}
