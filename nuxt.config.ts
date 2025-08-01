// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  modules: ["nuxt-svgo", "@nuxt/content", "@nuxt/eslint", "dayjs-nuxt"],svgo: {
    defaultImport: 'component',
  },
  app: {
    head: {
      title: 'Dezhi Jacky Fu', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
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
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'min-light',
            // Theme used if `html.dark`
            dark: 'min-dark',
          }
        }
      }
    }
  }
});