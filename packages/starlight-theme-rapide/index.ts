import type { StarlightPlugin } from '@astrojs/starlight/types'

import { overrideComponents } from './libs/starlight'

export default function starlightThemeRapidePlugin(): StarlightPlugin {
  return {
    name: 'starlight-theme-rapide-plugin',
    hooks: {
      setup({ config, logger, updateConfig }) {
        updateConfig({
          components: overrideComponents(
            config,
            [
              'Pagination',
              'Banner',
              {
                name: 'PageTitle',
                fallback: 'Banner',
              },
              'ThemeSelect',
              'LanguageSelect',
            ],
            logger,
          ),
          customCss: [...(config.customCss ?? []), 'starlight-theme-rapide/styles'],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  styleOverrides: {
                    borderColor: 'var(--sl-rapide-ui-border-color)',
                    borderRadius: '0.5rem',
                    frames: {
                      editorActiveTabIndicatorTopColor: 'unset',
                      editorActiveTabIndicatorBottomColor: 'var(--sl-color-gray-3)',
                      editorTabBarBorderBottomColor: 'var(--sl-rapide-ui-border-color)',
                      frameBoxShadowCssValue: 'unset',
                    },
                    textMarkers: {
                      backgroundOpacity: '40%',
                      markBackground: 'var(--sl-rapide-ec-marker-bg-color)',
                      markBorderColor: 'var(--sl-rapide-ec-marker-border-color)',
                    },
                  },
                  themes: ['vitesse-dark', 'vitesse-light'],
                  ...(typeof config.expressiveCode === 'object' ? config.expressiveCode : {}),
                },
        })
      },
    },
  }
}
