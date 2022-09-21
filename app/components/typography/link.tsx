import React from 'react'

export default function Link({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a className="text-[#095B93] font-bold" href={href}>
      {children}
    </a>
  )
}
