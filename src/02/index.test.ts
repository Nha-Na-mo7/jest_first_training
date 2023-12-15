import { fizzBuzz } from ".";

describe("引数が0以上の場合", () => {
  it("3 or 5 で割り切れる整数を渡すと、FizzBuzzが出力される", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("3 で割り切れる整数を渡すと、Fizzが出力される", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("5 で割り切れる整数を渡すと、Buzzが出力される", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("3 or 5 では割り切れない整数を渡すと、渡した値がそのまま出力される", () => {
    expect(fizzBuzz(17)).toBe(17);
  });
});
