export type TestObject = {
  name: string;
  address: {
    prefecture: string;
    municipalities: string;
  };
  age?: number;
};

export type Args = {
  name: string;
  prefecture: string;
  municipalities: string;
  age?: number;
};
