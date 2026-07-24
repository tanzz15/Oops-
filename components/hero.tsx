import { Play, Clapperboard, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-16">
      {/* Decorative pixel clouds */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-4 w-16 bg-primary/20" />
        <div className="absolute left-[12%] top-28 h-4 w-24 bg-primary/20" />
        <div className="absolute right-[10%] top-40 h-4 w-20 bg-primary/15" />
        <div className="absolute right-[6%] top-44 h-4 w-28 bg-primary/15" />
        <div className="absolute left-[45%] top-16 h-4 w-14 bg-primary/10" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <p className="rounded-md border-2 border-border bg-secondary px-3 py-1 font-mono text-[10px] text-primary">
            Platformer 2D Pixel-Art
          </p>
          <h1 className="font-mono text-4xl leading-tight text-foreground md:text-6xl">
            Oops<span className="text-accent">!</span>
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Jelajahi dunia penuh tantangan, kumpulkan koin dan buah untuk melanjutkan level, hindari
            rintangan, dan taklukkan setiap level. Tersedia untuk diunduh di Windows.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tanzz15.itch.io/oops"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-xs text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Play className="size-4" aria-hidden="true" />
              Main Sekarang
            </a>
            <a
              href="/images/trailer.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border inline-flex items-center gap-2 rounded-md border-2 border-primary bg-secondary px-6 py-3 font-mono text-xs text-primary transition-transform hover:-translate-y-0.5"
            >
              <Clapperboard className="size-4" aria-hidden="true" />
              Lihat Trailer
            </a>
            <a
              href="/game/Oops!.exe"
              download
              className="pixel-border inline-flex items-center gap-2 rounded-md border-2 border-accent bg-accent/10 px-6 py-3 font-mono text-xs text-accent transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Game
            </a>
          </div>

          {/* Pixel stats strip */}
          <dl className="mt-4 flex gap-8">
            <div>
              <dt className="text-xs text-muted-foreground">Level</dt>
              <dd className="font-mono text-lg text-accent">1+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Checkpoint</dt>
              <dd className="font-mono text-lg text-primary">3</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Gratis</dt>
              <dd className="font-mono text-lg text-foreground">100%</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
          <div className="animate-float-bob">
            <video
              src="/images/part1.mp4"
              autoPlay
              muted
              loop
              playsInline
              width={520}
              height={520}
              className="pixelated rounded-lg border-4 border-border w-full h-auto"
            >
              <track kind="captions" srcLang="id" label="Tidak ada caption" />
            </video>
          </div>
          <div
            aria-hidden="true"
            className="animate-coin-spin absolute -right-3 -top-3 flex size-10 items-center justify-center rounded-full border-4 border-accent-foreground/20 bg-accent font-mono text-sm text-accent-foreground"
          >
            $
          </div>
        </div>
      </div>
    </section>
  )
}
