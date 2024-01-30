/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'no-duplicate-imports': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: './tailwind.config.ts',
      classRegex: '^(class(Name)?|tw)$',
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
};

module.exports = config;
