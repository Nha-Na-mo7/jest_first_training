import { numberCheckModules } from "./modules";

type ExtractNumberAboutMultipleAndStickThree = (maxNumber: number) => number[];

export const extractNumberAboutMultipleAndStickThree: ExtractNumberAboutMultipleAndStickThree =
  (maxNumber) => {
    if (maxNumber < 2 || maxNumber > 100) {
      throw new RangeError("2 ~ 100の数値を入れてください。");
    }
    const { isNumberIncludesThree, isNumberMultiplesOfThree } =
      numberCheckModules;
    const numberArray = [...Array(maxNumber)].map((_, index) => index + 1);

    const multipleAndStickThreeArray = numberArray.filter((value) => {
      return isNumberMultiplesOfThree(value) || isNumberIncludesThree(value);
    });

    return multipleAndStickThreeArray;
  };
