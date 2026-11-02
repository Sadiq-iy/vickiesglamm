export type ServiceCategory = "bridal" | "special-events";

export interface ServiceRate {
  title: string;
  description: string;
  price: string;
  per?: string;
  note?: string;
}

export const bridalRates: ServiceRate[] = [
  { title: "Bridal Makeup", description: "A complete, luxury makeup service designed to make you look and feel absolutely radiant on your big day.", price: "$450" },
  { title: "Bridesmaids / Bridal Party", description: "Flawless, natural and camera-ready makeup for your beautiful bridal party.", price: "$150", per: "per person" },
  { title: "Bridal Makeup Trial", description: "A chance to perfect your look and ensure you're completely happy before the big day.", price: "$100" },
];

export const eventRates: ServiceRate[] = [
  { title: "Studio Appointment", description: "A relaxed glam session in the comfort of the Calgary studio — perfect for portraits, date nights and content days.", price: "$100" },
  { title: "On-Location Appointment", description: "Full glam brought to you, wherever the occasion takes place.", price: "$150", note: "Additional charges depend on location" },
];

export const trainingRates = [
  { title: "Personal Makeup Training", description: "Learn to do your own makeup confidently, from everyday natural looks to soft glam.", price: "$500 CAD", amount: 500, days: 5, oneOnOne: true, per: "5 days · One-on-one" },
  { title: "Professional Makeup Artistry Training", description: "For beginners who want to become professional makeup artists and learn to work on clients.", price: "$1,500 CAD", amount: 1500, days: 10, oneOnOne: true, per: "10 days · One-on-one" },
  { title: "Professional Upgrade Training", description: "For existing makeup artists who want to refine their techniques and improve their results.", price: "$650 CAD", amount: 650, days: 3, oneOnOne: true, per: "3 days · One-on-one" },
] satisfies ServiceRate[];

export function ratesForCategory(category: ServiceCategory): ServiceRate[] {
  return category === "bridal" ? bridalRates : [...eventRates, ...trainingRates];
}

export function parseCategory(value: unknown): ServiceCategory {
  return value === "bridal" ? "bridal" : "special-events";
}