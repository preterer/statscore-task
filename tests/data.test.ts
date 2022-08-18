import { matches } from "../data";

describe("Data", () => {
  it("Should have 5 match records", () => {
    expect(matches.length).toBe(5);
  });
});
