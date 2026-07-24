import { Mountain, Palette, Gamepad2, Flag, Coins } from 'lucide-react'

const features = [
  {
    icon: Mountain,
    title: 'Level Menantang',
    description: 'Rintangan dan platform yang semakin sulit menguji kemampuanmu di setiap langkah.',
  },
  {
    icon: Palette,
    title: 'Pixel-Art Klasik',
    description: 'Visual retro 16-bit yang hangat dan penuh nostalgia era platformer klasik.',
  },
  {
    icon: Gamepad2,
    title: 'Kontrol Sederhana',
    description: 'Lari, lompat, selesai. Mudah dipelajari, sulit dikuasai.',
  },
  {
    icon: Flag,
    title: 'Sistem Checkpoint',
    description: 'Gagal bukan akhir — lanjutkan petualangan dari checkpoint terakhirmu.',
  },
  {
    icon: Coins,
    title: 'Koin & Buah',
    description: 'Kumpulkan koin dan buah di sepanjang level untuk membuka jalan berikutnya.',
  },
]

export function Features() {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <p className="font-mono text-[10px] text-primary">FITUR</p>
      <h2 className="mt-3 text-balance font-mono text-2xl leading-snug text-foreground md:text-3xl">
        Semua yang kamu butuhkan untuk petualangan seru
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`pixel-border rounded-lg border-2 border-border bg-card p-6 ${
              index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="flex size-11 items-center justify-center rounded-md bg-secondary">
              <feature.icon className="size-5 text-accent" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-mono text-sm text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}

        {/* Filler tile with pixel deco */}
        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border p-6">
          <p className="text-center font-mono text-[10px] leading-relaxed text-muted-foreground">
            LEBIH BANYAK FITUR
            <br />
            SEGERA HADIR...
          </p>
        </div>
      </div>
    </section>
  )
}
