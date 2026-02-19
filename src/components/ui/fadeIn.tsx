import type { ReactNode } from "react"
import useInView from "../../hooks/useInView"

type Props = {
  children: ReactNode
}

export default function FadeIn({ children }: Props) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  )
}
