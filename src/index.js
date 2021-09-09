
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
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

    'vue/mustache-interpolation-spacing': ['error', 'never'],
  
    // Disable root validation until it adapts to Vue 3 where we can have multiple
    // of them. I guess this rule will disappear once that occurs.
    'vue/valid-template-root': ['off'],
    'vue/no-multiple-template-root': ['off'],
    'vue/no-v-for-template-key': ['off'],
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
}
