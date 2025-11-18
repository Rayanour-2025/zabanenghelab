// /home/hamyar/Desktop/My_Folder/zaban-enghelab/nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-tiptap-editor'], 

  tiptap: {
    lang: 'fa',
    editor: {
    }
  },

  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      title: 'زبان انقلاب',
    },
  },

  runtimeConfig: {
    public: {
      authSecretKey: process.env.AUTH_SECRET_KEY, 
    }
  },

  nitro: {
    devProxy: {
      '/api': {
        target: 'https://ip3.ir/dictionary/api/v1', 
        changeOrigin: true,
        prependPath: true,
      },
    },
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})



