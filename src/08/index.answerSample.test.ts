import { extractNumberAboutMultipleAndStickThree } from ".";
import { numberCheckModules } from "./modules";

describe("jest.spyOnを使ったテスト", () => {
  const spy = jest.spyOn(numberCheckModules, "isNumberIncludesThree");
  it("isNumberIncludesThree をspyOnを使ってモックする", () => {
    expect(spy).not.toHaveBeenCalled();

    extractNumberAboutMultipleAndStickThree(50);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(34);
    expect(spy).not.toHaveBeenCalledWith(27);
    expect(spy).toHaveBeenCalledWith(31);
  });

  it("一度spyOnを使ってモックした関数は、別のテストでも状態が引き継がれる", () => {
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(40);

    // モックをクリアすれば元に戻る
    spy.mockClear();
    expect(spy).not.toHaveBeenCalled();
  });
});

describe("jest.fnを使ったテスト", () => {
  it("即時のモック関数を作成し、処理をさせてみる", () => {
    const nostalgicComedianFunction = jest.fn((value) => `🤪 < ${value}`);
    expect(nostalgicComedianFunction).not.toHaveBeenCalled();

    const threeArray = extractNumberAboutMultipleAndStickThree(40);
    const numberArray = [...Array(40)].map((_, index) => index + 1);
    const nostalgicComedianSaysArray = numberArray.map((value) => {
      return threeArray.includes(value)
        ? nostalgicComedianFunction(value)
        : value;
    });

    // console.log(nostalgicComedianSaysArray);
    expect(nostalgicComedianFunction).toHaveBeenCalledTimes(21);
    expect(nostalgicComedianFunction).toHaveBeenCalledWith(3);
  });
});
