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
                  styleOverrides: {
                    borderColor: 'var(--sl-color-gray-6)',
                    borderRadius: '0.5rem',
                    frames: {
                      frameBoxShadowCssValue: 'unset',
                    },
                  },
                  themes: ['vitesse-dark', 'vitesse-light'],
                },
        })
      },
    },
  }
}
