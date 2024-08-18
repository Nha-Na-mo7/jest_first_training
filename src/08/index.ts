type ExtractNumberAboutMultipleAndStickThree = (maxNumber: number) => Number[];

export const extractNumberAboutMultipleAndStickThree: ExtractNumberAboutMultipleAndStickThree =
  (maxNumber) => {
    if (maxNumber < 2 || maxNumber > 100) {
      throw new RangeError("2 ~ 100の数値を入れてください。");
    }

    const numberArray = [...Array(maxNumber).map((_, index) => index + 1)];
    const multipleAndStickThreeArray = numberArray.filter((value) => {
      return value.toString().includes("3") || value % 3 === 0;
    });

    return multipleAndStickThreeArray;
  };
