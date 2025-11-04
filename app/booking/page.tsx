import { Button } from '../../components/ui/button'

export default function BookingPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Book a table</h1>

      <div className="card p-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-neutral">Date</label>
            <input type="date" className="mt-1 w-full h-11 rounded-md bg-input border border-border px-3 text-sm focus-ring" />
          </div>
          <div>
            <label className="text-sm text-neutral">Time</label>
            <input type="time" className="mt-1 w-full h-11 rounded-md bg-input border border-border px-3 text-sm focus-ring" />
          </div>
        </div>
        <div>
          <label className="text-sm text-neutral">Party size</label>
          <select className="mt-1 w-full h-11 rounded-md bg-input border border-border px-3 text-sm focus-ring">
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm text-neutral">Special requests</label>
          <textarea rows={3} className="mt-1 w-full rounded-md bg-input border border-border px-3 py-2 text-sm focus-ring" placeholder="Allergies, seating preferences..." />
        </div>
        <Button variant="primary" className="w-full h-12">Confirm booking</Button>
      </div>
    </div>
  )
}
