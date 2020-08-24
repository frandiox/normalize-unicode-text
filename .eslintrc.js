module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    'eslint:recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
    // https://github.com/typescript-eslint/typescript-eslint
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // https://github.com/jest-community/eslint-plugin-jest
    'plugin:jest/recommended',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'plugin:unicorn/recommended',
  ],
  plugins: ['unicorn'],

  rules: {},
  overrides: [
    {
      files: ['**/*.spec.ts'],
      env: {
        jest: true,
      },
    },
  ],
}
