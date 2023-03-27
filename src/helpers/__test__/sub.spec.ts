import { describe, expect, it } from "vitest";
import { sum } from "../sum";
describe("sum", () => {
  it("should 2 + 2 be 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
