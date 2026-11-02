import { describe, expect, it } from "vitest";
import { bridalRates, eventRates, parseCategory, ratesForCategory, trainingRates } from "@/lib/service-rates";

describe("Service categories", () => {
  it("shows no bridal rates without an explicit bridal selection", () => {
    expect(parseCategory(undefined)).toBe("special-events");
    expect(ratesForCategory(parseCategory(undefined))).toEqual([...eventRates, ...trainingRates]);
    expect(ratesForCategory(parseCategory(undefined)).some((rate) => bridalRates.includes(rate))).toBe(false);
  });
  it("shows only bridal rates when bridal is selected", () => {
    expect(ratesForCategory("bridal")).toEqual(bridalRates);
    expect(ratesForCategory("bridal").some((rate) => eventRates.includes(rate))).toBe(false);
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