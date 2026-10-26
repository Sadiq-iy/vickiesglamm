import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title: "Rates | Vickies Glam Makeup Studio" },
      {
        name: "description",
        content:
          "The official Vickies Glam rate card — studio appointments $100, on-location $150, bridal makeup $500, wedding party $150, and makeup classes from $750.",
      },
      { property: "og:title", content: "Rates | Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Bridal, event and makeup class rates and booking policies by Vickies Glam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Rates,
});

interface SubRate {
  label: string;
  description?: string;
  price: string;
  per?: string;
}

interface RateRow {
  title: string;
  description: string;
  price?: string;
  per?: string;
  note?: string;
  subRows?: SubRate[];
}

const serviceRates: RateRow[] = [
  {
    title: "Studio Appointment",
    description:
      "A relaxed glam session in the comfort of the Calgary studio — perfect for portraits, date nights and content days.",
    price: "$100",
  },
  {
    title: "On-Location Appointment",
    description: "Full glam brought to you, wherever the occasion takes place.",
    price: "$150",
    note: "Additional charges depend on location",
  },
  {
    title: "Bridal Makeup",
    description:
      "A personalized bridal makeup application designed around your preferred look, wedding style and photography needs. Includes lashes and a long-lasting, flawless finish.",
    price: "$500",
  },
  {
    title: "Wedding Party",
    description:
      "Soft, flawless and long-lasting makeup designed to complement the bride and photograph beautifully.",
    price: "$150",
    per: "per person",
  },
  {
    title: "Makeup Classes",
    description: "Hands-on training designed around your goals.",
    subRows: [
      {
        label: "Professional Training",
        description: "Intensive, hands-on training for aspiring makeup artists.",
        price: "$2,000",
        per: "3 weeks",
      },
      {
        label: "Personal Training",
        description: "Learn to do your makeup yourself.",
        price: "$750",
      },
    ],
  },
];

const bridalPolicy = [
  "A 50% non-refundable deposit secures your wedding date and is applied toward your total balance.",
  "The final balance is due 7 days before the wedding date.",
  "Cancellations 30+ days before the wedding date forfeit the deposit; cancellations within 30 days are not refundable.",
  "Rescheduling requires at least 30 days' notice and is subject to availability — the deposit transfers to the new date.",
  "Payment by e-transfer only.",
  "Bridal parties: minimum 5, maximum 10 guests including the bride; larger parties are quoted with additional time.",
];

const eventPolicy = [
  "A $30 booking fee per person confirms your appointment; the remaining balance is due on the day.",
  "Please provide at least 48 hours' notice for cancellations or rescheduling.",
  "With sufficient notice, the booking fee may transfer to a new appointment, subject to availability.",
  "Cancellations with less than 48 hours' notice forfeit the booking fee.",
  "Running late may shorten your appointment — the full fee still applies.",
  "If Vickiesglam cancels, your booking fee is refunded or transferred.",
];

function RateCard({ title, eyebrow, rows, band }: { title: string; eyebrow: string; rows: RateRow[]; band?: string }) {
  return (
    <section className="border border-border bg-card">
      <div className="border-b border-border bg-secondary/40 px-6 py-8 text-center sm:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-medium tracking-wide sm:text-4xl">{title}</h2>
      </div>
      <div className="divide-y divide-border px-6 sm:px-10">
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid gap-4 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10"
          >
            <div className="min-w-0">
              <h3 className="text-xl font-medium tracking-wide sm:text-2xl">{row.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/80">
                {row.description}
              </p>
              {row.note && (
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {row.note}
                </p>
              )}
              {row.subRows && (
                <div className="mt-4 space-y-4 border-l border-gold/60 pl-4">
                  {row.subRows.map((sub) => (
                    <div key={sub.label} className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6">
                      <div>
                        <p className="font-medium tracking-wide">{sub.label}</p>
                        {sub.description && (
                          <p className="mt-1 text-sm leading-relaxed text-foreground/80">{sub.description}</p>
                        )}
                      </div>
                      <div className="sm:text-right">
                        <p className="text-2xl font-medium tracking-wide text-crimson">{sub.price}</p>
                        {sub.per && (
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{sub.per}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {row.price && (
              <div className="text-left md:text-right">
                <p className="text-4xl font-medium tracking-wide text-crimson">{row.price}</p>
                {row.per && (
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{row.per}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {band && (
        <div className="border-t border-gold/50 bg-secondary/30 px-6 py-4 text-center text-sm text-foreground/80 sm:px-10">
          {band}
        </div>
      )}
    </section>
  );
}

function PolicyColumn({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-2xl font-medium tracking-wide">{heading}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Rates() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="gold-rule" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Rate card</p>
          <h1 className="mt-3 text-4xl font-medium tracking-wide sm:text-5xl">The investment</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Soft glam. Flawless finish. Every service below is built around you — with clear,
            honest rates and no surprises.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          <RateCard
            eyebrow="Services"
            title="My Services"
            rows={serviceRates}
            band="A 50% deposit secures wedding dates · payment by e-transfer · payment details are provided once your appointment is confirmed."
          />

          {/* PDF download */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Prefer a copy to keep or share?</p>
            <a
              href="/downloads/Vickie-Makeup-Rate-Card.pdf"
              download="Vickie-Makeup-Rate-Card.pdf"
              className="btn-gold mt-4"
            >
              <Download className="mr-2 h-4 w-4" aria-hidden />
              Download Rate Card (PDF)
            </a>
          </div>

          {/* Policies */}
          <section className="border border-border bg-secondary/30 p-8 sm:p-10">
            <div className="text-center">
              <span className="gold-rule" />
              <h2 className="mt-4 text-3xl font-medium tracking-wide">Booking policies</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Important details for a smooth, stress-free experience.
              </p>
            </div>
            <div className="mt-10 grid gap-12 md:grid-cols-2">
              <PolicyColumn heading="Bridal bookings" items={bridalPolicy} />
              <PolicyColumn heading="Studio & event bookings" items={eventPolicy} />
            </div>
            <p className="mt-10 border-t border-gold/40 pt-6 text-center text-xs leading-relaxed text-muted-foreground">
              Travel, parking, early-morning appointments and additional artists are quoted and
              communicated before booking. Located in Calgary, Canada — on-location across the
              city and surrounding areas. Questions? Call or text{" "}
              <a href="tel:+15878372558" className="text-crimson hover:underline">
                +1 (587) 837-2558
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Found your date?</p>
          <Link to="/booking" className="btn-gold mt-4">
            Book me now
          </Link>
        </div>
      </div>
    </div>
  );
}
