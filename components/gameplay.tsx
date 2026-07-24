import { ArrowBigUp, ShieldAlert, Coins, Flag } from 'lucide-react'

const steps = [
  {
    icon: ArrowBigUp,
    step: '01',
    title: 'Lompat Antar Platform',
    description: 'Ukur waktu lompatanmu dengan tepat untuk berpindah dari platform ke platform.',
  },
  {
    icon: ShieldAlert,
    step: '02',
    title: 'Hindari Rintangan & Musuh',
    description: 'Duri, jebakan, dan musuh berpatroli siap menghentikan langkahmu.',
  },
  {
    icon: Coins,
    step: '03',
    title: 'Kumpulkan Koin & Buah',
    description: 'Setiap koin dan buah yang terkumpul membuka jalan menuju level berikutnya.',
  },
  {
    icon: Flag,
    step: '04',
    title: 'Capai Garis Akhir',
    description: 'Taklukkan setiap tantangan dan raih garis akhir di ujung level.',
  },
]

export function Gameplay() {
  return (
    <section id="gameplay" className="border-y-4 border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="font-mono text-[10px] text-primary">GAMEPLAY</p>
        <h2 className="mt-3 text-balance font-mono text-2xl leading-snug text-foreground md:text-3xl">
          Cara bermain
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Pemain melompat antar platform, menghindari rintangan dan musuh, mengumpulkan koin dan
          buah, lalu mencapai garis akhir di setiap level.
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.step}
              className="pixel-border relative rounded-lg border-2 border-border bg-card p-6"
            >
              <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground">
                {step.step}
              </span>
              <step.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-mono text-xs leading-relaxed text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
