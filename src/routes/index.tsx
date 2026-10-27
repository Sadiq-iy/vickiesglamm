import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-full.jpg.asset.json";
import aboutAsset from "@/assets/about-vickie.jpg.asset.json";
import { homeGallery } from "@/lib/gallery-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vickies Glam Makeup Studio | Bridal & Event Makeup Artist" },
      {
        name: "description",
        content:
          "Effortless beauty for every occasion. Bridal, special event and everyday glam makeup by Vickie, a professional freelance makeup artist in Calgary, Alberta.",
      },
      { property: "og:title", content: "Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Effortless beauty for every occasion — bridal, special event and everyday glam makeup.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Bridal Makeup",
    blurb: "Timeless, camera-ready glam for your wedding day — soft, romantic, or full classic bridal.",
  },
  {
    title: "Special Event Makeup",
    blurb: "Polished looks for galas, parties and nights out, tailored to your outfit and the occasion.",
  },
];

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
      {/* Hero — full portrait shown, nothing cropped */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-blush/35 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:min-h-[calc(100vh-5rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:items-stretch md:gap-16 md:py-12">
          {/* Portrait */}
          <div className="order-1 md:order-2 md:self-stretch">
            <img
              src={heroAsset.url}
              alt="Vickie in soft glam makeup with a high ponytail, gold pendant necklace and black jacket"
              className="mx-auto w-full max-w-xs object-contain sm:max-w-sm md:h-full md:w-full md:max-w-none"
              width={720}
              height={1280}
              fetchPriority="high"
            />
          </div>

          {/* Words */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="gold-rule" />
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-crimson">
              Vickies Glam Makeup Studio
            </p>
            <h1 className="mt-6 text-4xl font-medium leading-tight tracking-wide text-ink sm:text-5xl md:text-6xl">
              Effortless Beauty for Every Occasion
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base font-light tracking-wide text-foreground/75 sm:text-lg md:mx-0">
              Bridal, special event, and everyday glam makeup.
            </p>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <img
            src={aboutAsset.url}
            alt="Vickie wearing a warm-toned glam makeup look"
            className="mx-auto w-full max-w-sm object-cover shadow-lg md:max-w-none"
            width={780}
            height={970}
            loading="lazy"
          />
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
              I specialize in soft glam, bridal makeup, and flawless, skin-like finishes that
              enhance your natural beauty without feeling heavy. Whether you're getting ready for
              your wedding day, a special event, or simply want to feel extra beautiful, I'm here
              to create a look that feels uniquely you.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              My goal is to make you feel confident, radiant, and like the best version of
              yourself every time you sit in my chair.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Services" title="How I can glam you" />
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="group border border-border bg-card p-8 text-center transition-colors hover:border-gold"
              >
                <h3 className="text-2xl font-medium tracking-wide">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-crimson">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected portfolio */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Portfolio" title="Selected work" />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
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
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-outline">
              View full portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading eyebrow="Kind words" title="What clients say" />
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
