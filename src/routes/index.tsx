import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-home.jpg.asset.json";
import aboutAsset from "@/assets/about-vickie-studio.png.asset.json";
import { homeGallery, portfolioDriveUrl } from "@/lib/gallery-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vickies Glam Makeup Studio | Bridal & Event Makeup Artist" },
      {
        name: "description",
        content:
          "Flawless makeup for every occasion. Bridal, events, photo shoots and everyday glam makeup by Vickie, a professional makeup artist in Calgary, Alberta.",
      },
      { property: "og:title", content: "Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Flawless makeup for every occasion — bridal, events, photo shoots and everyday glam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const testimonials = [
  {
    quote:
      "Was a wonderful experience. Makeup artist was clean, polite, friendly, she listened to my concerns and made the adjustments that was needed without complaints, made sure I loved and was satisfied with my look. 10/10 recommend",
    name: "Bonte Emma",
  },
  {
    quote:
      "10/10!!! My face was EATING 😍🔥 The blend? Smooth. The glow? INSANE. I felt like a whole queen! Thank you for bringing the vision to life 💕",
    name: "Agema Jennifer",
  },
  {
    quote:
      "Vickie is a fantastic makeup artist. She is so professional and literally the queen of soft glam. Knowing that I had oily skin, she prepped my skin adequately, and my makeup lasted throughout the period I needed it. I got so many compliments on my look, and when I cleaned out my makeup, my face had no reactions. She is too good.",
    name: "okolomike chiemelie",
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="gold-rule" />
      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium tracking-wide sm:text-4xl">{title}</h2>
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* Hero — photo fills the screen, landscape style */}
      <section className="relative flex min-h-[86vh] items-end overflow-hidden bg-ink md:items-center md:min-h-[calc(100vh-5rem)]">
        <img
          src={heroAsset.url}
          alt="Vickie resting her hands beneath her chin, wearing a mesh marble-pattern top"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 20%" }}
          width={1320}
          height={1630}
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10"
        />
        <div aria-hidden className="absolute inset-0 bg-ink/50 md:hidden" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink/95 via-ink/55 to-transparent md:h-40 md:from-ink/75 md:via-ink/35"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 md:py-20">
          <div className="max-w-xl text-center md:text-left">
            <span className="gold-rule mx-auto md:mx-0" />
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gold">
              Vickies Glam Makeup Studio
            </p>
            <h1 className="mt-6 text-4xl font-medium leading-tight tracking-wide text-cream sm:text-5xl md:text-6xl">
              Flawless makeup for every occasion.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base font-light tracking-wide text-cream/85 sm:text-lg md:mx-0">
              Bridal. Events. Photo shoots and everyday glam.
            </p>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 sm:px-6">
          <div>
            <span className="gold-rule" />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">About the artist</p>
            <h2 className="mt-3 text-3xl font-medium tracking-wide sm:text-4xl">Meet Vickie</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Hi, I'm Vickie, a professional makeup artist based in Calgary, Canada. With 8 years
              of experience, I've had the pleasure of glamming over 2,000 beautiful women and
              helping them feel confident and beautiful in their own skin.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              I specialize in soft glam, bridal makeup with flawless, skin-like finishes that
              enhance your natural beauty without feeling heavy. Whether you're getting ready for
              your wedding day, a special event, or simply want to feel extra beautiful, I'm here
              to create a look that feels uniquely you.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              My goal is to make you feel confident, radiant, and like the best version of
              yourself every time you sit in my chair.
            </p>
          </div>
          <img
            src={aboutAsset.url}
            alt="Vickie in her makeup studio, wearing a Makeup Artist shirt"
            className="mx-auto h-auto w-full max-w-xl shadow-lg"
            width={768}
            height={922}
            loading="lazy"
          />
        </div>
      </section>

      {/* Packages preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Packages" title="How I can glam you" />
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="group border border-border bg-card p-10 text-center transition-colors hover:border-gold">
              <h3 className="text-2xl font-medium tracking-wide">Our Packages</h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                From timeless bridal glam to polished looks for date nights, photo shoots and
                events — plus one-on-one trainings that teach you the craft yourself. Every
                package is tailored to your date, your style and your vision.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/70">
                <span className="border border-gold/60 px-3 py-1.5">Bridal Makeup</span>
                <span className="border border-gold/60 px-3 py-1.5">Regular Makeup</span>
                <span className="border border-gold/60 px-3 py-1.5">Trainings</span>
              </div>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-crimson"
              >
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected portfolio */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Portfolio" title="Selected work" />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {homeGallery.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                width={912}
                height={1200}
                loading="lazy"
              />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/portfolio" className="btn-outline">
              View full portfolio
            </Link>
            <a
              href={portfolioDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              View more
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Reviews" title="What clients say" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-t border-gold/60 pt-6">
                <blockquote className="text-sm italic leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-crimson py-20 text-center text-crimson-foreground sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Limited dates each month</p>
          <h2 className="mt-4 text-3xl font-medium tracking-wide sm:text-4xl">
            Ready for your glam?
          </h2>
          <p className="mt-4 text-sm text-cream/80">
            Request your date and I'll confirm availability within 24 hours.
          </p>
          <Link
            to="/booking"
            className="btn-gold mt-8 hover:bg-cream hover:text-ink"
          >
            Book me now
          </Link>
        </div>
      </section>
    </div>
  );
}
