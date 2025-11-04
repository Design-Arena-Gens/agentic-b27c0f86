export default function FavoritesPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Saved</h1>
      <div className="grid grid-cols-1 gap-3">
        {[1,2,3].map(i => (
          <a key={i} href={`/restaurant/${i}`} className="card p-3 flex gap-3">
            <div className="w-20 h-20 rounded-md bg-gradient-to-br from-[color:var(--primary-hex)]/15 to-accent/20" />
            <div className="flex-1">
              <div className="font-medium">The Green Fork</div>
              <div className="text-sm text-neutral">Healthy ? $$ ? 10-20 min</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
