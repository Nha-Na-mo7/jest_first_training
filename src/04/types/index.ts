export type TestObject = {
  id: number;
  name: string;
  address: {
    prefecture: string;
    municipalities: string;
  };
  age?: number;
};

export type Args = {
  id: number;
  name: string;
  prefecture: string;
  municipalities: string;
  age?: number;
};
