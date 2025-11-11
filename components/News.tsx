import Reveal from '@/components/Reveal'

export default function News() {
  const posts = [
    {
      title: 'Remote Verification Protocol Cuts Turnaround by 48%',
      excerpt:
        'Our structured photo/video protocol enables same‑day compliance checks without port delays, improving readiness while reducing superintendent travel.',
      date: '2025-07-15'
    },
    {
      title: 'SIRE 2.0 Readiness Pack Now Available',
      excerpt:
        'Targeted checklists, a common‑finding library, and corrective action templates to accelerate close‑outs and reduce repeat observations.',
      date: '2025-05-26'
    },
    {
      title: 'Fleet Compliance Dashboard Pilot',
      excerpt:
        'Quarterly KPIs and trend analysis across detentions, NCs, and root causes to sustain inspection‑ready condition fleet‑wide.',
      date: '2025-03-08'
    }
  ]

  return (
    <section id="news" aria-label="News" className="bg-maritime-mist dark:bg-maritime-navy">
      <div className="container py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl">News</h2>
            <p className="mt-3 text-maritime-navy/80 dark:text-maritime-mist/80">Updates from our compliance and inspection practice.</p>
          </div>
        </Reveal>
        <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p, idx) => (
              <Reveal key={p.title} delayClass={["delay-100","delay-200","delay-300"][idx % 3]}>
                <article className="rounded-xl border border-maritime-navy/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <header>
                    <h3 className="m-0 text-base uppercase tracking-wideish">{p.title}</h3>
                    <p className="m-0 mt-1 text-xs text-maritime-navy/60 dark:text-maritime-mist/60">{new Date(p.date).toLocaleDateString()}</p>
                  </header>
                  <p className="mt-3 text-sm text-maritime-navy/80 dark:text-maritime-mist/80">{p.excerpt}</p>
                  <a href="#contact" className="mt-3 inline-block text-sm text-maritime-ocean hover:underline">Contact us for details</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
