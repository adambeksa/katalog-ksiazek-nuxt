import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    // #shared is automatically aliased by Nuxt to ./shared
  },
  css: ['~/assets/css/globals.scss'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'pl',
    locales: ['pl']
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
