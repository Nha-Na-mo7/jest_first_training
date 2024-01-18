import { FetchUser, FindUser } from "./types";
import { userData } from "./userData";

const findUser: FindUser = (id: number) =>
  userData.find((user) => user.id === id);

export const fetchUser: FetchUser = (id: number) => {
  return new Promise((resolve, reject) => {
    const user = findUser(id);
    if (!user) {
      return reject("error");
    }
    resolve(user);
  });
};
