import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking | Vickies Glam Makeup Studio" },
      {
        name: "description",
        content:
          "Check availability and request your appointment with Vickies Glam Makeup Studio — bridal and special event makeup in Calgary.",
      },
      { property: "og:title", content: "Booking | Vickies Glam Makeup Studio" },
      {
        property: "og:description",
        content: "Check availability and request your glam appointment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Booking,
});

/* ------------------------------------------------------------------ */
/* Availability — edit these two things to manage the calendar:        */
/*   1. Weekly rule below (currently: Sundays are closed)              */
/*   2. BOOKED_DATES: add "YYYY-M-D" strings for days already taken    */
/* ------------------------------------------------------------------ */
const BOOKED_DATES = new Set<string>([
  // e.g. "2026-11-14",
]);

const today = new Date();
today.setHours(0, 0, 0, 0);

const keyOf = (y: number, m: number, d: number) => `${y}-${m + 1}-${d}`;

function isAvailable(y: number, m: number, d: number) {
  const date = new Date(y, m, d);
  if (date < today) return false;
  if (date.getDay() === 0) return false; // Sundays closed
  if (BOOKED_DATES.has(keyOf(y, m, d))) return false;
  return true;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const SERVICE_TYPES = ["Bridal Makeup", "Special Event Makeup"];
const TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

interface BookingRequest {
  date: string;
  fullName: string;
  email: string;
  phone: string;
  service: string;
  time: string;
  notes: string;
}

function Booking() {
  const now = new Date();
  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<BookingRequest | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Bridal Makeup",
    time: "9:00 AM",
    notes: "",
  });

  const { y, m } = view;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const firstWeekday = new Date(y, m, 1).getDay();
  const atCurrentMonth = y === today.getFullYear() && m === today.getMonth();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const prettyDate = selected
    ? new Date(
        Number(selected.split("-")[0]),
        Number(selected.split("-")[1]) - 1,
        Number(selected.split("-")[2]),
      ).toLocaleDateString("en-CA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected) return;
    const request: BookingRequest = { date: selected, ...form };
    try {
      const existing = JSON.parse(localStorage.getItem("vg-booking-requests") ?? "[]");
      existing.push(request);
      localStorage.setItem("vg-booking-requests", JSON.stringify(existing));
    } catch {
      // Local storage unavailable — the confirmation still shows below.
    }
    setSubmitted(request);
  }

  function reset() {
    setSubmitted(null);
    setSelected(null);
    setForm({
      fullName: "",
      email: "",
      phone: "",
      service: "Bridal Makeup",
      time: "9:00 AM",
      notes: "",
    });
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="gold-rule" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Booking</p>
          <h1 className="mt-3 text-4xl font-medium tracking-wide sm:text-5xl">Request your date</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Pick an available date below, then tell me a little about your occasion. I'll confirm
            your appointment within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="mx-auto mt-14 max-w-xl border border-gold bg-card p-10 text-center">
            <h2 className="text-3xl font-medium tracking-wide">Request received</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Thank you, {submitted.fullName}. Your <strong>{submitted.service}</strong> request for{" "}
              <strong>{submitted.date}</strong> at <strong>{submitted.time}</strong> has been saved.
              A confirmation will arrive at {submitted.email} within 24 hours.
            </p>
            <button type="button" onClick={reset} className="btn-outline mt-8">
              Make another request
            </button>
          </div>
        ) : (
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {/* Calendar */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium tracking-wide">
                  {MONTHS[m]} {y}
                </h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous month"
                    disabled={atCurrentMonth}
                    onClick={() => setView(({ y, m }) => (m === 0 ? { y: y - 1, m: 11 } : { y, m: m - 1 }))}
                    className="grid h-9 w-9 place-items-center border border-border text-foreground transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => setView(({ y, m }) => (m === 11 ? { y: y + 1, m: 0 } : { y, m: m + 1 }))}
                    className="grid h-9 w-9 place-items-center border border-border text-foreground transition-colors hover:border-gold"
                  >
                    &rarr;
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-1 text-center">
                {WEEKDAYS.map((wd) => (
                  <div key={wd} className="pb-2 text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {wd}
                  </div>
                ))}
                {cells.map((day, i) => {
                  if (day === null) return <div key={`blank-${i}`} />;
                  const available = isAvailable(y, m, day);
                  const key = keyOf(y, m, day);
                  const isSelected = selected === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      disabled={!available}
                      onClick={() => setSelected(key)}
                      aria-label={`${MONTHS[m]} ${day}, ${y}${available ? "" : " — unavailable"}`}
                      className={`mx-auto grid aspect-square w-full max-w-[3.25rem] place-items-center rounded-full text-sm transition-colors ${
                        isSelected
                          ? "bg-crimson text-crimson-foreground"
                          : available
                            ? "border border-gold text-foreground hover:bg-gold/20"
                            : "cursor-not-allowed text-muted-foreground/40 line-through"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-gold bg-gold/20" /> Available
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-crimson" /> Selected
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-muted" /> Unavailable
                </span>
              </div>
            </div>

            {/* Form */}
            <div>
              {!selected ? (
                <div className="flex h-full min-h-64 items-center justify-center border border-dashed border-border p-10 text-center">
                  <p className="text-sm text-muted-foreground">
                    Select an available date on the calendar to begin your request.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-border bg-card p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected date</p>
                  <p className="mt-1 text-lg font-medium tracking-wide text-crimson">{prettyDate}</p>

                  <div className="mt-6 grid gap-5">
                    <div>
                      <label htmlFor="fullName" className="field-label">Full name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Your name"
                        className="field-input"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="field-label">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          className="field-input"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="field-label">Phone</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(000) 000-0000"
                          className="field-input"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="field-label">Service type</label>
                      <select
                        id="service"
                        name="service"
                        className="field-input"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        {SERVICE_TYPES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="time" className="field-label">Preferred time</label>
                      <select
                        id="time"
                        name="time"
                        className="field-input"
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                      >
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="notes" className="field-label">Additional notes</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        placeholder="Tell me about your occasion, location, number of people, etc."
                        className="field-input resize-none"
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-gold mt-2">
                      Request booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
