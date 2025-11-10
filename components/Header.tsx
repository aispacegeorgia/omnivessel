"use client";

import { useState } from 'react';
// Hash navigation uses standard anchors; Next Link not needed
import { NAV_ITEMS } from '@/lib/nav';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-maritime-navy/20 bg-maritime-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-lg font-bold uppercase tracking-wideish text-maritime-navy">OmniVessel</a>
        <button
          className="inline-flex items-center gap-2 rounded px-2 py-1 text-maritime-navy md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="block h-0.5 w-5 bg-maritime-navy"></span>
          <span className="block h-0.5 w-5 bg-maritime-navy"></span>
          <span className="block h-0.5 w-5 bg-maritime-navy"></span>
        </button>
        <nav id="site-nav" aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="uppercase font-bold tracking-wideish text-maritime-navy hover:text-maritime-ocean"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-maritime-navy/10 bg-maritime-white/90">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="border-b border-maritime-navy/10 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 uppercase font-bold tracking-wideish text-maritime-navy hover:text-maritime-ocean"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
