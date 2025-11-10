import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, MobileIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-maritime-navy/10 bg-maritime-mist dark:border-white/10 dark:bg-maritime-navy">
      <div className="container py-8 text-sm text-maritime-navy/70 dark:text-maritime-mist/70">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="uppercase font-bold tracking-wideish text-maritime-navy dark:text-maritime-mist">OmniVessel</span>
              <span className="text-maritime-navy/50 dark:text-maritime-mist/50">© {year}</span>
            </div>
            <div className="flex items-center gap-3">
              <a aria-label="Twitter" href="#" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-white/70 dark:hover:bg-white/10">
                <TwitterLogoIcon className="h-4 w-4" />
              </a>
              <a aria-label="GitHub" href="#" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-white/70 dark:hover:bg-white/10">
                <GitHubLogoIcon className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-white/70 dark:hover:bg-white/10">
                <LinkedInLogoIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a href="tel:+995555333016" className="inline-flex items-center gap-2 hover:text-maritime-ocean dark:hover:text-maritime-teal">
              <MobileIcon className="h-4 w-4" />
              <span>+995 555 333 016</span>
            </a>
            <a href="tel:+995555965050" className="inline-flex items-center gap-2 hover:text-maritime-ocean dark:hover:text-maritime-teal">
              <MobileIcon className="h-4 w-4" />
              <span>+995 555 965 050</span>
            </a>
            <a href="mailto:info@omnivessel.com" className="inline-flex items-center gap-2 hover:text-maritime-ocean dark:hover:text-maritime-teal">
              <EnvelopeClosedIcon className="h-4 w-4" />
              <span>info@omnivessel.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

