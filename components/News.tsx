import Reveal from '@/components/Reveal'

export default function News() {
  const posts = [
    {
      title: 'Launching Our Next-Gen Platform',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2025-01-10'
    },
    {
      title: 'Scaling to New Horizons',
      excerpt:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2024-10-03'
    },
    {
      title: 'Design Language Refresh',
      excerpt:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: '2024-06-21'
    }
  ]

  return (
    <section id="news" aria-label="News" className="bg-maritime-mist dark:bg-maritime-navy">
      <div className="container py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl">News</h2>
            <p className="mt-3 text-maritime-navy/80 dark:text-maritime-mist/80">Latest updates and stories.</p>
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
                  <a href="#" className="mt-3 inline-block text-sm text-maritime-ocean hover:underline">Read more</a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
