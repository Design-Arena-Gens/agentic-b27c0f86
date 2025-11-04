import { Progress } from '../../components/ui/progress'

export default function OrdersPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold">Your orders</h1>

      <section className="card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Order #2486</div>
            <div className="text-sm text-neutral">Sunset Sushi ? Arriving in ~18 min</div>
          </div>
          <div className="text-sm font-medium text-[color:var(--primary-hex)]">On the way</div>
        </div>
        <Progress value={65} />
        <div className="grid grid-cols-3 gap-2 text-center text-xs text-neutral">
          <div>
            <div className="h-2 rounded bg-[color:var(--primary-hex)]/60" />
            <div>Confirmed</div>
          </div>
          <div>
            <div className="h-2 rounded bg-[color:var(--primary-hex)]/80" />
            <div>Preparing</div>
          </div>
          <div>
            <div className="h-2 rounded bg-input" />
            <div>Delivering</div>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <div className="text-sm text-neutral">History</div>
        {[1,2].map(i => (
          <div key={i} className="card p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">Order #24{i}0</div>
              <div className="text-sm text-neutral">Noble Noodles ? Delivered</div>
            </div>
            <div className="text-sm">$2{i}.90</div>
          </div>
        ))}
      </section>
    </div>
  )
}
