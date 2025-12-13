export default {
  content: {
    files: [
      "~/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "~/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "~/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "~/plugins/**/*.{js,ts,mjs}",
      "~/composables/**/*.{js,ts,mjs}",
      "~/utils/**/*.{js,ts,mjs}",
      "~/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "~/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "~/app.config.{js,ts,mjs}",
      "~/app/spa-loading-template.html",
    ],
  },
  theme: {
    screens: {
      "max-sm": { max: "639px" },
      "max-md": { max: "767px" },
      "max-lg": { max: "1023px" },
      "max-xl": { max: "1279px" },
      sm: "640px", // تبلت
      md: "767px", // متوسط
      lg: "1024px", // لپ‌تاپ
      xl: "1280px", // مانیتور بزرگ
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        zain: ["Zain-Regular", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
