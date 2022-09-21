import React from 'react'

export default function Header({
  children,
  classes = '',
}: {
  children: React.ReactNode
  classes?: String
}) {
  const classNames = `text-3xl text-[#242834] font-header pb-6 ${classes}`
  return <h1 className={classNames}>{children}</h1>
}
