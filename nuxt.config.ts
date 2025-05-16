// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/pico.jade.min.css"],
  modules: ["nuxt-svgo"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href:
            (import.meta.env.NUXT_APP_BASE_URL
              ? import.meta.env.NUXT_APP_BASE_URL
              : "/") + "favicon.ico",
        },
      ],
    },
    baseURL: "/jackyscript/",
  },
});
