import { sum } from ".";

test("1 + 2 は 3 となること", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("四則演算", () => {
  describe("sum関数", () => {
    test("1 + 2 は 3 となること", () => {
      expect(sum(1, 2)).toBe(3);
    });
    test("100 + 100 は 200 となること", () => {
      expect(sum(100, 100)).toBe(200);
    });
    test("999 + 1 は 1000 となること", () => {
      expect(sum(999, 1)).toBe(1000);
    });
  });
});
