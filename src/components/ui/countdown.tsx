import useCountdown from "../../hooks/useCountdown"

export default function Countdown() {
  const { days, hours, minutes, seconds } =
    useCountdown("2026-12-12T08:00:00")

  return (
    <div className="flex gap-4 justify-center mt-6">
      <TimeBox label="Hari" value={days} />
      <TimeBox label="Jam" value={hours} />
      <TimeBox label="Menit" value={minutes} />
      <TimeBox label="Detik" value={seconds} />
    </div>
  )
}

type BoxProps = {
  label: string
  value: number
}

function TimeBox({ label, value }: BoxProps) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-rose-600">
        {value}
      </div>
      <div className="text-xs text-gray-500">
        {label}
      </div>
    </div>
  )
}
