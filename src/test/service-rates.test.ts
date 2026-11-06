import { describe, expect, it } from "vitest";
import { bridalRates, regularRates, parseCategory, ratesForCategory, trainingRates } from "@/lib/service-rates";

describe("Service categories", () => {
  it("defaults to regular makeup without an explicit selection", () => {
    expect(parseCategory(undefined)).toBe("regular");
    expect(parseCategory("special-events")).toBe("regular"); // legacy links
    expect(ratesForCategory(parseCategory(undefined))).toEqual(regularRates);
    expect(ratesForCategory(parseCategory(undefined)).some((rate) => bridalRates.includes(rate))).toBe(false);
  });
  it("shows only bridal rates when bridal is selected", () => {
    expect(ratesForCategory("bridal")).toEqual(bridalRates);
    expect(ratesForCategory("bridal").some((rate) => regularRates.includes(rate))).toBe(false);
  });
  it("shows only trainings when trainings is selected", () => {
    expect(ratesForCategory("trainings")).toEqual(trainingRates);
  });
});

describe("Current prices", () => {
  it("sets studio appointment to $120", () => {
    expect(regularRates.find((r) => r.title === "Studio Appointment")?.price).toBe("$120");
  });
  it("sets bridal makeup to $500", () => {
    expect(bridalRates.find((r) => r.title === "Bridal Makeup")?.price).toBe("$500");
  });
  it("sets bridal trial to $150", () => {
    expect(bridalRates.find((r) => r.title === "Bridal Makeup Trial")?.price).toBe("$150");
  });
});

describe("One-on-one training rates", () => {
  it("sets personal training to 500 CAD for 5 days", () => {
    expect(trainingRates[0]).toMatchObject({ amount: 500, days: 5, oneOnOne: true });
  });
  it("sets professional artistry training to 1500 CAD for 10 days", () => {
    expect(trainingRates[1]).toMatchObject({ amount: 1500, days: 10, oneOnOne: true });
  });
  it("sets professional upgrade training to 650 CAD for 3 days", () => {
    expect(trainingRates[2]).toMatchObject({ amount: 650, days: 3, oneOnOne: true });
  });
});
