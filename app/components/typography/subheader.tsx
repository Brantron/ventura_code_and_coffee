import React from 'react'

export default function Subheader({
  children,
  classes = '',
}: {
  children: React.ReactNode
  classes?: String
}) {
  const classNames = `pb-4 text-2xl font-header text-[#242834] ${classes}`
  return <h2 className={classNames}>{children}</h2>
}
