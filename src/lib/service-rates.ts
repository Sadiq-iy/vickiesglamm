export type ServiceCategory = "bridal" | "regular" | "trainings";

export interface ServiceRate {
  title: string;
  description: string;
  price: string;
  per?: string;
  note?: string;
}

export const bridalRates: ServiceRate[] = [
  { title: "Bridal Makeup", description: "A complete, luxury makeup service designed to make you look and feel absolutely radiant on your big day.", price: "$500" },
  { title: "Bridesmaids / Bridal Party", description: "Flawless, natural and camera-ready makeup for your beautiful bridal party.", price: "$150", per: "per person" },
  { title: "Bridal Makeup Trial", description: "A chance to perfect your look and ensure you're completely happy before the big day.", price: "$150" },
];

export const regularRates: ServiceRate[] = [
  { title: "Studio Appointment", description: "Enjoy a personalized studio makeup experience. Perfect for date nights, events, photo shoots etc", price: "$120" },
  { title: "On-Location Appointment", description: "Enjoy the convenience of having your makeup done at your preferred location. Get a flawless, personalized makeup experience wherever you are. 💄 Additional Charge depends on Location.", price: "$150" },
];

export const trainingRates = [
  { title: "Personal Makeup Training", description: "Learn to do your own makeup confidently like a professional from everyday makeup to full glam.", price: "$500 CAD", amount: 500, days: 5, oneOnOne: true, per: "5 days · One-on-one" },
  { title: "Professional Makeup Artistry Training", description: "For beginners who want to become professional makeup artists and learn to work on clients.", price: "$1,500 CAD", amount: 1500, days: 10, oneOnOne: true, per: "10 days · One-on-one" },
  { title: "Professional Upgrade Training", description: "For existing makeup artists who want to refine their techniques and improve their results.", price: "$650 CAD", amount: 650, days: 3, oneOnOne: true, per: "3 days · One-on-one" },
] satisfies (ServiceRate & { amount: number; days: number; oneOnOne: boolean })[];

export function ratesForCategory(category: ServiceCategory): ServiceRate[] {
  if (category === "bridal") return bridalRates;
  if (category === "trainings") return trainingRates;
  return regularRates;
}

export function parseCategory(value: unknown): ServiceCategory {
  if (value === "bridal") return "bridal";
  if (value === "trainings") return "trainings";
  return "regular"; // legacy "special-events" also lands here
}
