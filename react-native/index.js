/* eslint-disable sort-keys */
const { reactNativeRules } = require("../src/reactNativeRules");

module.exports = {
  extends: ["../react/index.js"],
  env: {
    "react-native/react-native": true,
    browser: false,
  },
  plugins: ["react-native"],
  rules: {
    ...reactNativeRules,
  },
};
