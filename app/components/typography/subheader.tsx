import React from 'react'

export default function Subheader({
  children,
  classes = '',
  size = 'text-2xl',
}: {
  children: React.ReactNode
  classes?: String
  size?: String
}) {
  const classNames = `pb-4 ${size} font-header text-[#242834] ${classes}`
  return <h2 className={classNames}>{children}</h2>
}
