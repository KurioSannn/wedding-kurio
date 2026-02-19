import { useEffect, useRef, useState } from "react"

export default function useMusic(src: string, autoPlay = false) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audioRef.current = audio

    if (autoPlay) {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }

    return () => {
      audio.pause()
    }
  }, [src, autoPlay])

  const toggle = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return { playing, toggle }
}
