import type { StarlightPlugin } from '@astrojs/starlight/types'
import type { AstroIntegrationLogger } from 'astro'

export function overrideComponents(
  starlightConfig: StarlightUserConfig,
  overrides: (keyof NonNullable<StarlightUserConfig['components']>)[],
  logger: AstroIntegrationLogger,
): StarlightUserConfig['components'] {
  const components = { ...starlightConfig.components }
  for (const name of overrides) {
    if (starlightConfig.components?.[name]) {
      logger.warn(`A \`<${name}>\` component override is already defined in your Starlight configuration.`)
      logger.warn(
        `To use \`starlight-theme-rapide\`, either remove this override or manually render the content from \`starlight-theme-rapide/overrides/${name}.astro\`.`,
      )
      continue
    }
    components[name] = `starlight-theme-rapide/overrides/${name}.astro`
  }

  return components
}

type StarlightUserConfig = Parameters<StarlightPlugin['hooks']['setup']>['0']['config']
