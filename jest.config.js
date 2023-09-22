module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/script"],
  testMatch: ["**/?(*.)test.(ts|js)?(x)"],
  testTimeout: 10000,
  testEnvironment: "jest-environment-jsdom",
};
