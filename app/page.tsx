import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Section id="about" title="About" />
        <Section id="services" title="Services" />
        <Section id="news" title="News" />
        <Section id="contact" title="Contact" />
      </main>
      <Footer />
    </>
  )
}
