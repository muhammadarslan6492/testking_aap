// module.exports = {
//   testEnvironment: 'node',
//   testMatch: ['**/__tests__/**/*.test.js'],
// };

module.exports = {
  testEnvironment: 'node',
  globalTeardown: '<rootDir>/test-teardown-globals.js',
};
