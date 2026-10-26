import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Vickies Glam Makeup Studio" },
      {
        name: "description",
        content:
          "Get in touch with Vickies Glam Makeup Studio — email, Instagram, service area and business hours, or send a message directly.",
      },
      { property: "og:title", content: "Contact | Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Get in touch with Vickies Glam Makeup Studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  { label: "Email", value: "hello@vickiesglam.ca", href: "mailto:hello@vickiesglam.ca" },
  { label: "Phone", value: "+1 (587) 837-2558 — call or text", href: "tel:+15878372558" },
  { label: "Instagram", value: "@vickiesglam", href: "https://instagram.com/vickiesglam" },
  { label: "Service area", value: "Based in Calgary, Canada — on-location across the city & surrounding areas" },
  { label: "Payment", value: "E-transfer preferred" },
  {
    label: "Business hours",
    value: "Mon–Fri 9am–7pm · Sat 10am–5pm · Sun closed",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Message is displayed locally for now — no backend connected yet.
    setSent(true);
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="gold-rule" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-4xl font-medium tracking-wide sm:text-5xl">Say hello</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Questions about a look, a date or a collaboration? Send a message or reach out
            directly — I'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* Details */}
          <div className="space-y-8">
            {details.map((d) => (
              <div key={d.label} className="border-t border-gold/60 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.label}</p>
                {d.href ? (
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-2 block text-base text-foreground transition-colors hover:text-crimson"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-2 text-base text-foreground">{d.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex h-full items-center justify-center border border-gold bg-card p-10 text-center">
              <div>
                <h2 className="text-2xl font-medium tracking-wide">Message sent</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  Thank you for reaching out — I'll get back to you within 24 hours.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-outline mt-8">
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-border bg-card p-8">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className="field-label">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="field-input" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@email.com" className="field-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(000) 000-0000" className="field-input" />
                </div>
                <div>
                  <label htmlFor="message" className="field-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can I help?"
                    className="field-input resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold mt-2">
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
