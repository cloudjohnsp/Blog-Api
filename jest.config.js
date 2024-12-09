/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testTimeout: 30000,
};
