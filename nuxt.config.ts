// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/pico.jade.min.css"],
  modules: ["nuxt-svgo", "@nuxt/content", "@nuxt/eslint", "dayjs-nuxt"],svgo: {
    defaultImport: 'component',
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/jackyscript/favicon.ico",
        },
      ],
    },
    baseURL: "/jackyscript/",
  },
});