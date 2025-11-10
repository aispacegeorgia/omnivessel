"use client";

import { PropsWithChildren, useEffect, useRef, useState } from 'react'

type RevealProps = PropsWithChildren<{
  className?: string
  /** Tailwind delay class literal e.g., 'delay-100' */
  delayClass?: string
  /** Intersection threshold (0-1). Default 0.15 */
  threshold?: number
}>

export default function Reveal({ children, className, delayClass, threshold = 0.15 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const baseHidden = 'opacity-0 translate-y-2'
  const baseVisible = `animate-in fade-in slide-in-from-bottom-2 duration-700 ${delayClass ?? ''}`
  const classes = `${visible ? baseVisible : baseHidden} ${className ?? ''}`

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

