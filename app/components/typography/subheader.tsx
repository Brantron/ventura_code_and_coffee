import React from 'react'
import withCssDefaults from '~/utils/withCssDefaults'

export default function Subheader({
  children,
  classes = '',
}: {
  children: React.ReactNode
  classes?: string
  size?: string
}) {
  const classNames = withCssDefaults({
    classes: `pb-4 text-3xl md:text-center font-header text-[#242834]`,
    overrides: classes,
  })

  return <h2 className={classNames}>{children}</h2>
}
