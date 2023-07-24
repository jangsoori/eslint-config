/* eslint-disable sort-keys */
const { tsRules } = require("../src/tsRules");

module.exports = {
  root: true,
  extends: [
    "../index",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    ...tsRules,
  },
};
