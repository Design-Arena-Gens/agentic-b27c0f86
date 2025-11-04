import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export function Card({ className = '', children, as: Comp = 'div', ...props }: any) {
  return (
    <Comp className={twMerge('card', className)} {...props}>
      {children}
    </Comp>
  )
}
