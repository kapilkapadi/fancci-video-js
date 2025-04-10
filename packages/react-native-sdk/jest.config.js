/** @typedef {import('jest').Config} */
const config = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
    // this package is hoisted to the root node_modules
    '<rootDir>/../../node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/mocks/',
    '<rootDir>/__tests__/utils/',
    '<rootDir>/expo-config-plugin/__tests__',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transformIgnorePatterns: [
    // added as per the README in https://github.com/invertase/notifee/tree/main/packages/react-native
    'node_modules/(?!(jest-)?react-native|@react-native|@notifee)',
  ],
  testTimeout: 10000,
};

module.exports = config;
