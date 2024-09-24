import { unitConversion } from ".";

jest.mock("./modules", () => ({
  ...jest.requireActual("./modules"),
  conversionToUSD: (amount: number) => `${Math.floor(amount / 150)}$`,
}));

it.skip("数値を引数に与えると、何万円か、何米ドルに当たるかを換算する", () => {
  expect(unitConversion(30000)).toMatchObject({
    yen: "3万円",
    usd: "200$",
  });
});
