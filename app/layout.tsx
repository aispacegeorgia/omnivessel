import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
import { siteUrl } from '@/lib/site'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: {
    default: 'OmniVessel - Portfolio',
    template: '%s | OmniVessel'
  },
  description: 'OmniVessel business portfolio website',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'OmniVessel - Portfolio',
    description: 'OmniVessel business portfolio website',
    url: siteUrl,
    siteName: 'OmniVessel',
    images: ['/og.png'],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmniVessel - Portfolio',
    description: 'OmniVessel business portfolio website',
    images: ['/og.png']
  },
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans bg-maritime-mist text-maritime-navy`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white/90 focus:px-3 focus:py-2 focus:text-maritime-navy">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
