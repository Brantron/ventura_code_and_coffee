import type { MetaFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Urls } from '~/utils/constants'
import { Link, Header, Subheader, Text } from '~/components/typography'
import Main from '~/components/layout/Main'
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
    demos: [],
  }

  // https://remix.run/api/remix#json
  return json(data)
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Ventura Code & Coffee',
    description: 'Code of Conduct',
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Main>
      <Section>
        <Header>Code of Conduct</Header>
        <Text>
          Ventura Code and Coffee is dedicated to providing a harassment-free
          experience for everyone, regardless of level of experience, gender,
          gender identity and expression, sexual orientation, disability,
          physical appearance, body size, race, age, or religion. We do not
          tolerate harassment of group participants in any form. Sexual language
          and imagery is not appropriate for any event or communication channel.
          Group participants violating these rules may be sanctioned or expelled
          from the event at the discretion of the organizers.
        </Text>
        <br />
        <Text>Harassment includes, but is not limited to:</Text>
        <ul className="list-disc list-inside ml-6 mb-6">
          <li>
            Verbal comments that reinforce social structures of domination
            related to gender, gender identity and expression, sexual
            orientation, disability, physical appearance, body size, race, age,
            religion, or level of experience
          </li>
          <li>Sexual images in public spaces</li>
          <li>Deliberate intimidation, stalking, or following</li>
          <li>Harassing photography or recording</li>
          <li>Sustained disruption of discussion or other events</li>
          <li>Inappropriate physical contact</li>
          <li>Unwelcome sexual attention</li>
          <li>Advocating for, or encouraging, any of the above behaviour</li>
        </ul>
        <Subheader>Enforcement</Subheader>
        <Text>
          Participants asked to stop any harassing behavior are expected to
          comply immediately. If a participant engages in harassing behaviour,
          event organisers retain the right to take any actions to keep the
          event a welcoming environment for all participants. This includes
          warning the offender or expulsion from the event.
        </Text>
        <Text>
          We expect participants to follow these rules at all event venues and
          event-related social activities.
        </Text>
        <br />
        <Subheader>Reporting</Subheader>
        <Text>
          If someone makes you or anyone else feel unsafe or unwelcome, please
          report it as soon as possible.You can{' '}
          <Link href={Urls.incidentFormUrl} testId="googleForm">
            use our google form
          </Link>
          , or reach out to a group organizer. Group organizers can be{' '}
          <Link href={Urls.meetupUrl}>identified on Meetup</Link>. Harassment
          and other code of conduct violations reduce the value of our event for
          everyone. We want you to be happy at our event. People like you make
          our event a better place.
        </Text>
      </Section>
    </Main>
  )
}
