import { dummyFetch } from ".";
import { dummyValidation } from "./libs/dummyValidation";

const spy = jest.spyOn(dummyValidation, "returnResult");
afterEach(() => {
  spy.mockClear();
});

describe("各ステータスコードごとの処理のテスト", () => {
  it("StatusCode 200", () => {
    spy.mockImplementationOnce(() => {
      return {
        result: {
          statusCode: 200,
          value: "it is value!",
        },
      };
    });
    const result = dummyFetch();
    expect(result).toBe("it is value!");
  });

  it("StatusCode 400", () => {
    spy.mockImplementationOnce(() => {
      return {
        result: {
          statusCode: 400,
          value: "",
        },
      };
    });
    const result = dummyFetch();
    expect(result).toBe("バリデーションに問題があります。");
  });

  it("StatusCode 500", () => {
    spy.mockImplementationOnce(() => {
      return {
        result: {
          statusCode: 500,
          value: "",
        },
      };
    });

    expect(() => dummyFetch()).toThrow(Error);
  });
});
