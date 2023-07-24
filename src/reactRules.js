const reactRules = {
  "react/boolean-prop-naming": ["error"],
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  "react/hook-use-state": ["error"],
  "react/jsx-handler-names": "error",
  "react/jsx-no-constructed-context-values": "error",
  "react/jsx-no-leaked-render": "error",
  "react/jsx-no-script-url": "error",
  "react/jsx-no-useless-fragment": "error",
  "react/jsx-sort-props": "error",
  "react/no-array-index-key": "error",
  "react/no-danger": "error",
  "react/no-invalid-html-attribute": "error",
  "react/no-object-type-as-default-prop": "error",
  "react/no-this-in-sfc": "error",
  "react/no-typos": "error",
  "react/no-unstable-nested-components": "error",
  "react/prop-types": "off",
};

module.exports = {
  reactRules,
};
