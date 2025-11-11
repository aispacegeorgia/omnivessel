"use client";

import { useEffect, useState } from 'react'
import { ArrowRightIcon, RocketIcon, MobileIcon, EnvelopeClosedIcon, Cross1Icon } from '@radix-ui/react-icons'

export default function Hero() {
  // Default to visible so SSR/no-JS still shows content
  const [reveal, setReveal] = useState(true)
  const [showCallSheet, setShowCallSheet] = useState(false)
  // Keep a tiny delay-based animation for clients that have JS
  useEffect(() => {
    const t = setTimeout(() => setReveal(true), 50)
    return () => clearTimeout(t)
  }, [])
  useEffect(() => {
    if (!showCallSheet) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowCallSheet(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showCallSheet])
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden border-b border-maritime-navy/10 bg-gradient-to-b from-maritime-ocean/10 via-maritime-teal/10 to-maritime-mist dark:from-maritime-navy dark:via-maritime-navy dark:to-maritime-navy"
    >
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-maritime-ocean/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="container relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className={`inline-flex items-center gap-2 rounded-full border border-maritime-navy/10 bg-white/70 px-3 py-1 text-xs font-medium text-maritime-navy/70 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-maritime-mist/80 ${reveal ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700' : 'opacity-0'}`}>
            <RocketIcon className="h-3.5 w-3.5" />
            Inspection‑ready fleets. Zero surprises.
          </span>
          <h1 className={`mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl ${reveal ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-100' : 'opacity-0'}`}>
            Inspection‑Ready Compliance for Modern Fleets
          </h1>
          <p className={`mt-4 text-base text-maritime-navy/80 sm:text-lg dark:text-maritime-mist/80 ${reveal ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-200' : 'opacity-0'}`}>
            OmniVessel helps shipowners and managers achieve full compliance across PSC, Flag, SIRE 2.0, CDI, and RightShip. From pre‑inspection audits to deficiency closure and crisis support, we keep your vessels safe, compliant, and moving.
          </p>
          <div className={`mt-8 flex items-center justify-center gap-3 ${reveal ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-300' : 'opacity-0'}`}>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md bg-maritime-ocean px-4 py-2 text-white shadow-sm transition hover:bg-maritime-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maritime-ocean"
            >
              Explore Services
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-white/70 px-4 py-2 text-maritime-navy shadow-sm ring-1 ring-inset ring-maritime-navy/10 backdrop-blur transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
            >
              Why OmniVessel
            </a>
          </div>
          {/* Hero image banner */}
          <div className={`mt-12 ${reveal ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-300' : 'opacity-0'}`}>
            <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-maritime-navy/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <img
                src="/hero-vessel.jpg"
                alt="Aerial view of tanker vessel at sea"
                width={3992}
                height={2242}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maritime-navy/20 to-transparent dark:from-black/40" />
            </div>
          </div>
          <div className={`mt-3 flex items-center justify-center gap-3 sm:hidden ${reveal ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-700 motion-safe:delay-400' : 'opacity-0'}`}>
            <button
              type="button"
              onClick={() => setShowCallSheet(true)}
              aria-label="Choose a number to call"
              className="inline-flex items-center gap-2 rounded-md bg-maritime-ocean px-4 py-2 text-white shadow-sm transition hover:bg-maritime-teal"
            >
              <MobileIcon className="h-4 w-4" />
              Call
            </button>
            <a
              href="mailto:info@omnivessel.com"
              aria-label="Email OmniVessel"
              className="inline-flex items-center gap-2 rounded-md bg-white/70 px-4 py-2 text-maritime-navy shadow-sm ring-1 ring-inset ring-maritime-navy/10 backdrop-blur transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
            >
              <EnvelopeClosedIcon className="h-4 w-4" />
              Email
            </a>
          </div>
          {showCallSheet && (
            <div className="sm:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" onClick={() => setShowCallSheet(false)}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 animate-in slide-in-from-bottom-4 duration-200">
                <div
                  className="mx-auto w-full max-w-md rounded-t-2xl border border-b-0 border-maritime-navy/10 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-maritime-navy"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-maritime-navy/20 dark:bg-white/20" />
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm">Call OmniVessel</h3>
                    <button aria-label="Close" className="rounded p-1 hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setShowCallSheet(false)}>
                      <Cross1Icon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <a href="tel:+995555333016" className="inline-flex items-center justify-between rounded-md border border-maritime-navy/10 px-3 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                      <span className="inline-flex items-center gap-2"><MobileIcon className="h-4 w-4" />+995 555 333 016</span>
                    </a>
                    <a href="tel:+995555965050" className="inline-flex items-center justify-between rounded-md border border-maritime-navy/10 px-3 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                      <span className="inline-flex items-center gap-2"><MobileIcon className="h-4 w-4" />+995 555 965 050</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
