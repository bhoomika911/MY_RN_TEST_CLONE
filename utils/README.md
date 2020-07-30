# utils

This is the root directory for utils used within the entire project.

`./setupTests.js`
  - Exports util function to do some setup for test suite
  - Currently empty but it's configured to be used when content is placed inside

`./test-utils.js`
  - Imports and exports all of `@testing-library/react-native` in order to customize `render` to wrap providers or any other component that wraps your component
  - Configured as an alias so you can import `test-utils` from your test files
  