export function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 rounded-full bg-input overflow-hidden">
      <div className="h-full bg-[color:var(--primary-hex)] transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}
