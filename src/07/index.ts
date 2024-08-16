import { conversionToTenThousandYen, conversionToUSD } from "./modules";

type UnitConversion = (amount: number) => {
  yen: `${number}万円`;
  usd: `${number}$`;
};

export const unitConversion: UnitConversion = (amount) => {
  return {
    yen: conversionToTenThousandYen(amount),
    usd: conversionToUSD(amount),
  };
};
