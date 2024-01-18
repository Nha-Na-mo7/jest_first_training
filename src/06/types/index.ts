export type User = {
  id: number;
  name: string;
  email: string;
};
export type FetchUser = (id: number) => Promise<User>;
export type FindUser = (id: number) => User | undefined;
