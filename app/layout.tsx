import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { BottomNav } from '../components/ui/bottom-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TasteNow',
  description: 'Discover, book, and order great food fast.',
  themeColor: '#FF5A5F',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>        
        <div className="min-h-dvh grid grid-rows-[1fr_auto]">
          <main className="safe-pt safe-pb safe-p container max-w-screen-md w-full">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
