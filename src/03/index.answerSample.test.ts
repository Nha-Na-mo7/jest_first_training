import { fizzBuzz } from ".";

describe.skip("引数が0より大きい数値の場合", () => {
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

describe.skip("引数が0以下の数値の場合", () => {
  const errorMessage = "入力値は0より大きい数値で入力してください。";
  it("引数が 0 の場合、rangeErrorがthrowされる", () => {
    expect(() => fizzBuzz(0)).toThrow(RangeError);
    expect(() => fizzBuzz(0)).toThrow(errorMessage);
  });
  it("引数が マイナスの場合、rangeErrorがthrowされる", () => {
    expect(() => fizzBuzz(0)).toThrow(RangeError);
    expect(() => fizzBuzz(-3)).toThrow(errorMessage);
  });
});
