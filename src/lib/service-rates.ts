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

export const bridalPolicy: string[] = [
  "A 50% non-refundable deposit secures your wedding date and is applied toward your total balance.",
  "The final balance is due 7 days before the wedding date.",
  "Cancellations 30+ days before the wedding date forfeit the deposit; cancellations within 30 days are not refundable.",
  "Rescheduling requires at least 30 days' notice and is subject to availability — the deposit transfers to the new date.",
  "Payment by e-transfer only.",
  "Bridal parties: minimum 5, maximum 10 guests including the bride; larger parties are quoted with additional time.",
];

export const regularPolicy: string[] = [
  "A booking deposit of $50 is required to secure your appointment. Your appointment is not confirmed until the deposit is received.",
  "Please reschedule at least 48 hours before your appointment.",
  "Deposits are non-refundable if cancelled within 48 hours of the appointment.",
  "Please arrive on time — 15+ minutes late may result in a shortened service or cancellation.",
  "No-shows forfeit the deposit.",
  "If Vickiesglam cancels, your deposit is refunded or transferred.",
];

export const trainingPolicy: string[] = [
  "All training sessions must be booked in advance. A deposit is required to secure your preferred date.",
  "Deposits are non-refundable but may be transferred to another available training date with at least 48 hours' notice.",
  "Full payment must be completed before training commences, unless otherwise agreed.",
  "Cancellations or missed sessions without prior notice will result in forfeiture of the deposit.",
  "Students are expected to arrive on time. Late arrival will not extend the scheduled training time.",
  "Training is practical and interactive. Students are expected to participate actively, practise demonstrated techniques and come prepared with any requested materials or models.",
  "All training tools and products must be handled with care. Proper hygiene, brush cleaning and product sanitation are compulsory throughout training.",
  "Training sessions are held on weekdays, Monday to Thursday. Training dates and times must be agreed upon and confirmed in advance.",
  "Photographs and videos may be taken during training for promotional purposes, with the student's consent.",
  "Certificates of completion are issued where applicable, upon successful completion of the training programme.",
];

export function policiesForCategory(category: ServiceCategory): string[] {
  if (category === "bridal") return bridalPolicy;
  if (category === "trainings") return trainingPolicy;
  return regularPolicy;
}

export function parseCategory(value: unknown): ServiceCategory {
  if (value === "bridal") return "bridal";
  if (value === "trainings") return "trainings";
  return "regular"; // legacy "special-events" also lands here
}
