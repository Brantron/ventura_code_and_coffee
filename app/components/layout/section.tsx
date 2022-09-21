import React from 'react'

export default function Section({
  children,
  classes = '',
  innerClasses = '',
}: {
  children: React.ReactNode
  classes?: String
  innerClasses?: String
}) {
  const classNames = ` ${classes}`
  let innerClassNames = `container mx-md max-w-screen-2xl pl-4 pr-4 ${innerClasses}`
  if (!innerClasses.includes('pt-')) {
    innerClassNames += ' pt-12'
  }
  if (!innerClasses.includes('pb-')) {
    console.log('adding pb-12')
    innerClassNames += ' pb-12'
  }
  return (
    <section className={classNames}>
      <div className={innerClassNames}>{children}</div>
    </section>
  )
}
