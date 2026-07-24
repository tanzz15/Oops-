'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'Level', href: '#level' },
  { label: 'Pencapaian', href: '#leaderboard' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6" aria-label="Navigasi utama">
        <Link href="#beranda" className="font-mono text-sm text-accent md:text-base">
          Oops!
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://tanzz15.itch.io/oops"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border hidden rounded-md bg-accent px-4 py-2 font-mono text-xs text-accent-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Main Sekarang
          </a>
          <button
            type="button"
            className="text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://tanzz15.itch.io/oops"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-md bg-accent px-3 py-2 text-center font-mono text-xs text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                Main Sekarang
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
