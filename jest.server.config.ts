import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  roots: ['./server/src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default jestConfig;
