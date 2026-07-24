const faqs = [
  {
    question: 'Apakah game ini gratis?',
    answer: 'Ya. Oops! sepenuhnya gratis untuk dimainkan, tanpa biaya tersembunyi.',
  },
  {
    question: 'Apakah bisa dimainkan di browser?',
    answer: 'Tidak. Oops! adalah game desktop (Windows) yang perlu diunduh dan diinstal. Kamu bisa mendapatkannya secara gratis di halaman itch.io kami — klik tombol "Main Sekarang" untuk menuju ke halaman download.',
  },
  {
    question: 'Apakah progres tersimpan?',
    answer: 'Tidak. Oops! adalah game berbasis sesi — setiap kali kamu membuka game, kamu memulai dari awal. Nikmati setiap permainan sebagai petualangan baru!',
  },
  {
    question: 'Kalau mati, harus mulai dari awal lagi?',
    answer: 'Tidak. Di dalam satu sesi permainan, ada checkpoint di setiap area. Kalau karaktermu mati, kamu akan respawn di checkpoint terakhir yang sudah dicapai — jadi tidak perlu ulang dari awal.',
  },
  {
    question: 'Ada berapa checkpoint dalam satu level?',
    answer: 'Level 1 memiliki 3 checkpoint. Setiap checkpoint menandai area baru dengan tantangan yang semakin sulit.',
  },
  {
    question: 'Apa yang terjadi setelah menyelesaikan Level 1?',
    answer: 'Checkpoint ke-3 adalah gerbang menuju Level 2 yang sedang dalam pengembangan. Kumpulkan semua koin dan buah untuk membuka gerbang tersebut!',
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
      <p className="text-center font-mono text-[10px] text-primary">FAQ</p>
      <h2 className="mt-3 text-balance text-center font-mono text-2xl leading-snug text-foreground md:text-3xl">
        Pertanyaan yang sering diajukan
      </h2>

      <div className="mt-10 flex flex-col gap-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="pixel-border group rounded-lg border-2 border-border bg-card"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-mono text-xs leading-relaxed text-foreground [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span
                aria-hidden="true"
                className="font-mono text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
