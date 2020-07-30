const jestPreset = require('@testing-library/react-native/jest-preset')

module.exports = Object.assign(jestPreset, {
  preset: '@testing-library/react-native',
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname // the root directory
  ],
  roots: ['src/'],
  setupFiles: [...jestPreset.setupFiles, '<rootDir>/utils/setupTests.js'],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each']
})
