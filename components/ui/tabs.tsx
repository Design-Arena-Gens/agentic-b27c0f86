import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface TabsProps {
  tabs: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
}

export function Tabs({ tabs, value, onChange }: TabsProps) {
  return (
    <div className="bg-input rounded-md p-1 inline-flex">
      {tabs.map(t => {
        const isActive = t.id === value
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={twMerge('px-3 h-9 rounded-md text-sm', isActive ? 'bg-background shadow-soft' : 'text-neutral')}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}
