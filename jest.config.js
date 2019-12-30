module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testURL: 'http://localhost',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  globals: {
    window: {
      navigator: {
        userAgent: {
          match: {},
        },
      },
    },
  },
};
