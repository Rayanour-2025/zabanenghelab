<template>
  <div
    dir="rtl"
    :class="`bg-${twColors['bgc-body']} relative font-inter min-h-screen text-right`"
  >
    <div class="w-full min-h-screen flex items-center justify-center">
      <main class="flex items-center justify-center w-full px-4 md:px-5">
        <div
          class="h-[100dvh] lg:w-[1124px] lg:h-[650px] md:w-[750px] md:h-[550px] flex flex-col md:flex-row-reverse items-center justify-between relative rounded-[60px] md:shadow-xl bg-transparent w-full"
        >
          <div
            class="hidden md:block w-1/2 h-full bg-gradient-to-br from-green-700 to-green-500 rounded-[60px] md:rounded-l-[60px] md:rounded-r-none p-10 relative overflow-hidden"
          ></div>

          <div
            style="height: 100%;"
            class="w-full flex-1 md:h-full md:w-1/2 bg-white rounded-t-[60px] md:rounded-none md:rounded-r-[60px] shadow-top-soft md:shadow-none flex items-center justify-center relative p-4 md:p-0 mt-6 md:mt-0"
          >
            <div class="w-[85%] sm:w-[70%] max-w-sm flex flex-col justify-center gap-5 mt-20 md:mt-0 pb-16 md:pb-0">
              <h2
                :class="`text-center text-${twColors.primary} text-3xl font-bold lg:text-[64px] md:text-[40px] mt-5 md:mt-16`"
              >
                ورود
              </h2>

              <form
                @submit.prevent="onLoginClick"
                class="flex flex-col items-center gap-6 md:gap-7 lg:gap-7 w-full lg:mt-10"
              >
                <div class="relative w-full group">
                  <label
                    for="username"
                    :class="`text-${twColors.gray_dark} lg:text-sm md:text-xs font-semibold md:block hidden`"
                  >
                    نام کاربری
                  </label>
                  <input
                    id="username"
                    type="text"
                    v-model.trim="username"
                    placeholder="نام کاربری خود را وارد کنید"
                    :class="`w-full border-b-2 md:border-0.5 md:bg-${twColors['bgc-body']} border-gray-300 bg-transparent focus:outline-none input text-${twColors.gray_light} text-sm px-4 py-3 rounded-xl transition-all duration-300 focus:border-green-400`"
                  />
                  <span
                    class="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-500 group-focus-within:right-0 group-focus-within:w-full md:hidden"
                  ></span>
                </div>

                <div class="relative w-full group">
                  <label
                    for="password"
                    :class="`text-${twColors.gray_dark} lg:text-sm md:text-xs font-semibold md:block hidden`"
                  >
                    رمز عبور
                  </label>
                  <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    placeholder="رمز عبور"
                    :class="`w-full border-b-2 md:border-0.5 md:bg-${twColors['bgc-body']} border-gray-300 bg-transparent focus:outline-none input text-${twColors.gray_light} text-sm px-4 py-3 rounded-xl transition-all duration-300 focus:border-green-400`"
                  />
                  <span
                    class="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-500 group-focus-within:right-0 group-focus-within:w-full md:hidden"
                  ></span>
                </div>

                <div class="flex items-center gap-4 mt-2 self-start md:self-center">
                    <canvas
                        ref="captchaCanvasRef"
                        :class="`w-44 h-12 border border-gray-300 bg-${twColors['bgc-body']} rounded-xl cursor-pointer`"
                        width="176"
                        height="48"
                        @click="generateNewCaptcha" ></canvas>

                    <svg
                        @click="generateNewCaptcha" class="w-6 h-6 text-green-600 cursor-pointer transition-transform duration-200 hover:rotate-45"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M21.5 2v6h-6" />
                        <path d="M2.5 22v-6h6" />
                        <path d="M22 11.5A10 10 0 0 0 3.2 7.2" />
                        <path d="M2 12.5A10 10 0 0 0 20.8 16.8" />
                    </svg>
                </div>

                <div class="relative w-full group">
                  <input
                    type="text"
                    v-model.trim="captchaInput"
                    placeholder="کد امنیتی را وارد کنید"
                    :class="`w-full border-b-2 md:border-0.5 md:bg-${twColors['bgc-body']} border-gray-300 bg-transparent focus:outline-none input text-${twColors.gray_light} text-sm px-4 py-3 rounded-xl transition-all duration-300 focus:border-green-400`"
                  />
                  <span
                    class="absolute bottom-0 right-1/2 w-0 h-0.5 bg-green-500 transition-all duration-500 group-focus-within:right-0 group-focus-within:w-full md:hidden"
                  ></span>
                </div>

                <button
                  type="submit"
                  @click="onLoginClick" 
                  :disabled="loading"
                  class="bg-green-600 w-full md:w-72 lg:w-[365px] h-12 rounded-xl flex items-center justify-center text-white transition-colors duration-200 ease-in hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span v-if="!loading">ورود</span>
                  <svg
                    v-else
                    class="animate-spin w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/pages/login.vue
definePageMeta({ layout: false })
import { useToast } from 'vue-toastification'
// import { useCaptcha } from '@/composables/useCaptcha' 
// import { useLogin } from '@/composables/useLogin' 

const captchaCanvasRef = ref(null) 
const toast = useToast()

const { captchaText, generateCaptcha } = useCaptcha()

const generateNewCaptcha = () => {
  generateCaptcha(captchaCanvasRef)
}

const { username, password, captchaInput, loading, login: onLoginClick } = useLogin({ 
  toast,
  generateNewCaptcha,
  captchaText, 
})

// ۵. تولید کپچا هنگام بارگذاری کامپوننت (فقط در کلاینت)
onMounted(() => {
    // مطمئن می‌شویم که این تابع فقط پس از Mount شدن اجرا می‌شود
    generateNewCaptcha() 
})

// متغیرهای ثابت (اختیاری)
const twColors = {
  primary: 'green-600',
  'bgc-body': 'gray-50',
  gray_dark: 'gray-700',
  gray_light: 'gray-500',
}
</script>