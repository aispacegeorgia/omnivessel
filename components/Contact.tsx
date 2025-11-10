import Reveal from '@/components/Reveal'
import { MobileIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="bg-maritime-mist dark:bg-maritime-navy">
      <div className="container py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl">Contact</h2>
            <p className="mt-3 text-maritime-navy/80 dark:text-maritime-mist/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get in touch below.
            </p>
          </div>
        </Reveal>
        <Reveal delayClass="delay-100">
          <div className="mx-auto mt-6 max-w-xl text-center">
            <ul className="flex flex-col items-center gap-2 text-maritime-navy dark:text-maritime-mist">
              <li>
                <a href="tel:+995555333016" className="inline-flex items-center gap-2 hover:text-maritime-ocean dark:hover:text-maritime-teal">
                  <MobileIcon className="h-4 w-4" />
                  <span>+995 555 333 016</span>
                </a>
              </li>
              <li>
                <a href="tel:+995555965050" className="inline-flex items-center gap-2 hover:text-maritime-ocean dark:hover:text-maritime-teal">
                  <MobileIcon className="h-4 w-4" />
                  <span>+995 555 965 050</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@omnivessel.com" className="inline-flex items-center gap-2 hover:text-maritime-ocean dark:hover:text-maritime-teal">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                  <span>info@omnivessel.com</span>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delayClass="delay-200">
          <form className="mx-auto mt-8 max-w-2xl rounded-xl border border-maritime-navy/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-maritime-navy">Name</label>
                <input id="name" name="name" type="text" className="mt-1 block w-full rounded-md border-maritime-navy/20 focus:border-maritime-ocean focus:ring-maritime-ocean dark:border-white/10 dark:bg-transparent dark:text-white" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-maritime-navy">Email</label>
                <input id="email" name="email" type="email" className="mt-1 block w-full rounded-md border-maritime-navy/20 focus:border-maritime-ocean focus:ring-maritime-ocean dark:border-white/10 dark:bg-transparent dark:text-white" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-sm font-medium text-maritime-navy">Message</label>
              <textarea id="message" name="message" rows={5} className="mt-1 block w-full rounded-md border-maritime-navy/20 focus:border-maritime-ocean focus:ring-maritime-ocean dark:border-white/10 dark:bg-transparent dark:text-white" placeholder="Lorem ipsum dolor sit amet..."></textarea>
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center rounded-md bg-maritime-ocean px-4 py-2 text-white shadow-sm transition hover:bg-maritime-teal">
                Send Message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
