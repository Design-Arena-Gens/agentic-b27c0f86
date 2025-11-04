import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

export function Input({ className, icon, ...props }: InputProps) {
  return (
    <div className={twMerge('relative', className)}>
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral">
          {icon}
        </div>
      )}
      <input
        className={twMerge(
          'w-full h-11 rounded-md bg-input border border-border px-3 text-sm text-secondary placeholder:text-neutral focus-ring',
          icon ? 'pl-9' : ''
        )}
        {...props}
      />
    </div>
  )
}
