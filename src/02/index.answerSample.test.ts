import { lunarCalender } from ".";
import type { Month, JapaneseMonthName } from ".";

const testCaseList: { input: Month; expected: JapaneseMonthName }[] = [
  { input: 1, expected: "睦月" },
  { input: 2, expected: "如月" },
  { input: 3, expected: "弥生" },
  { input: 4, expected: "卯月" },
  { input: 5, expected: "皐月" },
  { input: 6, expected: "水無月" },
  { input: 7, expected: "文月" },
  { input: 8, expected: "葉月" },
  { input: 9, expected: "長月" },
  { input: 10, expected: "神無月" },
  { input: 11, expected: "霜月" },
  { input: 12, expected: "師走" },
];

it.skip.each(testCaseList)(
  "引数に $input を渡すと、$expected を返す",
  ({ input, expected }) => {
    expect(lunarCalender(input)).toBe(expected);
  }
);
