import hideoo from '@hideoo/eslint-config'

export default hideoo({
  ignores: ['eslint.config.mjs'],
  languageOptions: {
    parserOptions: {
      project: ['../../tsconfig.json'],
    },
  },
})
