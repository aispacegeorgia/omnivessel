import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section id="about" aria-label="About" className="bg-maritime-mist dark:bg-maritime-navy">
      <div className="container py-16 sm:py-20">
        <Reveal>
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 @container">
          <div>
            <h2 className="text-2xl sm:text-3xl">About OmniVessel Compliance.</h2>
            <h3 className="mt-5 text-sm">Who We Are</h3>
            <p className="mt-2 text-maritime-navy/80 dark:text-maritime-mist/80">
              OmniVessel is a specialized maritime compliance and inspection support provider dedicated to helping shipowners and shipmanagers achieve full operational readiness. Our team combines decades of seagoing and technical management experience to ensure every vessel meets the highest standards of international regulations and industry expectations.
            </p>
            <h3 className="mt-6 text-sm">What Sets Us Apart</h3>
            <p className="mt-2 text-maritime-navy/80 dark:text-maritime-mist/80">
              We go beyond basic audits by offering a proactive, data-driven compliance system that integrates pre-inspection, SMS development, deficiency management, and crisis support under one platform. OmniVessel’s experts replicate real inspection conditions, deliver actionable solutions, and use digital tools for remote verification, ensuring consistent quality, transparency, and measurable improvement across your fleet.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-maritime-navy/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <div
                role="img"
                aria-label="Planned visual: bridge inspection scene or superintendent with tablet reviewing checklist (omnivessel-bridge-audit.jpg)"
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-maritime-ocean/10 to-maritime-teal/10 dark:from-maritime-ocean/20 dark:to-maritime-teal/20"
              >
                <span className="text-maritime-navy/50 dark:text-maritime-mist/60">Image placeholder</span>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
