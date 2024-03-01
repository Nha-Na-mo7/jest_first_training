type User = {
  name: string;
  age: number;
};
const pacificTeams = [
  "Fighters",
  "Eagles",
  "Lions",
  "Marines",
  "Buffaloes",
  "Hawks",
];
const users: User[] = [
  { name: "user1", age: 17 },
  { name: "user2", age: 25 },
  { name: "user3", age: 33 },
];
const booleanObject = {
  truthy: true,
  falsy: false,
  nullValue: null,
  undefinedValue: undefined,
};
describe("配列に関するテスト", () => {
  it("指定した要素が配列内に含まれていること", () => {
    expect(pacificTeams).toContain("Fighters");
    expect(pacificTeams).toEqual(expect.arrayContaining(["Eagles", "Lions"]));
    expect(pacificTeams).not.toContain("Giants");
    expect(pacificTeams).not.toEqual(
      expect.arrayContaining(["Marines", "Swallows"])
    );
  });

  it("オブジェクトの配列のテスト", () => {
    expect(users).toContainEqual({ name: "user1", age: 17 });
    expect(users).toEqual(
      expect.arrayContaining([
        { name: "user2", age: 25 },
        { name: "user3", age: 33 },
      ])
    );
  });
});
