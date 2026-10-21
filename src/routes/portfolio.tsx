import { createFileRoute, Link } from "@tanstack/react-router";
import { galleryItems, categories, type GalleryCategory } from "@/lib/gallery-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Vickies Glam Makeup Studio" },
      {
        name: "description",
        content:
          "A curated gallery of bridal, special event and editorial makeup looks by Vickies Glam Makeup Studio.",
      },
      { property: "og:title", content: "Portfolio | Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Bridal, special event and editorial makeup looks by Vickies Glam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="gold-rule" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
          <h1 className="mt-3 text-4xl font-medium tracking-wide sm:text-5xl">The work</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A selection of recent bridal, special event and editorial looks. Every face is
            different — every look is built for you.
          </p>
        </div>

        {categories.map((category: GalleryCategory) => (
          <section key={category} className="mt-16 first-of-type:mt-14">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium tracking-wide sm:text-3xl">{category}</h2>
              <span className="gold-rule flex-1" />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems
                .filter((item) => item.category === category)
                .map((item) => (
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
          </section>
        ))}

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Love what you see?</p>
          <Link to="/booking" className="btn-gold mt-4">
            Book me now
          </Link>
        </div>
      </div>
    </div>
  );
}
