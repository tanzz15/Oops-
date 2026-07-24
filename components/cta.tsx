import { Play, Download } from 'lucide-react'

export function Cta() {
  return (
    <section id="cta" className="border-y-4 border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:px-6 md:py-24">
        {/* Pixel coin row */}
        <div aria-hidden="true" className="flex gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="animate-coin-spin size-4 rounded-full bg-accent"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <h2 className="text-balance font-mono text-2xl leading-snug text-foreground md:text-4xl">
          Siap memulai petualangan?
        </h2>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Koin dan buah sudah menunggu. Lompat masuk dan taklukkan Level 1 — unduh sekarang dan mulai petualanganmu!
        </p>
        <a
          href="https://tanzz15.itch.io/oops"
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-border inline-flex items-center gap-2 rounded-md bg-accent px-8 py-4 font-mono text-sm text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          <Play className="size-4" aria-hidden="true" />
          Main Sekarang
        </a>
        <a
          href="/game/Oops!.exe"
          download
          className="pixel-border inline-flex items-center gap-2 rounded-md border-2 border-accent bg-accent/10 px-8 py-4 font-mono text-sm text-accent transition-transform hover:-translate-y-0.5"
        >
          <Download className="size-4" aria-hidden="true" />
          Download Game
        </a>
      </div>
    </section>
  )
}
