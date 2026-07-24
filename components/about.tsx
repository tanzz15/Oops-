import { Puzzle, Skull, Target } from 'lucide-react'

const highlights = [
  {
    icon: Puzzle,
    title: 'Teka-teki',
    description: 'Setiap sudut dunia menyimpan teka-teki yang menunggu dipecahkan.',
  },
  {
    icon: Skull,
    title: 'Jebakan & Musuh',
    description: 'Waspadai jebakan tersembunyi dan musuh yang berpatroli di setiap platform.',
  },
  {
    icon: Target,
    title: 'Uji Ketelitian',
    description: 'Refleks, strategi, dan ketelitian adalah kunci menaklukkan setiap level.',
  },
]

export function About() {
  return (
    <section id="tentang" className="border-y-4 border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="font-mono text-[10px] text-primary">TENTANG GAME</p>
        <h2 className="mt-3 max-w-2xl text-balance font-mono text-2xl leading-snug text-foreground md:text-3xl">
          Dunia pixel-art yang penuh kejutan
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Oops! adalah game platformer 2D yang mengajak pemain menjelajahi dunia pixel-art yang
          penuh teka-teki, jebakan, dan musuh. Setiap level dirancang untuk menguji refleks,
          strategi, dan ketelitian pemain.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="pixel-border rounded-lg border-2 border-border bg-card p-6"
            >
              <item.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-mono text-sm text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
