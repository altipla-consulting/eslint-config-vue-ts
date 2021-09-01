
module.exports = {
  extends: [
    '@altipla/eslint-config-ts',
    'plugin:vue/essential',
  ],
  rules: {
    'vue/mustache-interpolation-spacing': ['error', 'never'],

    // Disable root validation until it adapts to Vue 3 where we can have multiple
    // of them. I guess this rule will disappear once that occurs.
    'vue/valid-template-root': ['off'],
    'vue/no-multiple-template-root': ['off'],
    'vue/no-v-for-template-key': ['off'],
  },
  plugins: [
    'vue',
  ],
}
