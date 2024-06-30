type UnitConversion = (amount: number) => {
  yen: `${number}万円`;
  usd: `${number}$`;
};

const conversionToTenThousandYen: (amount: number) => `${number}万円` = (
  amount: number
) => `${amount % 10000}万円`;

// この関数は実装が遅れていて、まだ完成していないものとする。
const conversionToUSD = (amount: number) => {
  // TODO これから実装予定
  throw new Error("気が向いたら実装");
  // more JPY to USD code...
};

export const unitConversion: UnitConversion = (amount) => {
  return {
    yen: conversionToTenThousandYen(amount),
    usd: conversionToUSD(amount),
  };
};
