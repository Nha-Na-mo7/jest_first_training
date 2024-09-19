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

  it("truthy, falsy, null, undefined のテスト", () => {
    const { truthy, falsy, nullValue, undefinedValue } = booleanObject;
    expect(truthy).toBeTruthy();
    expect(falsy).toBeFalsy();
    expect(nullValue).toBeNull();
    expect(undefinedValue).toBeUndefined();

    expect(truthy).not.toBeFalsy();
    expect(falsy).not.toBeTruthy();
  });
});
