import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:opacity-95',
        soft: 'bg-surface text-secondary hover:bg-input border border-border',
        outline: 'border border-border bg-background hover:bg-input',
        ghost: 'hover:bg-input',
        inverse: 'bg-white text-[color:var(--primary-hex)] hover:bg-white/95',
        ghostInverse: 'bg-white/10 text-white hover:bg-white/15'
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-5 text-base',
      }
    },
    defaultVariants: {
      variant: 'soft',
      size: 'md'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp: any = asChild ? 'span' : 'button'
  return (
    <Comp className={twMerge(buttonStyles({ variant, size }), className)} {...props} />
  )
}
