import * as React from 'react'

interface SegmentedControlProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

export function SegmentedControl({ options, value, onChange }: SegmentedControlProps) {
  return (
    <div className="bg-input rounded-full p-1 inline-flex">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`h-9 px-4 rounded-full text-sm transition-colors ${value === opt ? 'bg-background shadow-soft' : 'text-neutral'}`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
