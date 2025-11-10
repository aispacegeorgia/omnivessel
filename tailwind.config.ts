import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        maritime: {
          navy: '#0a2240',      // deep navy (trust, stability)
          ocean: '#0e6ba8',     // ocean blue
          teal: '#118a93',      // maritime teal
          mist: '#f2f6fa',      // muted light background
          white: '#ffffff',
          safety: '#ff6f3c'     // safety orange accent (sparingly)
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        wideish: '0.08em'
      }
    }
  },
  plugins: [forms, typography, aspectRatio, containerQueries, animate]
}

export default config
