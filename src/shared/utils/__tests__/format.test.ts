import { describe, expect } from "@jest/globals";

import { formatMoney } from "../format";

describe("formatMoney()", () => {
  it("should work for small numbers", () => {
    expect(formatMoney(123)).toBe("123");
    expect(formatMoney(123.45)).toBe("123");
    expect(formatMoney(12345.67)).toBe("12,346");
  });

  it("should work for negative numbers", () => {
    expect(formatMoney(-123)).toBe("-123");
    expect(formatMoney(-123.45)).toBe("-123");
    expect(formatMoney(-12345.67)).toBe("-12,346");
  });
});
