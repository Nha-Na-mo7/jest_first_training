import { sum } from ".";

test("1 + 2 は 3 となること", () => {
  expect(sum(1, 2)).toBe(3);
});
