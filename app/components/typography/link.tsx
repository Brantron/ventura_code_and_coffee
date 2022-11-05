import React from 'react'
import { trackLinkClick } from '~/utils/analytics'
export default function Link({
  children,
  href,
  button = false,
  testId = '',
  styles = 'inline-block',
}: {
  children: string
  href: string
  button?: boolean
  testId?: string
  styles?: string
}) {
  if (button) {
    return (
      <a
        className={`my-2 border-sky-600 hover:border-sky-800 hover:no-underline hover:drop-shadow-lg hover:bg-sky-900 bg-sky-800 text-white font-semibold py-2 px-4 border rounded shadow mt-8 ${styles}`}
        href={href}
        onClick={() => trackLinkClick(href)}
        data-test-id={testId}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      className={`my-2 inline-block md:inline text-[#205493] hover:text-sky-800 hover:no-underline font-bold`}
      href={href}
      onClick={() => trackLinkClick(href)}
      data-test-id={testId}
    >
      {children}
    </a>
  )
}
