import React from 'react'

export default function Subheader({ children }: { children: React.ReactNode }) {
  return <h2 className="pb-4 text-2xl font-header">{children}</h2>
}
