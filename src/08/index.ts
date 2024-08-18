import { isNumberIncludesThree, isNumberMultiplesOfThree } from "./modules";

type ExtractNumberAboutMultipleAndStickThree = (maxNumber: number) => number[];

export const extractNumberAboutMultipleAndStickThree: ExtractNumberAboutMultipleAndStickThree =
  (maxNumber) => {
    if (maxNumber < 2 || maxNumber > 100) {
      throw new RangeError("2 ~ 100の数値を入れてください。");
    }

    const numberArray = [...Array(maxNumber).map((_, index) => index + 1)];
    const multipleAndStickThreeArray = numberArray.filter((value) => {
      return isNumberIncludesThree(value) || isNumberMultiplesOfThree(value);
    });

    return multipleAndStickThreeArray;
  };
