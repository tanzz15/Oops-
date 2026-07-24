import { Coins, Apple, Zap, Shield, Unlock, Star } from 'lucide-react'

const achievements = [
  {
    icon: Coins,
    title: 'Kolektor Koin',
    description: 'Kumpulkan 100 koin dalam satu level — bukti kamu pantas disebut raja koin.',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/30',
  },
  {
    icon: Apple,
    title: 'Pemakan Buah',
    description: 'Kumpulkan semua buah yang tersebar di Level 1 — tidak ada yang terlewat!',
    color: 'text-destructive',
    bg: 'bg-destructive/10',
    border: 'border-destructive/30',
  },
  {
    icon: Zap,
    title: 'Speedrunner',
    description: 'Selesaikan Level 1 dalam waktu di bawah 2 menit — gesit dan tepat.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    icon: Shield,
    title: 'Tanpa Cedera',
    description: 'Selesaikan satu level penuh tanpa terkena musuh atau jebakan sekali pun.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
  {
    icon: Unlock,
    title: 'Pembuka Gerbang',
    description: 'Buka akses menuju Level 2 dengan mengumpulkan semua koin dan buah.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
  },
  {
    icon: Star,
    title: 'Sempurna',
    description: 'Raih semua pencapaian di atas dalam satu kali permainan — legenda sejati!',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
]

export function Leaderboard() {
  return (
    <section id="leaderboard" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="text-center font-mono text-[10px] text-primary">PENCAPAIAN</p>
      <h2 className="mt-3 text-balance text-center font-mono text-2xl leading-snug text-foreground md:text-3xl">
        Tantangan Level 1
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center leading-relaxed text-muted-foreground">
        Buktikan kemampuanmu! Setiap tantangan yang berhasil diselesaikan akan membuka
        kebanggaan tersendiri. Bisakah kamu meraih semuanya?
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((ach, i) => (
          <div
            key={ach.title}
            className={`pixel-border rounded-lg border-2 ${ach.border} ${ach.bg} p-5 transition-transform hover:-translate-y-1`}
          >
            <div className="flex items-start gap-4">
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-md ${ach.color}`}
              >
                <ach.icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-xs text-foreground">{ach.title}</h3>
                  <span className="rounded bg-card px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
                    #{i + 1}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {ach.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement progress hint */}
      <div className="mt-8 flex items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border p-4">
        <Star className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pencapaian akan aktif secara otomatis saat kamu memenuhi syaratnya dalam permainan.
        </p>
      </div>
    </section>
  )
}

