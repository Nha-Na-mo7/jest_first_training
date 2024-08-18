type NumberChecker = (number: number) => boolean;

export const isNumberIncludesThree: NumberChecker = (number) =>
  number.toString().includes("3");

export const isNumberMultiplesOfThree: NumberChecker = (number) =>
  number % 3 === 0;
