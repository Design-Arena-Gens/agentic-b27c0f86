"use client"
import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Badge } from '../../../components/ui/badge'
import { Star, Clock, ChevronLeft, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

export default function RestaurantPage({ params }: { params: { id: string }}) {
  const [qty, setQty] = useState(1)
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="h-40 rounded-lg bg-gradient-to-br from-[color:var(--primary-hex)]/15 to-accent/25" />
        <Link href="/discover" className="absolute top-3 left-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center"><ChevronLeft /></Link>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold">Sunset Sushi</h1>
          <div className="text-sm text-neutral flex items-center gap-2 mt-1">
            <span className="inline-flex items-center gap-1"><Star size={16} className="text-[color:var(--primary-hex)]"/>4.8</span>
            <span>?</span>
            <span>Japanese</span>
            <span>?</span>
            <span className="inline-flex items-center gap-1"><Clock size={16}/>20-30 min</span>
          </div>
        </div>
        <Badge variant="primary">Open</Badge>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {["Popular", "Sushi", "Bowls", "Sides", "Drinks"].map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </div>

      <section className="space-y-3">
        {[1,2,3].map(i => (
          <div key={i} className="card p-3 flex gap-3">
            <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[color:var(--primary-hex)]/10 to-accent/20" />
            <div className="flex-1">
              <div className="font-medium">Salmon Nigiri Set</div>
              <div className="text-sm text-neutral">Fresh salmon over seasoned rice</div>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$14.{i}0</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setQty(Math.max(1, qty-1))} className="h-8 w-8 rounded-md border border-border flex items-center justify-center"><Minus size={16} /></button>
                  <span className="w-6 text-center">{qty}</span>
                  <button onClick={() => setQty(qty+1)} className="h-8 w-8 rounded-md bg-background border border-border flex items-center justify-center"><Plus size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="h-16" />
      <div className="fixed bottom-16 left-0 right-0 safe-p">
        <div className="max-w-screen-md mx-auto">
          <Button asChild variant="primary" className="w-full h-12">
            <Link href="/orders">Add to cart ? $28.60</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
