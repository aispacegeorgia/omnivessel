import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        wideish: '0.08em'
      }
    }
  },
  plugins: []
}

export default config

