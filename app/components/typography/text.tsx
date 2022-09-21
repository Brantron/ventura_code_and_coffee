import React from 'react'

export default function Text({
  children,
  large = false,
}: {
  children: React.ReactNode
  large?: Boolean
}) {
  let classNames = 'text-[#242834]'
  classNames += large ? ' text-lg md:text-2xl' : ' text-base'
  return <p className={classNames}>{children}</p>
}
