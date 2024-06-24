import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'

export default defineConfig({
  integrations: [
    starlight({
      credits: true,
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/HiDeoo/starlight-theme-rapide/edit/main/docs/',
      },
      plugins: [starlightThemeRapide()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ label: 'Getting Started', link: '/getting-started/' }],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: {
        github: 'https://github.com/HiDeoo/starlight-theme-rapide',
      },
      title: 'Starlight Rapide',
    }),
  ],
  site: 'https://starlight-theme-rapide.vercel.app',
})
