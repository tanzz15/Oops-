import Image from 'next/image'

export function Story() {
  return (
    <section id="cerita" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Image
            src="/images/story-level-complete.png"
            alt="Cuplikan game Oops! saat level selesai: karakter ksatria berdiri di platform dengan pesan Great job, 123 koin dan 3/3 buah terkumpul, Level Complete"
            width={688}
            height={435}
            className="pixelated pixel-border w-full rounded-lg border-4 border-border"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="font-mono text-[10px] text-primary">CERITA</p>
          <h2 className="mt-3 text-balance font-mono text-2xl leading-snug text-foreground md:text-3xl">
            Satu langkah salah... Oops!
          </h2>
          <div className="mt-4 flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              Di sebuah dunia kecil di tengah samudra biru, hiduplah makhluk mungil yang ceroboh.
              Suatu hari, ia tersandung dan menjatuhkan seluruh koin dan buah milik desanya — semua
              berhamburan ke penjuru pulau terapung. <span className="text-foreground">Oops!</span>
            </p>
            <p>
              Kini ia harus menebus kesalahannya: melompati platform demi platform, menghindari
              jebakan dan musuh, serta mengumpulkan kembali setiap koin dan buah yang hilang.
            </p>
            <p>
              Hanya dengan mengembalikan semuanya, gerbang menuju dunia berikutnya akan terbuka.
              Petualangan kecil, tanggung jawab besar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
