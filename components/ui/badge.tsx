import { twMerge } from 'tailwind-merge'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'soft' | 'primary'
  className?: string
}

export function Badge({ children, variant = 'soft', className = '' }: BadgeProps) {
  const styles = variant === 'primary'
    ? 'bg-[color:var(--primary-hex)] text-white'
    : 'bg-input text-secondary border border-border'
  return (
    <span className={twMerge('inline-flex items-center h-8 px-3 rounded-full text-sm', styles, className)}>
      {children}
    </span>
  )
}
