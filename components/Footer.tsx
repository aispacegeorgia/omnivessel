export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-maritime-navy/10 bg-maritime-mist">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-maritime-navy/70">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <span className="uppercase font-bold tracking-wideish text-maritime-navy">OmniVessel</span>
          <span>© {year} OmniVessel. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

