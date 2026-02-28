// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  vue: {
    runtimeCompiler: true,
  },

  build: {
    transpile: ["vue-toastification"],
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-tiptap-editor"],

  tiptap: {
    lang: "fa",
    editor: {},
  },

  css: ["~/assets/css/tailwind.css"],

  app: {
    head: {
      title: "زبان انقلاب",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  runtimeConfig: {
    public: {
      // NOTE: این مقدار در کلاینت قابل دسترسی است (public).
      // اگر واقعاً "secret" است، بهتر است در runtimeConfig (private) باشد
      // و در کلاینت استفاده نشود.
      authSecretKey: process.env.AUTH_SECRET_KEY,
    },
  },

  nitro: {
    // برای dev: درخواست‌های /api را به بک‌اند پروکسی می‌کند
    devProxy: {
      "/api": {
        target: "https://ip3.ir/dictionary/api/v1",
        changeOrigin: true,
        prependPath: true,
      },
    },

    // برای production (روی سرور): روت‌های /api را پروکسی می‌کند
    routeRules: {
      "/api/**": {
        proxy: "https://ip3.ir/dictionary/api/v1/**",
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
