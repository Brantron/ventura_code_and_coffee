import React from 'react'

export default function Link({
  children,
  href,
}: {
  children: React.ReactNode
  href: String
}) {
  return (
    <a className="text-sky-600" href={href}>
      {children}
    </a>
  )
}
