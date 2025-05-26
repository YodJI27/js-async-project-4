import js from '@eslint/js'
import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

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
      '@stylistic/semi': ['error', 'never'],          
      '@stylistic/indent': ['error', 2],              
      '@stylistic/eol-last': ['error', 'always'],     
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      'no-console': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'error',
    },
  },
]
