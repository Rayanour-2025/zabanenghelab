<template>
  <div dir="rtl" class="bg-gray-50 relative font-inter min-h-screen text-right">
    <div class="w-full min-h-screen flex items-center justify-center">
      <main class="flex items-center justify-center w-full px-4 md:px-5">
        <div
          class="h-[100dvh] lg:w-[1124px] lg:h-[650px] md:w-[750px] md:h-[550px] flex flex-col md:flex-row-reverse items-center justify-between relative rounded-[60px] md:shadow-xl bg-transparent w-full"
        >
          <!-- سمت چپ تصویر -->
          <div
            class="hidden md:block w-1/2 h-full bg-gradient-to-br from-green-700 to-green-500 rounded-[60px] md:rounded-l-[60px] md:rounded-r-none p-10 relative overflow-hidden"
          ></div>

          <!-- فرم ورود -->
          <div
            class="w-full flex-1 md:h-full md:w-1/2 bg-white rounded-t-[60px] md:rounded-none md:rounded-r-[60px] shadow-top-soft md:shadow-none flex items-center justify-center relative p-4 md:p-0 mt-6 md:mt-0"
          >
            <div
              class="w-[85%] sm:w-[70%] max-w-sm flex flex-col justify-center gap-5 mt-20 md:mt-0 pb-16 md:pb-0"
            >
              <h2 class="text-center text-green-600 text-3xl font-bold lg:text-[64px] md:text-[40px] mt-5 md:mt-16">
                ورود
              </h2>

              <form
                @submit.prevent="login"
                class="flex flex-col items-center gap-6 md:gap-7 lg:gap-7 w-full lg:mt-10"
              >
                <!-- نام کاربری -->
                <div class="relative w-full group">
                  <input
                    id="username"
                    type="text"
                    v-model.trim="username"
                    placeholder="نام کاربری خود را وارد کنید"
                    class="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none text-gray-700 text-sm px-4 py-3 rounded-xl transition-all duration-300 focus:border-green-400"
                  />
                </div>

                <!-- رمز عبور -->
                <div class="relative w-full group">
                  <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    placeholder="رمز عبور"
                    class="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none text-gray-700 text-sm px-4 py-3 rounded-xl transition-all duration-300 focus:border-green-400"
                  />
                </div>

                <!-- کپچا -->
                <div class="flex items-center gap-4 mt-2 self-start md:self-center">
                  <canvas
                    ref="captchaCanvasRef"
                    class="w-44 h-12 border border-gray-300 bg-gray-100 rounded-xl cursor-pointer"
                    width="176"
                    height="48"
                    @click="generateNewCaptcha"
                  ></canvas>

                  <svg
                    @click="generateNewCaptcha"
                    class="w-6 h-6 text-green-600 cursor-pointer transition-transform duration-200 hover:rotate-45"
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

                <!-- ورودی کپچا -->
                <div class="relative w-full group">
                  <input
                    type="text"
                    v-model.trim="captchaInput"
                    placeholder="کد امنیتی را وارد کنید"
                    class="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none text-gray-700 text-sm px-4 py-3 rounded-xl transition-all duration-300 focus:border-green-400"
                  />
                </div>

                <!-- دکمه ورود -->
                <button
                  type="submit"
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
definePageMeta({ layout: false })

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

// ---------- متغیرها ----------
const username = ref('')
const password = ref('')
const captchaInput = ref('')
const currentCaptchaText = ref('')
const captchaHash = ref('')
const loading = ref(false)
const captchaCanvasRef = ref(null)
const router = useRouter()

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY || 'P8#d9!RqV2mW@zX7Lt$sF0CkEyUhJnGb4oM'

// ---------- رمزنگاری ----------
function encryptToken(token) {
  return CryptoJS.AES.encrypt(token, SECRET_KEY).toString()
}

// ---------- تولید کپچا ----------
function generateCaptcha() {
  const chars = '0123456789'
  let text = ''
  for (let i = 0; i < 6; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  currentCaptchaText.value = text
  captchaHash.value = CryptoJS.SHA256(text.toUpperCase()).toString()

  const canvas = captchaCanvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#e0f7fa'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${Math.random().toFixed(2)})`
    ctx.beginPath()
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
    ctx.stroke()
  }

  ctx.font = '24px Arial'
  ctx.fillStyle = '#00796b'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)
}

function generateNewCaptcha() {
  captchaInput.value = ''
  generateCaptcha()
}

// ---------- اعتبارسنجی ----------
function validateInputs() {
  if (username.value.trim().length < 3) {
    Swal.fire('خطا', 'نام کاربری باید حداقل ۳ کاراکتر باشد.', 'error')
    return false
  }
  if (password.value.trim().length < 3) {
    Swal.fire('خطا', 'رمز عبور باید حداقل ۳ کاراکتر باشد.', 'error')
    return false
  }
  return true
}

// ---------- ورود ----------
async function login() {
  if (loading.value) return
  loading.value = true

  if (!validateInputs()) {
    loading.value = false
    return
  }

  // بررسی کپچا
  const inputHash = CryptoJS.SHA256(captchaInput.value.trim().toUpperCase()).toString()
  if (inputHash !== captchaHash.value) {
    Swal.fire('خطا', 'کد امنیتی اشتباه است، دوباره تلاش کنید.', 'error')
    generateNewCaptcha()
    loading.value = false
    return
  }

  try {
    const res = await axios.post('https://ip3.ir/dictionary/api/v1/login', {
      username: username.value.trim(),
      password: password.value.trim(),
    },
    {
      withCredentials: true 
    })

    if (res.data?.token) {
      const token = res.data.token
      const encryptedToken = encryptToken(token)
      Cookies.set('auth-token', encryptedToken, { expires: 0.3, secure: true }) // حدود ۷ ساعت

      sessionStorage.setItem('user-data', JSON.stringify(res.data.user))
      Swal.fire('موفق', 'ورود با موفقیت انجام شد.', 'success')

      // انتقال بر اساس نقش
      const roleName = res.data.user.role?.name
      if (roleName === 'teacher') router.push('/TeacherDashboard')
      else if (roleName === 'nazem') router.push('/NazemDashboard')
      else router.push('/')
    } else {
      Swal.fire('خطا', res.data?.message || 'توکن یافت نشد.', 'error')
    }
  } catch (err) {
    console.log(err)
    Swal.fire('خطا', err?.response?.data?.message || 'خطا در ارتباط با سرور.', 'error')
  } finally {
    generateNewCaptcha()
    loading.value = false
  }
}

// ---------- آغاز ----------
onMounted(() => {
  generateCaptcha()
})
</script>
