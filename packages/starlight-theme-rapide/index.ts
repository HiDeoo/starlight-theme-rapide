import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function starlightThemeRapidePlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-rapide-plugin',
    hooks: {
      setup({ config, updateConfig }) {
        updateConfig({
          customCss: [...(config.customCss ?? []), 'starlight-theme-rapide/styles'],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  ...(typeof config.expressiveCode === 'object' ? config.expressiveCode : {}),
                  themes: ['vitesse-dark', 'vitesse-light'],
                },
        })
      },
    },
  }
}
