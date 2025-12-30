<template>
  <div class="overflow-x-hidden">
    <div class="w-full flex flex-col items-center justify-center gap-8 mt-12 md:mt-24 mb-16 md:mb-32 px-4">
      <div class="flex flex-col items-center justify-center gap-1 text-center">
        <div class="font-zain font-black text-2xl md:text-4xl leading-tight md:leading-[70px] text-[#7FB77E]">
          دنبال واژه نباش، دنبال معنا باش
        </div>

        <div class="font-zain font-normal text-lg md:text-xl leading-relaxed md:leading-10 text-[#5A6E5A] max-w-2xl">
          با جستجوی هر واژه، می‌توانید معنای دقیق، تلفظ و کاربرد آن را ببینید.
        </div>
      </div>

      <div class="flex flex-col items-center justify-center gap-5 w-full">
        <main-page-search :source_language="sourceLang" :target_language="targetLang" />

        <div dir="rtl"
          class="flex p-5 flex-row w-full max-w-[90%] md:w-[40%] items-center justify-between   md:p-[12px_25px] gap-2 md:gap-5 bg-[rgba(245,246,244,0.2)] border border-[#7FB77E] shadow-[0_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-[40px] box-border">
          <custom-select :required="false" v-model="sourceLang" :options="options" class="flex-1" />
          <icons-displacement @click="swapLanguages()"   class=" w-8 h-8 flex-shrink-0 cursor-pointer" />
          <custom-select :required="false" v-model="targetLang" :options="options" class="flex-1" />
        </div>
      </div>
    </div>

    <hr class="w-full border-t border-gray-100" />

    <div
      class="relative w-full md:max-w-[calc(100%-50px)] min-h-[450px] md:h-[550px] bg-[#7FB77E] shadow-[5px_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-none md:rounded-[0_30px_30px_0] flex flex-col items-center md:items-end justify-center p-8 md:p-[50px] box-border overflow-hidden md:overflow-visible">

      <h2
        class="font-zain font-black text-2xl md:text-3xl leading-snug md:leading-[55px] text-white text-center md:text-right max-w-[655px] z-10">
        جایی که کلمات فقط معنی نمی‌گیرن، بلکه معنا می‌سازن.
      </h2>

      <p
        class="mt-6 md:mt-8 flex flex-col items-center md:items-end justify-center font-zain font-normal text-lg md:text-xl leading-relaxed md:leading-9 text-white text-center md:text-right max-w-[690px] z-10">
        <span>ما یک دیکشنری آنلاین هستیم</span>
        <span>که تلاش می‌کنیم هر واژه را نه‌فقط ترجمه، بلکه با معنی، کاربرد و درک واقعی آن به شما ارائه دهیم.</span>
        <span>هدف ما این است که جستجوی یک کلمه، به فهم عمیق‌تری از زبان تبدیل شود.</span>
      </p>

      <div
        class="absolute top-[20px] left-[-100px] md:left-[50px] w-[300px] md:w-[450px] h-[500px] md:h-[650px] bg-white/10 backdrop-blur-sm rounded-[300px] border border-white/20 lens-inner opacity-50 md:opacity-100">
      </div>
    </div>

    <div class="w-full flex   md:flex-row justify-center items-center gap-8 md:gap-10 px-6 py-10 md:px-[100px]">
      <div class="flex flex-col items-center justify-center">
        <div class="font-zain font-black text-3xl md:text-4xl text-[#7FB77E]">32K+</div>
        <div class="font-zain font-black text-xl md:text-2xl text-[#7FB77E]">واژگان</div>
      </div>
      <div class="hidden md:block w-[2px] h-[70px] bg-[#DADDD8] rounded-full"></div>

      <div class="flex flex-col items-center justify-center">
        <div class="font-zain font-black text-3xl md:text-4xl text-[#7FB77E]">324+</div>
        <div class="font-zain font-black text-xl md:text-2xl text-[#7FB77E]">بازدید</div>
      </div>
      <div class="hidden md:block w-[2px] h-[70px] bg-[#DADDD8] rounded-full"></div>

      <div class="flex flex-col justify-center items-center">
        <div class="font-zain font-black text-3xl md:text-4xl text-[#7FB77E]">12+</div>
        <div class="font-zain font-black text-xl md:text-2xl text-[#7FB77E]">زبان‌ها</div>
      </div>
    </div>

    <hr class="w-full border-t border-gray-100" />

    <div
      class="w-full flex flex-col md:flex-row flex-wrap justify-center items-start gap-12 md:gap-20 mt-16 mb-20 px-6">
      <div class="flex flex-col items-center md:items-end gap-4 max-w-full md:max-w-xs text-center md:text-right">
        <icons-advanced-search class="w-10 h-10 text-[#7FB77E]" />
        <h3 class="font-zain font-extrabold text-xl text-[#7FB77E]">جست‌وجوی هوشمند</h3>
        <p class="font-zain font-normal text-base text-[#5A6E5A] leading-7">با چند حرف اول، پیشنهادهای دقیق و مرتبط
          بگیر.</p>
      </div>

      <div class="flex flex-col items-center md:items-end gap-4 max-w-full md:max-w-xs text-center md:text-right">
        <icons-notebook class="w-10 h-10 text-[#7FB77E]" />
        <h3 class="font-zain font-extrabold text-xl text-[#7FB77E]">یادگیری در کنار ترجمه</h3>
        <p class="font-zain font-normal text-base text-[#5A6E5A] leading-7">با هر جست‌وجو، مترادف و کاربرد واقعی واژه را
          یاد بگیر.</p>
      </div>

      <div class="flex flex-col items-center md:items-end gap-4 max-w-full md:max-w-xs text-center md:text-right">
        <icons-lightning class="w-10 h-10 text-[#7FB77E]" />
        <h3 class="font-zain font-extrabold text-xl text-[#7FB77E]">رابط کاربری سریع</h3>
        <p class="font-zain font-normal text-base text-[#5A6E5A] leading-7">طوری طراحی شده که بدون حواس‌پرتی فقط دنبال
          معنی باشی.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import mainPageSearch from "~/components/mainPageSearch.vue";
