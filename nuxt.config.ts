// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/app.scss',
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
  ],
  modules: [
    '@nuxtjs/svg-sprite',
  ],
})
