import { Args, TestObject } from "./types";

type CreateTestObject = (args: Args) => TestObject;

export const createTestObject: CreateTestObject = ({
  name,
  prefecture,
  municipalities,
  age,
}) => {
  return {
    name,
    address: {
      prefecture,
      municipalities,
    },
    age,
  };
};
