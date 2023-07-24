/* eslint-disable sort-keys */
const { jsRules } = require("./src/jsRules");

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  root: true,
  extends: ["eslint:recommended", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    ...jsRules,
  },
};
