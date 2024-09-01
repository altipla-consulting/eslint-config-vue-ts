import vue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import globals from 'globals'
import parser from 'vue-eslint-parser'
import js from '@eslint/js'

export default ts.config(js.configs.recommended, ...vue.configs['flat/recommended'], ...ts.configs.recommended, {
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  plugins: {
    '@typescript-eslint': ts.plugin,
    vue,
  },
  ignores: ['dist'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parser,
    ecmaVersion: 11,
    sourceType: 'module',
    parserOptions: {
      parser: ts.parser,
      project: ['./tsconfig.json'],
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['off'],
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'error',
    'key-spacing': 'error',
    curly: 'error',
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'function-paren-newline': ['error', 'consistent'],
    'arrow-parens': 'off',
    'space-in-parens': ['error', 'never'],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'array-bracket-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '_',
        argsIgnorePattern: '_',
      },
    ],
    'prefer-const': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
        },
      },
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message: 'Please use lodash-es instead.',
      },
    ],
    'vue/this-in-template': ['error', 'never'],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 100,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/attributes-order': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-v-html': 'off',
  },
})
