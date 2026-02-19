import Countdown from "./ui/countdown"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-rose-50 px-6">
      <p className="tracking-widest text-rose-400 text-sm mb-4">
        THE WEDDING OF
      </p>

      <h1 className="text-5xl md:text-6xl font-serif text-rose-700 mb-4">
        Kurio & Partner
      </h1>

      <p className="text-rose-500 mb-6">
        12 Desember 2026
      </p>

      <Countdown />
    </section>
  )
}
