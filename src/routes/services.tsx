import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Vickies Glam Makeup Studio" },
      {
        name: "description",
        content:
          "Bridal makeup $450, bridal party $150 per person, bridal trial $100, studio appointments $100 and on-location $150 — Vickies Glam Makeup Studio, Calgary.",
      },
      { property: "og:title", content: "Services | Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Bridal and special event makeup packages with clear, upfront rates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

interface PriceLine {
  label: string;
  price: string;
  per?: string;
  note?: string;
}

const packages: { title: string; description: string; prices: PriceLine[]; detail: string }[] = [
  {
    title: "Bridal Makeup",
    description:
      "A complete, luxury makeup service designed to make you look and feel absolutely radiant on your big day.",
    prices: [
      { label: "Bridal Makeup", price: "$450" },
      { label: "Bridesmaids / Bridal Party", price: "$150", per: "per person" },
      { label: "Bridal Makeup Trial", price: "$100" },
    ],
    detail: "A 50% deposit secures your wedding date and is applied toward your total balance.",
  },
  {
    title: "Special Event Makeup",
    description:
      "Polished, camera-ready glam for galas, birthdays, graduations, engagements and nights out. Every look is tailored to your outfit, the lighting and the occasion.",
    prices: [
      { label: "Studio Appointment", price: "$100" },
      { label: "On-Location Appointment", price: "$150", note: "Additional charges depend on location" },
    ],
    detail: "A $30 booking fee per person confirms your appointment.",
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
            Clear, upfront rates — every look is built around your date, your style and your vision.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {packages.map((pkg) => (
            <article
              key={pkg.title}
              className="border border-border bg-card p-8 transition-colors hover:border-gold sm:p-10"
            >
              <h2 className="text-2xl font-medium tracking-wide sm:text-3xl">{pkg.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">{pkg.description}</p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {pkg.prices.map((p) => (
                  <li key={p.label} className="flex items-baseline justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <p className="font-medium tracking-wide">{p.label}</p>
                      {p.note && (
                        <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">{p.note}</p>
                      )}
                    </div>
                    <p className="shrink-0 text-right">
                      <span className="text-2xl font-medium text-crimson">{p.price}</span>
                      {p.per && (
                        <span className="ml-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">{p.per}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{pkg.detail}</p>
                <Link to="/booking" className="btn-gold shrink-0 self-start sm:self-center">
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
