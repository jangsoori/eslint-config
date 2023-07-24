/* eslint-disable sort-keys */

const { reactRules } = require("../src/reactRules");

module.exports = {
  root: true,
  plugins: ["react"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...reactRules,
  },
};
