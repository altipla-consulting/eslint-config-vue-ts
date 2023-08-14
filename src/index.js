
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
  ignorePatterns: ['*.css', '/*.*'],

  // Some of the rules have Typescript equivalents that should be used instead.
  // To check whether a replacement exists or not go to this page:
  //   https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    'linebreak-style': ['error', 'unix'],

    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],

    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'eol-last': 'error',
    'key-spacing': 'error',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    // Typescript compiler already checks this type of errors.
    'no-undef': 'off',

    'space-before-blocks': 'error',
    'space-infix-ops': 'error',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],

    'prefer-const': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    'no-var': 'error',

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    '@typescript-eslint/no-non-null-assertion': 'off',

    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/this-in-template': ['error', 'never'],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: { max: 100 }, multiline: { max: 1 } }],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'error',
    'vue/multi-word-component-names': 'off',

    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-misused-promises': 'error',

    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message: 'Please use lodash-es instead.',
      },
    ],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
}
