export default function Event() {
  return (
    <section className="py-20 bg-rose-50 text-center px-6">
      <h2 className="text-3xl font-serif text-rose-600 mb-10">
        Wedding Event
      </h2>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-rose-700">
            Akad Nikah
          </h3>
          <p className="text-gray-500 mt-2">
            12 Desember 2026 • 08.00 WIB
          </p>
          <p className="text-gray-500">
            Gedung Serbaguna Jakarta
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-rose-700">
            Resepsi
          </h3>
          <p className="text-gray-500 mt-2">
            12 Desember 2026 • 11.00 WIB
          </p>
          <p className="text-gray-500">
            Gedung Serbaguna Jakarta
          </p>
        </div>
      </div>
    </section>
  )
}
