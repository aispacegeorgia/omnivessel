"use client";

import { useEffect, useState } from 'react';
// Hash navigation uses standard anchors; Next Link not needed
import { NAV_ITEMS } from '@/lib/nav';
import { HamburgerMenuIcon, Cross1Icon, MobileIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import ThemeToggle from '@/components/ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showCallSheet, setShowCallSheet] = useState(false);

  useEffect(() => {
    if (!showCallSheet) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowCallSheet(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showCallSheet]);

  return (
    <header className="sticky top-0 z-50 border-b border-maritime-navy/20 bg-maritime-mist/90 backdrop-blur dark:border-white/10 dark:bg-maritime-navy/80">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-bold uppercase tracking-wideish text-maritime-navy">OmniVessel</a>
        <div className="hidden md:flex items-center gap-2">
          <nav id="site-nav" aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="uppercase font-bold tracking-wideish text-maritime-navy hover:text-maritime-ocean dark:text-maritime-mist dark:hover:text-maritime-teal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        <button
          className="inline-flex items-center justify-center rounded p-2 text-maritime-navy md:hidden hover:bg-white/60 transition-colors"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <Cross1Icon className="h-5 w-5" /> : <HamburgerMenuIcon className="h-5 w-5" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-maritime-navy/10 bg-maritime-white/90 dark:border-white/10 dark:bg-white/5 animate-in fade-in slide-in-from-top-2 duration-150">
          <ul className="container py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-maritime-navy/10 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 uppercase font-bold tracking-wideish text-maritime-navy hover:text-maritime-ocean dark:text-maritime-mist dark:hover:text-maritime-teal"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center py-2">
              <ThemeToggle />
            </li>
            <li className="py-2 border-t border-maritime-navy/10 mt-1 pt-3 dark:border-white/10">
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setShowCallSheet(true)}
                  className="inline-flex items-center gap-2 text-maritime-navy hover:text-maritime-ocean dark:text-maritime-mist dark:hover:text-maritime-teal"
                >
                  <MobileIcon className="h-4 w-4" />
                  <span>Call</span>
                </button>
                <a href="mailto:info@omnivessel.com" className="inline-flex items-center gap-2 text-maritime-navy hover:text-maritime-ocean dark:text-maritime-mist dark:hover:text-maritime-teal">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
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
                <a href="tel:+995555333016" onClick={() => { setShowCallSheet(false); setOpen(false); }} className="inline-flex items-center justify-between rounded-md border border-maritime-navy/10 px-3 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                  <span className="inline-flex items-center gap-2"><MobileIcon className="h-4 w-4" />+995 555 333 016</span>
                </a>
                <a href="tel:+995555965050" onClick={() => { setShowCallSheet(false); setOpen(false); }} className="inline-flex items-center justify-between rounded-md border border-maritime-navy/10 px-3 py-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                  <span className="inline-flex items-center gap-2"><MobileIcon className="h-4 w-4" />+995 555 965 050</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
