import { Search, Star, Clock, MapPin } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

const categories = ['Trending', 'Near you', 'Delivery', 'Dine-in', 'Bakery', 'Cafe']

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Header / Brand */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-neutral flex items-center gap-1">
            <MapPin size={16} /> San Francisco
          </div>
          <h1 className="mt-1 text-2xl font-semibold">Find food you love</h1>
        </div>
        <div className="rounded-full h-10 w-10 bg-[color:var(--primary-hex)]/10 flex items-center justify-center font-bold text-[color:var(--primary-hex)]">
          T
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Input icon={<Search className="text-neutral" size={18} />} placeholder="Search dishes, restaurants..." />
        </div>
        <Button variant="primary">Go</Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((c) => (
          <Badge key={c} variant={c === 'Trending' ? 'primary' : 'soft'}>{c}</Badge>
        ))}
      </div>

      {/* Feature banner */}
      <section className="brand-gradient rounded-lg p-4 text-white">
        <h2 className="text-lg font-semibold">Taste the season</h2>
        <p className="text-white/90 text-sm mt-1">Fresh menus from top spots near you.</p>
        <div className="mt-3 flex gap-2">
          <Button variant="inverse">Explore</Button>
          <Button variant="ghostInverse">Book a table</Button>
        </div>
      </section>

      {/* Lists */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Popular today</h3>
        <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => (
            <a key={i} href={`/restaurant/${i}`} className="card block overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-[color:var(--primary-hex)]/15 to-accent/20" />
              <div className="p-3 space-y-1">
                <div className="text-sm font-medium">Sunset Sushi</div>
                <div className="text-xs text-neutral flex items-center gap-2">
                  <span className="inline-flex items-center gap-1"><Star size={14} className="text-[color:var(--primary-hex)]"/> 4.{i}</span>
                  <span>?</span>
                  <span>Japanese</span>
                </div>
                <div className="text-xs text-neutral flex items-center gap-1"><Clock size={14}/> 25-35 min</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card p-4 flex items-center justify-between">
        <div>
          <div className="font-medium">Book ahead for tonight</div>
          <div className="text-sm text-neutral">Skip the wait. Easy reservations.</div>
        </div>
        <Button asChild variant="primary"><a href="/booking">Book</a></Button>
      </section>
    </div>
  )
}
