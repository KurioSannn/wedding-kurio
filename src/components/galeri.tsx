export default function Gallery() {
  return (
    <section className="py-20 bg-white px-6 text-center">
      <h2 className="text-3xl font-serif text-rose-600 mb-12">
        Our Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-48 bg-rose-100 rounded-lg"
          />
        ))}
      </div>
    </section>
  )
}
