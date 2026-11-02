import { createFileRoute, Link } from "@tanstack/react-router";
import { ServiceCategories } from "@/components/service-categories";
import { bridalRates, eventRates, trainingRates, parseCategory, type ServiceRate } from "@/lib/service-rates";

export const Route = createFileRoute("/services")({
  validateSearch: (search: Record<string, unknown>) => ({ category: parseCategory(search.category) }),
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

function ServiceGroup({ title, rows, detail }: { title: string; rows: ServiceRate[]; detail?: string }) {
  return (
    <section className="border-t border-gold py-6">
      <h2 className="text-3xl font-medium">{title}</h2>
      <div className="mt-6 divide-y divide-border">
        {rows.map((rate) => (
          <article key={rate.title} className="grid gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <h3 className="text-2xl font-medium">{rate.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/80">{rate.description}</p>
              {rate.note && <p className="mt-2 text-sm text-muted-foreground">{rate.note}</p>}
            </div>
            <div className="sm:text-right">
              <p className="text-3xl font-medium text-crimson">{rate.price}</p>
              {rate.per && <p className="mt-2 text-sm text-muted-foreground">{rate.per}</p>}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        {detail && <p className="max-w-lg text-sm text-muted-foreground">{detail}</p>}
        <Link to="/booking" className="btn-gold">Book me now</Link>
      </div>
    </section>
  );
}

function Services() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="gold-rule" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
          <h1 className="mt-3 text-4xl font-medium tracking-wide sm:text-5xl">Packages</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">Clear, upfront rates — every look is built around your date, your style and your vision.</p>
        </div>
        <ServiceCategories
          category={category}
          onChange={(next) => void navigate({ search: { category: next }, replace: true, resetScroll: false })}
          bridal={<ServiceGroup title="Bridal Makeup" rows={bridalRates} detail="A 50% deposit secures your wedding date and is applied toward your total balance." />}
          events={<>
            <ServiceGroup title="Special Event Makeup" rows={eventRates} detail="A $30 booking fee per person confirms your appointment." />
            <ServiceGroup title="Trainings" rows={trainingRates} />
          </>}
        />
      </div>
    </div>
  );
}
