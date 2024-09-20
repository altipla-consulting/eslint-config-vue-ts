# eslint-config-vue-ts

ESLint configuration for Typescript & Vue projects.

## Install

```bash
npm i -D @altipla/eslint-config-vue-ts
```

## Usage

Configure your `.eslint.config.js` file:

```js
import config from '@altipla/eslint-config-vue-ts'

export default [
  ...config,
  {
    ignores: [ ... add your ignores here ... ],
  },
]
```

The ignore syntax supports glob patterns. For ignoring folders, make sure to end the pattern with a `/`.

If upgrading from ESLint 8, delete the`eslintrc.cjs` and `eslintignore` files.

Also, add ESLint as a dev dependency:

```bash
pnpm add -D eslint
```

### Adding extra rules

Rules must be added in a separate configuration object. For example:

```js
import config from '@altipla/eslint-config-vue-ts'

export default [
  ...config,
  {
    ignores: [ ... add your ignores here ... ],
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
```
