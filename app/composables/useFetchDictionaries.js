// composable/useFetchDictionaries.js
import axios from "axios";
import { ref } from "vue";

/**
 * واکشی فهرست لغت‌نامه‌ها
 * @returns {Object} reactive states & methods
 */
const useFetchDictionaries = () => {
  const responseData = ref(null);  // پاسخ کامل سرور
  const loading = ref(false);      // وضعیت بارگذاری
  const err = ref(false);          // آیا خطا رخ داده؟
  const errMessage = ref("");      // پیام خطا
  const success = ref(false);      // آیا عملیات موفق بود؟

  /**
   * واکشی فهرست لغت‌نامه‌ها
   * @param {string} token - توکن احراز هویت کاربر (اختیاری)
   */
  const fetchDictionaries = async (token = null) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    // تنظیم هدرها، توکن در صورت وجود اضافه می‌شود
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await axios.get(
        `https://ip3.ir/dictionary/api/v1/dictionaries`,
        { headers }
      );

      responseData.value = response.data;
      success.value = true;
      return response.data;
    } catch (error) {
      err.value = true;
      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در واکشی لغت‌نامه‌ها";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      errMessage.value = message;
      // پرتاب یک خطا برای مدیریت آن توسط کامپوننت فراخواننده
      throw new Error(message);
    } finally {
      loading.value = false;
    }
  };

  return {
    responseData,
    loading,
    err,
    errMessage,
    success,
    fetchDictionaries,
  };
};

export default useFetchDictionaries;