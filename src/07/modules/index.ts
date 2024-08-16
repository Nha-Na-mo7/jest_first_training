export const conversionToTenThousandYen: (amount: number) => `${number}万円` = (
  amount: number
) => `${Math.floor(amount / 10000)}万円`;

// この関数は実装が遅れていて、まだ完成していないものとする。
export const conversionToUSD = (amount: number) => {
  // TODO いつか実装する
  throw new Error("気が向いたら実装");
};
