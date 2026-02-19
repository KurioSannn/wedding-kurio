export default function Couple() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-serif text-rose-600 mb-12">
        Bride & Groom
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <div className="w-40 h-40 mx-auto bg-rose-100 rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-rose-700">
            Kurio
          </h3>
          <p className="text-gray-500 text-sm">
            Putra dari Bapak & Ibu
          </p>
        </div>

        <div>
          <div className="w-40 h-40 mx-auto bg-rose-100 rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-rose-700">
            Partner
          </h3>
          <p className="text-gray-500 text-sm">
            Putri dari Bapak & Ibu
          </p>
        </div>
      </div>
    </section>
  )
}
