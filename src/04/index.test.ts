import { createTestObject } from ".";

const testObject1 = createTestObject({
  name: "User1",
  prefecture: "東京都",
  municipalities: "千代田区",
  age: 16,
});

const testObject2 = createTestObject({
  name: "User2",
  prefecture: "北海道",
  municipalities: "札幌市",
});

describe("オブジェクトのテスト", () => {
  it("オブジェクトが指定のkey-valueを持つこと", () => {
    expect(testObject1).toMatchObject({ name: "User1", age: 16 });
    expect(testObject1).toMatchObject({
      address: {
        prefecture: "東京都",
        municipalities: "千代田区",
      },
    });
  });
}
