// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/invite/',
  },
  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/app.scss',
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
  ],
  modules: [
    '@nuxtjs/svg-sprite',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/styles/functions.scss";'
        }
      }
    }
  }
})
