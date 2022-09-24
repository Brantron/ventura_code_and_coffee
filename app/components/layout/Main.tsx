import React, { useEffect } from 'react'
import { pageView } from '~/components/utils/analytics'

export default function Main({
  children,
  classes = '',
}: {
  children: React.ReactNode
  classes?: string
  innerClasses?: string
}) {
  useEffect(() => {
    pageView()
  }, [])
  return <main className={classes}>{children}</main>
}