import useFetchLanguages from "~/composables/useFetchLanguages";
import customSelect from "~/components/customSelect.vue";
import { useAuthToken } from '~/composables/useAuthCrypto'
definePageMeta({
  layout: "main-page",
});
const { token: AUTH_TOKEN } = useAuthToken()
const {
  loading: langLoading,
  responseData: languageData,
  fetchLanguages,
} = useFetchLanguages();
const options = ref([]);
const loadLang = async () => {
  await fetchLanguages(AUTH_TOKEN.value);
  languageData?.value.data.forEach((lang) => {
    const obg = {};
    obg.label = lang.name;
    obg.value = lang.id;
    options.value.push(obg);
  });
};
loadLang()
const targetLang = ref(2)
const sourceLang = ref(1)
const swapLanguages = () => {
  const temp = sourceLang.value;
  sourceLang.value = targetLang.value;
  targetLang.value = temp;
};
</script>

<style>
.lens-inner {
  background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 80%);
  /* جلوه گودی */
  box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.15),
    /* سایه داخل */
    0 7px 15px -6px rgba(92, 99, 105, 0.25);
  /* سایه بیرونی */
  backdrop-filter: none;
  /* بدون تار کردن محتوا */
  --tw-backdrop-blur: blur(2px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.lens-inner2 {
  background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 80%);
  /* جلوه گودی */
  box-shadow: inset 0 2px 15px rgba(0, 0, 0, 0.15),
    /* سایه داخل */
    0 7px 15px -6px rgba(92, 99, 105, 0.25);
  /* سایه بیرونی */
  backdrop-filter: none;
  /* بدون تار کردن محتوا */
  --tw-backdrop-blur: blur(2px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
</style>
