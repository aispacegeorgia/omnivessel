import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Services />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
