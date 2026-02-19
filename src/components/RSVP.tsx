import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function RSVP() {
  const [name, setName] = useState("")
  const [attendance, setAttendance] = useState("")
  const [guestCount, setGuestCount] = useState(1)
  const [message, setMessage] = useState("")
  const [gift, setGift] = useState(false)

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const trimmedName = name.trim()

    if (!trimmedName || !attendance) {
      alert("Isi nama dan konfirmasi kehadiran ya")
      return
    }

    try {
      setLoading(true)

      const { error } = await supabase
        .from("responses")
        .insert([
          {
            name: trimmedName,
            attendance,
            guest_count: guestCount,
            message: message.trim() || null,
            gift,
          },
        ])

      if (error) throw error

      setSent(true)

      // reset form
      setName("")
      setAttendance("")
      setGuestCount(1)
      setMessage("")
      setGift(false)
    } catch (err) {
      console.error(err)
      alert("Gagal mengirim RSVP")
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <section className="py-20 bg-rose-50 px-6 text-center">
        <h2 className="text-3xl font-serif text-rose-600 mb-4">
          Terima kasih 💖
        </h2>
        <p className="text-rose-700">
          Konfirmasi kehadiran Anda telah diterima
        </p>
      </section>
    )
  }

  return (
    <section className="py-20 bg-rose-50 px-6 text-center">
      <h2 className="text-3xl font-serif text-rose-600 mb-8">
        RSVP
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />

        <select
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
        >
          <option value="">Konfirmasi Kehadiran</option>
          <option value="hadir">Hadir</option>
          <option value="tidak hadir">Tidak Hadir</option>
        </select>

        <input
          type="number"
          min={1}
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          placeholder="Jumlah Tamu"
        />

        <textarea
          placeholder="Ucapan (opsional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
          rows={3}
        />

        <label className="flex items-center gap-2 text-rose-700">
          <input
            type="checkbox"
            checked={gift}
            onChange={(e) => setGift(e.target.checked)}
          />
          Akan mengirim hadiah
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </section>
  )
}
