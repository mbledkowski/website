import content from '@originjs/vite-plugin-content'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  image: {
    quality: 96,
    format: ['avif','webp']
  },
  nitro: {
    rollupConfig: {
      // @ts-ignore
      plugins: [content()]
    }
  }
})
