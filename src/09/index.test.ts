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
  });
});
