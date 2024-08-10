/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@jjoing/eslint-config/next.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  ignorePatterns: ['postcss.config.js', 'tailwind.config.js'],
};
