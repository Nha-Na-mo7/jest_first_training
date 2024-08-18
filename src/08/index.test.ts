import { extractNumberAboutMultipleAndStickThree } from ".";
import { numberCheckModules } from "./modules";

describe("jest.spyOnのテスト", () => {
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

    // モックをリセットすれば元に戻る
    spy.mockReset();
    expect(spy).not.toHaveBeenCalled();
  });
});
