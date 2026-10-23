import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Vickies Glam Makeup Studio" },
      {
        name: "description",
        content:
          "Bridal makeup and special event makeup packages by Vickies Glam Makeup Studio in Calgary. Pricing available on request.",
      },
      { property: "og:title", content: "Services | Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Bridal and special event makeup packages. Pricing available on request.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const packages = [
  {
    title: "Bridal Makeup",
    description:
      "A calm, luxurious experience for your wedding day — from soft and romantic to full classic glam. Includes a skin-prep ritual, lashes and a touch-up kit so your look stays flawless from first look to last dance.",
    detail: "Bridal party and trial appointments available on request.",
  },
  {
    title: "Special Event Makeup",
    description:
      "Polished, camera-ready glam for galas, birthdays, graduations, engagements and nights out. Every look is tailored to your outfit, the lighting and the occasion.",
    detail: "Group bookings welcome — perfect for proms and bridal parties.",
  },
];

function Services() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="gold-rule" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
          <h1 className="mt-3 text-4xl font-medium tracking-wide sm:text-5xl">Packages</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Pricing available on request. Every booking begins with a short conversation about
            your date, your look and your vision.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className="border border-border bg-card p-8 transition-colors hover:border-gold sm:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                <div className="min-w-0">
                  <h2 className="text-2xl font-medium tracking-wide sm:text-3xl">{pkg.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {pkg.description}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {pkg.detail}
                  </p>
                  <Link to="/rates" className="mt-4 inline-block text-sm italic text-crimson hover:underline">
                    Pricing available on request — view the full rate card.
                  </Link>
                </div>
                <Link to="/booking" className="btn-gold shrink-0 self-start md:self-center">
                  Book me now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
