export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type JapaneseMonthName =
  | "睦月"
  | "如月"
  | "弥生"
  | "卯月"
  | "皐月"
  | "水無月"
  | "文月"
  | "葉月"
  | "長月"
  | "神無月"
  | "霜月"
  | "師走";
type LunarCalender = (month: Month) => JapaneseMonthName;

export const lunarCalender: LunarCalender = (month: Month) => {
  switch (month) {
    case 1:
      return "睦月";
    case 2:
      return "如月";
    case 3:
      return "弥生";
    case 4:
      return "卯月";
    case 5:
      return "皐月";
    case 6:
      return "水無月";
    case 7:
      return "文月";
    case 8:
      return "葉月";
    case 9:
      return "長月";
    case 10:
      return "神無月";
    case 11:
      return "霜月";
    case 12:
      return "師走";
  }
};
