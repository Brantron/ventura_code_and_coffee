import React from 'react'
import withCssDefaults from '~/components/utils/withCssDefaults'

export default function Section({
  children,
  classes = '',
  innerClasses = '',
}: {
  children: React.ReactNode
  classes?: string
  innerClasses?: string
}) {
  const classNames = ` ${classes}`
  const innerClassNames = withCssDefaults({
    classes: 'pl-4 pr-4 container mx-md 0 max-w-prose',
    overrides: innerClasses,
  })

  return (
    <section className={classNames}>
      <div className={innerClassNames}>{children}</div>
    </section>
  )
}
