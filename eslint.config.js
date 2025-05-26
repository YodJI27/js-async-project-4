import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,
  {
     plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
];