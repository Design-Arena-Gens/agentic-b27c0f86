"use client"
import Link from 'next/link'
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/discover', label: 'Discover', icon: Search },
  { href: '/favorites', label: 'Saved', icon: Heart },
  { href: '/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/profile', label: 'Profile', icon: User },
]

export function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="sticky bottom-0 w-full border-t border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-screen-md safe-p">
        <ul className="grid grid-cols-5">
          {nav.map(item => {
            const active = pathname === item.href
            const Icon = item.icon
            return (
              <li key={item.href} className="flex">
                <Link href={item.href as any} className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs ${active ? 'text-[color:var(--primary-hex)]' : 'text-neutral'}`}>
                  <Icon size={20} />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
