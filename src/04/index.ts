import { Args, TestObject } from "./types";

type CreateTestObject = (args: Args) => TestObject;

export const createTestObject: CreateTestObject = ({
  id,
  name,
  prefecture,
  municipalities,
  age,
}) => {
  return {
    id,
    name,
    address: {
      prefecture,
      municipalities,
    },
    age,
  };
};
