/* eslint-disable sort-keys */
const tsRules = {
  "@typescript-eslint/array-type": ["error", { default: "generic" }],
  "@typescript-eslint/adjacent-overload-signatures": "error",

  "@typescript-eslint/consistent-generic-constructors": [
    "error",
    "type-annotation",
  ],
  "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
  ],
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/explicit-function-return-type": "error",
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/member-ordering": "error",
  "@typescript-eslint/method-signature-style": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
    {
      selector: "default",
      format: ["camelCase", "PascalCase"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
    },
  ],
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": "off",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/prefer-enum-initializers": "error",
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/sort-type-constituents": "error",
  "@typescript-eslint/strict-boolean-expressions": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",

  // Extensions
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "error",
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": "error",
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": "error",
  /*
   * "no-extra-semi": "off",
   * "@typescript-eslint/no-extra-semi": "error",
   */
  "no-invalid-this": "off",
  "@typescript-eslint/no-invalid-this": "error",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  /*
   *    "no-magic-numbers": "off",
   *    "@typescript-eslint/no-magic-numbers": "error"
   *   {
   *     ignoreArrayIndexes: true,
   *     ignoreDefaultValues: true,
   *     detectObjects: true,
   *   },
   * ],
   */
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "error",
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "error",
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "error",
  "no-return-await": "off",
  "@typescript-eslint/return-await": "error",
};

module.exports = {
  tsRules,
};
