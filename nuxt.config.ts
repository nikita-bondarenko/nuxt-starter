// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/image",  ['@pinia/nuxt', {autoImports: ['defineStore','acceptHMRUpdate']}], ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true
  },
  imports: {
    dirs: ['stores']
  }
})
