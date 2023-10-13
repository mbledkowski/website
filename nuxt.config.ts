import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles/styles.css"],
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap",
        },
      ],
    },
  },
});
