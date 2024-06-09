import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function starlightThemeRapidePlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-rapide-plugin',
    hooks: {
      setup({ logger }) {
        logger.info('Starlight Theme Rapide plugin loaded')
      },
    },
  }
}
