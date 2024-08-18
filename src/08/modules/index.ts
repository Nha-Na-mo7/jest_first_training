type NumberChecker = (number: number) => boolean;

const isNumberIncludesThree: NumberChecker = (number) =>
  String(number).includes("3");

const isNumberMultiplesOfThree: NumberChecker = (number) => number % 3 === 0;

export const numberCheckModules = {
  isNumberIncludesThree,
  isNumberMultiplesOfThree,
};
