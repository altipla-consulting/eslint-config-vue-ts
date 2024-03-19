
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  ignorePatterns: ['*.css'],

  // Some of the rules have Typescript equivalents that should be used instead.
  // To check whether a replacement exists or not go to this page:
  //   https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    'linebreak-style': ['error', 'unix'],

    'eol-last': 'error',
    'key-spacing': 'error',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    'function-paren-newline': ['error', 'consistent'],
    'space-in-parens': ['error', 'never'],

    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

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

    // Typescript compiler already checks this type of errors.
    'no-undef': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],

    'prefer-const': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    'no-var': 'error',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { arguments: false } }],
    
    'arrow-parens': ['error', 'as-needed'],
    'no-confusing-arrow': ['error', { allowParens: false }],

    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message: 'Please use lodash-es instead.',
      },
    ],

    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/this-in-template': ['error', 'never'],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 100 }, multiline: { max: 1 } }],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'error',
    'vue/multi-word-component-names': 'off',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
}
