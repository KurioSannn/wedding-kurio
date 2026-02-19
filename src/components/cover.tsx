type Props = {
  onOpen: () => void
}

export default function Cover({ onOpen }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-100 text-center">
      <p className="text-sm tracking-widest text-rose-500 mb-2">
        THE WEDDING OF
      </p>

      <h1 className="text-4xl font-serif text-rose-700 mb-6">
        Kurio & Partner
      </h1>

      <button
        onClick={onOpen}
        className="px-6 py-3 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition"
      >
        Buka Undangan
      </button>
    </div>
  )
}
