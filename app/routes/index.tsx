import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { Urls } from '~/utils/constants'
import { json } from '@remix-run/node'
import Main from '~/components/layout/Main'
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
  let data: IndexData = {}

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
  return (
    <Main>
      <Section innerClasses="pt-0 pb-4 md:pb-8">
        <Header classes="sr-only">Ventura Code and Coffee</Header>
        <div className="flex flex-col gap-8 pt-8 md:pt-12 items-center pt-my-0 mx-auto">
          <div>
            <Subheader classes="block md:text-center md:text-5xl font-header pb-2 ">
              Ventura <span style={{ color: '#095B93' }}>Code & Coffee</span> is
              the community event{' '}
              <span className="underline underline-offset-[14px] text-amber-400">
                you've been looking for.
              </span>
            </Subheader>
          </div>
          <div>
            <Text large>
              Our group meets every other week on Saturdays. Our upcoming
              meeting location can be found on{' '}
              <Link href={Urls.meetupUrl}>our Meetup page.</Link>
            </Text>
            <br />
            <Text large>
              Developers of{' '}
              <span className="text-amber-400 font-bold underline underline-offset-6">
                all skill levels
              </span>{' '}
              come together to work on and discuss projects with each other.
            </Text>
            <div>
              <Link button href={Urls.meetupUrl}>
                Join our next event
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section classes="bg-slate-50 pt-12 pb-12">
        <Subheader classes="block pb-8">How it works</Subheader>
        <div className="flex flex-col gap-y-4">
          <div>
            <Subheader classes="md:text-left">1) Bring a Laptop</Subheader>
            <Text>
              At Ventura Code and Coffee, all you need to bring is a laptop.
              Personal mugs are optional! We are VERY beginner friendly, social,
              and look forward to meeting other folks in and around Ventura
              County that are interested in meeting more developers.
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
            <ul className="list-decimal ml-4">
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
      <Section classes="text-left max-w-prose my-0 mx-auto  pt-12 pb-12">
        <Subheader>About us</Subheader>
        <Text>We're always open to questions and/or concerns</Text>
        <br />
        <Text>
          Please check out our <Link href="/conduct">Code of Conduct</Link> if
          you plan on attending.
        </Text>
        <Text>
          If you have any feedback,{' '}
          <Link href="https://forms.gle/rhdzihtMjECboMM78">
            feel free to send it our way!
          </Link>
        </Text>
        <br />
        <Text>
          Code & Coffee partners with organizers that empower our community. Our
          organizers actively reflect on learnings from our predecessors:
        </Text>
        <br />
        <ul className="list-decimal ml-4">
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
      </Section>
    </Main>
  )
}
