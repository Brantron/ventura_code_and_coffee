import React from 'react'
import { trackLinkClick } from '~/components/utils/analytics'
export default function Link({
  children,
  href,
  button = false,
}: {
  children: string
  href: string
  button?: boolean
}) {
  if (button) {
    return (
      <a
        className="border-sky-600 hover:border-sky-800 hover:no-underline hover:drop-shadow-lg hover:bg-sky-100 text-sky-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-8 inline-block"
        href={href}
        onClick={() => trackLinkClick(href)}
      >
        {children}
      </a>
    )
  }
  return (
    <a
      className={`text-sky-600 hover:text-sky-800 hover:no-underline font-bold`}
      href={href}
      onClick={() => trackLinkClick(href)}
    >
      {children}
    </a>
  )
}
