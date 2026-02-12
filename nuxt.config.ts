import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  },
  alias: {
    // #shared is automatically aliased by Nuxt to ./shared
  },
  css: [
    '~/assets/css/globals.scss',
  ],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'pl',
    langDir: '../app/assets/translations',
    locales: [
      {
        code: 'pl',
        file: 'pl.json'
      }
    ]
  },
  typescript: {
    tsConfig: {
      include: ['./shared/**/*']
    }
  },
  imports: {
    dirs: ['app/stores']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variables.scss" as *; @use "~/assets/css/_mixins.scss" as *;'
        }
      }
    }
  }
})
