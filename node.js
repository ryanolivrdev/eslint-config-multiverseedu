module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    jest: true,
    node: true,
  },
  rules: {
    "no-console": 1,
    "prettier/prettier": 2,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: [".eslintrc.js"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
