import { fetchUser } from ".";
import { User } from "./types";

const user1: User = {
  id: 1,
  name: "test1",
  email: "test1@example.com",
};

describe("Promiseインスタンスを関数の戻り値としてreturnさせ、Promiseが解決するまでテストの判定を待機させる方法", () => {
  it("引数に渡したidのユーザーが存在する場合、resolveされる", () => {
    return fetchUser(1).then((user) => {
      expect(user).toStrictEqual(user1);
    });
  });
  it("引数に渡したidのユーザーが存在しない場合、rejectされる", () => {
    return fetchUser(99).catch((error) => {
      expect(error).toBe("error");
    });
  });
});

describe("resolveマッチャー、rejectマッチャーを使用する方法", () => {
  it("引数に渡したidのユーザーが存在する場合、resolveされる", () => {
    return expect(fetchUser(1)).resolves.toStrictEqual(user1);
  });
  it("引数に渡したidのユーザーが存在しない場合、rejectされる", () => {
    return expect(fetchUser(99)).rejects.toBe("error");
  });
});
