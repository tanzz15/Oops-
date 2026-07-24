import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Features } from '@/components/features'
import { Gameplay } from '@/components/gameplay'
import { Story } from '@/components/story'
import { LevelPreview } from '@/components/level-preview'
import { Leaderboard } from '@/components/leaderboard'
import { Faq } from '@/components/faq'
import { Cta } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gameplay />
        <Story />
        <LevelPreview />
        <Leaderboard />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
