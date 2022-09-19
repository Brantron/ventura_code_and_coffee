import React from 'react'

export default function Text({ children }: { children: React.ReactNode }) {
  return <p className="font-regular">{children}</p>
}
