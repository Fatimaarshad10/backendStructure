module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2022: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["jest"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "2022",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["off", "double"],
    camelcase: ["off", "always"],
    indent: "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};
