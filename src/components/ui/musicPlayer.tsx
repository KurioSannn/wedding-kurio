import useMusic from "../../hooks/useMusic"
import music from "../../assets/music.mp3"

export default function MusicPlayer() {
  const { playing, toggle } = useMusic(music, false)

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 bg-rose-600 text-white px-4 py-2 rounded-full"
    >
      {playing ? "Pause Music" : "Play Music"}
    </button>
  )
}
