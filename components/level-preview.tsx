import Image from 'next/image'
import { Lock } from 'lucide-react'

const checkpoints = [
  {
    number: 1,
    image: '/images/cp1.png',
    title: 'Checkpoint 1 — Pantai Awal',
    description:
      'Titik awal petualangan. Pelajari kontrol dasar, kumpulkan koin pertamamu, dan kenali ritme lompatan.',
    status: 'Terbuka',
  },
  {
    number: 2,
    image: '/images/cp2.png',
    title: 'Checkpoint 2 — Reruntuhan Terapung',
    description:
      'Platform mulai renggang dan musuh mulai bermunculan. Buah tersembunyi menunggu pemain yang teliti.',
    status: 'Terbuka',
  },
  {
    number: 3,
    image: '/images/cp3.png',
    title: 'Checkpoint 3 — Gerbang Dunia Baru',
    description:
      'Ujung Level 1. Kumpulkan semua koin dan buah untuk membuka gerbang menuju Level 2 yang akan datang.',
    status: 'Menuju Level 2',
  },
]

export function LevelPreview() {
  return (
    <section id="level" className="border-y-4 border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] text-primary">PREVIEW LEVEL</p>
            <h2 className="mt-3 text-balance font-mono text-2xl leading-snug text-foreground md:text-3xl">
              Level 1 — Pulau Terapung
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Satu level, tiga checkpoint. Lihat langsung cuplikan gameplay asli dari setiap area
              Level 1 — dari pantai awal hingga gerbang menuju level berikutnya.
            </p>
          </div>
        </div>

        {/* Checkpoint cards with game screenshots */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {checkpoints.map((cp) => (
            <div
              key={cp.number}
              className="pixel-border flex flex-col overflow-hidden rounded-lg border-2 border-border bg-card"
            >
              {/* Game screenshot */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/10">
                <Image
                  src={cp.image}
                  alt={`Cuplikan gameplay ${cp.title}`}
                  fill
                  className="pixelated object-cover"
                />
                {/* Checkpoint badge overlay */}
                <span className="absolute left-2 top-2 pixel-border flex items-center gap-1.5 rounded-md bg-accent/90 px-2 py-1 font-mono text-[10px] text-accent-foreground backdrop-blur-sm">
                  CP {cp.number}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-md bg-secondary font-mono text-sm text-accent">
                    {cp.number}
                  </span>
                  <span
                    className={`rounded-md px-2 py-1 font-mono text-[9px] ${
                      cp.number === 3 ? 'bg-primary/20 text-primary' : 'bg-accent/15 text-accent'
                    }`}
                  >
                    {cp.status}
                  </span>
                </div>
                <h3 className="mt-4 font-mono text-xs leading-relaxed text-foreground">
                  {cp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Level 2 teaser */}
        <div className="mt-6 flex items-center gap-4 rounded-lg border-2 border-dashed border-border p-5">
          <Lock className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-mono text-xs text-foreground">Level 2 </span>
            sedang dalam pengembangan — checkpoint ke-3 akan menjadi gerbang masuknya. Nantikan
            dunia baru dengan tantangan yang lebih berat!
          </p>
        </div>
      </div>
    </section>
  )
}
