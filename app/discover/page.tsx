"use client"
import { useState } from 'react'
import { Tabs } from '../../components/ui/tabs'
import { Input } from '../../components/ui/input'
import { Search, Filter } from 'lucide-react'

export default function DiscoverPage() {
  const [tab, setTab] = useState('delivery')
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Discover</h1>
        <Tabs tabs={[{id:'delivery',label:'Delivery'},{id:'dinein',label:'Dine-in'},{id:'pickup',label:'Pickup'}]} value={tab} onChange={setTab} />
      </div>

      <div className="flex gap-2">
        <div className="flex-1"><Input icon={<Search size={18} />} placeholder="Search cuisines, places..." /></div>
        <button className="h-11 w-11 rounded-md border border-border bg-background flex items-center justify-center"><Filter size={18} /></button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {[1,2,3,4,5,6].map(i => (
          <a key={i} href={`/restaurant/${i}`} className="card p-3 flex gap-3">
            <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[color:var(--primary-hex)]/15 to-accent/20" />
            <div className="flex-1">
              <div className="font-medium">Noble Noodles</div>
              <div className="text-sm text-neutral">Thai ? $$ ? 20-30 min</div>
              <div className="text-xs text-neutral mt-1">Free delivery over $15</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
