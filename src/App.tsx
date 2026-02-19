import { useState } from "react"

import MusicPlayer from "./components/ui/musicPlayer"
import FadeIn from "./components/ui/fadeIn"
import Hero from "./components/hero"
import Couple from "./components/couple"
import Event from "./components/event"
import Gallery from "./components/galeri"
import RSVP from "./components/RSVP"
import Footer from "./components/footer"
import Cover from "./components/cover"

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="font-sans">
      {!opened && <Cover onOpen={() => setOpened(true)} />}

      {opened && (
        <>
          <MusicPlayer />

          <main>
            <FadeIn><Hero /></FadeIn>
            <FadeIn><Couple /></FadeIn>
            <FadeIn><Event /></FadeIn>
            <FadeIn><Gallery /></FadeIn>
            <FadeIn><RSVP /></FadeIn>
            <Footer />
          </main>
        </>
      )}
    </div>
  )
}
