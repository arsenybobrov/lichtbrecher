// from https://github.com/zeit/next.js/blob/canary/examples/with-jest-typescript/jest.config.js, commit: 5f40306 on 28 Jun

const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.ts?$': 'babel-jest',
  },
  testURL: 'http://localhost',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node', 'json'],
  collectCoverage: false,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  globals: {
    document: {},
    window: {
      navigator: {
        userAgent: {
          match: {},
        },
      },
    },
    'ts-jest': {
      isolatedModules: true,
      diagnostics: {
        warnOnly: true,
      },
    },
  },
};
