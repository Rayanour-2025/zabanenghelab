// composables/useLogin.js
import axios from "axios";
import { ref } from "vue";

/**
 * کامپوسیبل مدیریت لاگین با API واقعی
 * @param {Object} params
 * @param {Function} params.toast - برای نمایش پیام‌ها
 * @param {Function} params.generateNewCaptcha - برای تولید کپچای جدید
 * @param {Ref} params.captchaText - متن کپچا
 */
export function useLogin({ toast, generateNewCaptcha, captchaText }) {
  const username = ref("");
  const password = ref("");
  const captchaInput = ref("");

  const loading = ref(false);      // وضعیت بارگذاری
  const err = ref(false);          // آیا خطا رخ داده؟
  const errMessage = ref("");      // پیام خطا
  const success = ref(false);      // آیا عملیات موفق بود؟
  const responseData = ref(null);  // پاسخ کامل سرور

  /**
   * متد اصلی لاگین
   */
  const login = async () => {
    // بررسی کامل فیلدها
    if (!username.value || !password.value || !captchaInput.value) {
      toast.error("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    // اعتبارسنجی کپچا
    if (captchaInput.value.trim() !== captchaText.value.trim()) {
      toast.error("کد امنیتی اشتباه است. لطفاً دوباره تلاش کنید.");
      captchaInput.value = "";
      generateNewCaptcha();
      return;
    }

    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    try {
      // ارسال درخواست POST با query params
      const response = await axios.post(
        "https://ip3.ir/dictionary/api/v1/login",
        null, // body خالی
        {
          params: {
            username: username.value,
            password: password.value,
          },
          timeout: 10000, // ۱۰ ثانیه تایم‌اوت اختیاری
        }
      );

      responseData.value = response.data;
      success.value = true;
      toast.success("ورود موفقیت‌آمیز بود 🎉");

      return response.data;
    } catch (error: any) {
      err.value = true;

      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در ورود به سیستم";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      errMessage.value = message;
      toast.error(message);

      captchaInput.value = "";
      generateNewCaptcha();

      throw new Error(message);
    } finally {
      loading.value = false;
    }
  };

  return {
    username,
    password,
    captchaInput,
    loading,
    err,
    errMessage,
    success,
    responseData,
    login,
  };
}
