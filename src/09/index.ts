import { dummyValidation } from "./libs/dummyValidation";

export const dummyFetch = () => {
  const {
    result: { statusCode, value },
  } = dummyValidation;

  if (statusCode === 200) {
    return value;
  }

  if (statusCode === 400) {
    return "バリデーションに問題があります。";
  }

  if (statusCode === 500) {
    throw new Error("不明なエラーが発生しました。");
  }
};
