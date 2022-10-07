import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { DynamicLinks } from 'remix-utils'
import { Urls } from '~/utils/constants'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'

import globalStylesUrl from '~/styles/global.css'
import styles from './tailwind.css'

// https://remix.run/api/conventions#links
export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    { rel: 'stylesheet', href: styles },
    { rel: 'shortcut icon', href: '/favicon.ico' },
  ]
}

interface LoaderData {
  href: string
  ENV: {
    GOOGLE_ANALYTICS_ID?: string
    VERCEL_ANALYTICS_ID?: string
    environment: string
  }
}

export let dynamicLinks = ({ data }: { data: LoaderData }) => {
  return [
    { rel: 'canonical', href: data.href },
    {
      rel: 'script',
      href: `https://www.googletagmanager.com/gtag/js?id=G-${data.ENV.GOOGLE_ANALYTICS_ID}`,
    },
  ]
}
export let handle = { dynamicLinks }
// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
})

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url)
  const data: LoaderData = {
    href: url.origin + url.pathname,
    ENV: {
      VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
      environment: process.env.NODE_ENV,
    },
  }

  return json(data)
}
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const data = useLoaderData()
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
      </body>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="leading-6 font-sans">
      <header className="py-4 bg-[#205493] sticky top-0">
        <div className="pl-4 pr-4 mx-md 0 max-w-prose remix-app__header-content mx-auto 0 max-w-prose">
          <a
            data-test-id="logo"
            href={Urls.meetupUrl}
            className="remix-app__header-home-link font-header knockout text-2xl sm:text-3xl h-7 sm:h-10"
          >
            Ventura Code & Coffee
          </a>
        </div>
      </header>
      <div className="remix-app__main">{children}</div>
      <footer className="py-4 bg-[#205493]">
        <div className="pr-4 pl-4 mx-auto max-w-prose text-white max-w-prose">
          <p>&copy; Ventura Code & Coffee</p>
        </div>
      </footer>
    </div>
  )
}
