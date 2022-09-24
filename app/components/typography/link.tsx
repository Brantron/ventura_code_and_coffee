import React from 'react'
import { trackLinkClick } from '~/components/utils/analytics'
export default function Link({
  children,
  href,
}: {
  children: string
  href: string
}) {
  return (
    <a
      className="text-[#095B93] font-bold"
      href={href}
      onClick={() => trackLinkClick(href)}
    >
      {children}
    </a>
  )
}
