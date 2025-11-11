import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section id="about" aria-label="About" className="bg-maritime-mist dark:bg-maritime-navy">
      <div className="container py-16 sm:py-20">
        <Reveal>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 @container">
          <div>
            <h2 className="text-2xl sm:text-3xl">About OmniVessel Compliance</h2>
            <h3 className="mt-5 text-sm">Who we are</h3>
            <p className="mt-2 text-maritime-navy/80 dark:text-maritime-mist/80">
              OmniVessel is a specialist partner helping shipowners and shipmanagers achieve inspection‑ready operations. Our team of former superintendents, masters, and technical managers pairs onboard experience with practical, auditable processes that stand up to PSC, Flag, SIRE 2.0, CDI, and RightShip scrutiny.
            </p>
            <h3 className="mt-6 text-sm">What sets us apart</h3>
            <p className="mt-2 text-maritime-navy/80 dark:text-maritime-mist/80">
              We don’t just find gaps—we close them. From pre‑inspection drills to SMS authoring, deficiency management, and crisis support, our approach is proactive, measurable, and designed to keep vessels trading with zero surprises.
            </p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-5 text-maritime-navy/80 dark:text-maritime-mist/80">
              <li>Real inspection simulations mapped to SIRE 2.0/PSC/Flag criteria</li>
              <li>Remote verification protocol (structured photo/video) for rapid checks</li>
              <li>ISM/SMS documentation development and practical onboard checklists</li>
              <li>Deficiency closure with drafted responses to authorities and vetting</li>
              <li>Crisis advisory for detentions, incidents, and post‑event training</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-maritime-navy/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <div
                role="img"
                aria-label="Bridge audit review — superintendent verifying checklist on ECDIS console"
                className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-maritime-ocean/10 to-maritime-teal/10 dark:from-maritime-ocean/20 dark:to-maritime-teal/20"
              >
                <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
                <span className="relative text-maritime-navy/60 dark:text-maritime-mist/70">Operational visual placeholder</span>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
