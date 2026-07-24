import type { Metadata, Viewport } from 'next'
import { Nunito, Press_Start_2P } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
})

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
})

export const metadata: Metadata = {
  title: 'Oops! — Game Platformer 2D Pixel-Art',
  description:
    'Jelajahi dunia penuh tantangan, kumpulkan koin dan buah, hindari rintangan, dan taklukkan setiap level di Oops! — game platformer 2D pixel-art gratis untuk Windows.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a2040',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`bg-background ${nunito.variable} ${pressStart.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
