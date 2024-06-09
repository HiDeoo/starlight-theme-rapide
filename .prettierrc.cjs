const baseConfig = require('@hideoo/prettier-config')

/**
 * @type {import('prettier').Config}
 */
const prettierConfig = {
  ...baseConfig,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
      },
    },
  ],
  plugins: [require.resolve('prettier-plugin-astro')],
}

module.exports = prettierConfig
