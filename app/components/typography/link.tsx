import React from 'react'
import { trackLinkClick } from '~/utils/analytics'
export default function Link({
  children,
  href,
  button = false,
  testId = '',
}: {
  children: string
  href: string
  button?: boolean
  testId?: string
}) {
  if (button) {
    return (
      <a
        className="my-2 border-sky-600 hover:border-sky-800 hover:no-underline hover:drop-shadow-lg hover:bg-sky-100 text-sky-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-8 inline-block"
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
      className={`my-2 inline-block md:inline text-sky-600 hover:text-sky-800 hover:no-underline font-bold`}
      href={href}
      onClick={() => trackLinkClick(href)}
      data-test-id={testId}
    >
      {children}
    </a>
  )
}
