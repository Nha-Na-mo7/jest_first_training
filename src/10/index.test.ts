import { greet } from ".";

describe("時間ごとにあいさつが変化するテスト", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("現在時刻が5時~10時の場合、おはようございます！と返す", () => {
    jest.setSystemTime(new Date(2038, 1, 19, 5));
    expect(greet()).toBe("おはようございます！");

    jest.setSystemTime(new Date(2038, 1, 19, 10));
    expect(greet()).toBe("おはようございます！");
  });

  it("現在時刻が11時~17時の場合、こんにちは！と返す", () => {
    jest.setSystemTime(new Date(2038, 1, 19, 11));
    expect(greet()).toBe("こんにちは！");

    jest.setSystemTime(new Date(2038, 1, 19, 17));
    expect(greet()).toBe("こんにちは！");
  });

  it("現在時刻が18時~22時の場合、こんばんは！と返す", () => {
    jest.setSystemTime(new Date(2038, 1, 19, 18));
    expect(greet()).toBe("こんばんは！");

    jest.setSystemTime(new Date(2038, 1, 19, 22));
    expect(greet()).toBe("こんばんは！");
  });

  it("現在時刻が23時、または0~4時の場合、おやすみなさい！と返す", () => {
    jest.setSystemTime(new Date(2038, 1, 19, 23));
    expect(greet()).toBe("おやすみなさい！");

    jest.setSystemTime(new Date(2038, 1, 19, 0));
    expect(greet()).toBe("おやすみなさい！");

    jest.setSystemTime(new Date(2038, 1, 19, 4));
    expect(greet()).toBe("おやすみなさい！");
  });
});
