import type { Config } from 'jest';

/* eslint-disable */
export default {
  displayName: 'falso',

  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!uuid)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/falso',
  preset: '../../jest.preset.js',
} satisfies Config;
