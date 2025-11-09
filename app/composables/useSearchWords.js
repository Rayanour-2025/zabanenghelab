// /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/composables/useSearchWords.js
import axios from "axios";
import { ref } from "vue";

/**
 * جستجوی واژه‌ها در یک لغت‌نامه خاص (Admin Search)
 * @returns {Object} reactive states & methods
 */
const useSearchWords = () => {
  const responseData = ref(null);  // پاسخ کامل سرور
  const loading = ref(false);      // وضعیت بارگذاری
  const err = ref(false);          // آیا خطا رخ داده؟
  const errMessage = ref("");      // پیام خطا
  const success = ref(false);      // آیا عملیات موفق بود؟

  /**
   * جستجوی واژه‌ها
   * @param {string} token - توکن احراز هویت کاربر
   * @param {number} dictionaryId - شناسه لغت‌نامه (مثلاً 1)
   * @param {string} searchTerm - واژه‌ای که باید جستجو شود (مثلاً "سلامتی")
   */
  const searchWords = async (token, dictionaryId, searchTerm) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    // ساخت URL با پارامترهای query
    const apiUrl = 
      `https://ip3.ir/dictionary/api/v1/dictionaries/${dictionaryId}/words/admin-search?word=${searchTerm}`;

    try {
      const response = await axios.get(
        apiUrl,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
        "خطا در جستجوی واژه‌ها";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      errMessage.value = message;
      // پرتاب خطا برای مدیریت توسط کامپوننت فراخواننده
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
    searchWords,
  };
};

export default useSearchWords;