export default function ProfilePage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <div className="card p-4 space-y-3">
        <div>
          <div className="text-sm text-neutral">Name</div>
          <div className="font-medium">Alex Johnson</div>
        </div>
        <div>
          <div className="text-sm text-neutral">Email</div>
          <div className="font-medium">alex@example.com</div>
        </div>
        <div className="text-sm text-neutral">Preferences</div>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 h-8 rounded-full bg-input border border-border inline-flex items-center text-sm">No peanuts</span>
          <span className="px-3 h-8 rounded-full bg-input border border-border inline-flex items-center text-sm">Vegetarian</span>
        </div>
      </div>
    </div>
  )
}
