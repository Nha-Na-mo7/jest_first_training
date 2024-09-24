import { fetchUser } from ".";
import { User } from "./types";

const user1: User = {
  id: 1,
  name: "test1",
  email: "test1@example.com",
};

describe.skip("Promiseインスタンスを関数の戻り値としてreturnさせ、Promiseが解決するまでテストの判定を待機させる方法", () => {
  it("引数に渡したidのユーザーが存在する場合、resolveされる", () => {
    return fetchUser(1).then((user) => {
      expect(user).toStrictEqual(user1);
    });
  });
  it("引数に渡したidのユーザーが存在しない場合、rejectされる", () => {
    expect.assertions(1);
    return fetchUser(99).catch((error) => {
      expect(error).toBe("error");
    });
  });
});

describe.skip("resolveマッチャー、rejectマッチャーを使用する方法", () => {
  it("引数に渡したidのユーザーが存在する場合、resolveされる", () => {
    return expect(fetchUser(1)).resolves.toStrictEqual(user1);
  });
  it("引数に渡したidのユーザーが存在しない場合、rejectされる", () => {
    expect.assertions(1);
    return expect(fetchUser(99)).rejects.toBe("error");
  });
});

describe.skip("テスト関数をasync 関数とし、テスト関数内でPromiseの解決を待つ方法", () => {
  it("引数に渡したidのユーザーが存在する場合、resolveされる", async () => {
    await expect(fetchUser(1)).resolves.toStrictEqual(user1);
  });

  it("引数に渡したidのユーザーが存在しない場合、rejectされる", async () => {
    expect.assertions(1);
    await expect(fetchUser(99)).rejects.toBe("error");
  });
});

describe.skip("try~catchを使用したrejectのテスト", () => {
  it("引数に渡したidのユーザーが存在しない場合、rejectされる", async () => {
    expect.assertions(1);

    try {
      await fetchUser(99);
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});
