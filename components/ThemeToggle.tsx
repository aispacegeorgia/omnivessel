"use client";

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-black/5 dark:hover:bg-white/10"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="sr-only">Toggle theme</span>
      {mounted && (
        isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />
      )}
    </button>
  )}

