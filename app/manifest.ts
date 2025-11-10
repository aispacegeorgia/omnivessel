import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OmniVessel',
    short_name: 'OmniVessel',
    description: 'OmniVessel business portfolio website',
    start_url: '/',
    display: 'standalone',
    background_color: '#f2f6fa',
    theme_color: '#0a2240',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }
    ]
  }
}

