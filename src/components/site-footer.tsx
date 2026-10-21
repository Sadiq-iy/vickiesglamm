import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl tracking-wide">Vickies Glam</h2>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-blush">Makeup Studio</p>
          </div>
          <div className="text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Get in touch</p>
            <a href="mailto:hello@vickiesglam.ca" className="mt-3 block text-cream/80 hover:text-gold">
              hello@vickiesglam.ca
            </a>
            <a
              href="https://instagram.com/vickiesglam"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-cream/80 hover:text-gold"
            >
              @vickiesglam
            </a>
          </div>
          <div className="text-sm md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Explore</p>
            <div className="mt-3 flex flex-col gap-2 md:items-end">
              <Link to="/portfolio" className="text-cream/80 hover:text-gold">Portfolio</Link>
              <Link to="/services" className="text-cream/80 hover:text-gold">Services</Link>
              <Link to="/booking" className="text-cream/80 hover:text-gold">Book me now</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/50">
          &copy; {year} Vickies Glam Makeup Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
