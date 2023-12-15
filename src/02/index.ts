type FizzBuzzString = "Fizz" | "Buzz" | "FizzBuzz";
type FizzBuzz = (value: number) => number | FizzBuzzString;

const checkRange = (value: number) => {
  if (value < 0) {
    throw new RangeError("入力値は0以上で入力してください。");
  }
};

export const fizzBuzz: FizzBuzz = (value) => {
  checkRange(value);

  if (value % 15 === 0) {
    return "FizzBuzz";
  }

  if (value % 3 === 0) {
    return "Fizz";
  }

  if (value % 5 === 0) {
    return "Buzz";
  }

  return value;
};
