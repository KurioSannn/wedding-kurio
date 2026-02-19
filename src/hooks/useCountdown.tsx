import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function useCountdown(targetDate: string): TimeLeft {
  const calc = (): TimeLeft => {
    const target = new Date(targetDate).getTime()
    const now = new Date().getTime()
    const diff = target - now

    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    }
  }

  const [time, setTime] = useState<TimeLeft>(calc())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(calc())
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return time
}
