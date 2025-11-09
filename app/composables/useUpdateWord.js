// /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/composables/useUpdateWord.js
import axios from "axios";
import { ref } from "vue";

/**
 * به‌روزرسانی اطلاعات یک واژه موجود
 * @returns {Object} reactive states & methods
 */
const useUpdateWord = () => {
  const responseData = ref(null);  // پاسخ کامل سرور
  const loading = ref(false);      // وضعیت بارگذاری
  const err = ref(false);          // آیا خطا رخ داده؟
  const errMessage = ref("");      // پیام خطا
  const success = ref(false);      // آیا عملیات موفق بود؟

  /**
   * به‌روزرسانی یک واژه خاص
   * @param {string} token - توکن احراز هویت کاربر
   * @param {number} wordId - شناسه واژه (مثلاً 2)
   * @param {object} payload - داده‌های جدید برای به‌روزرسانی (شامل word، meaning، synonyms و غیره)
   */
  const updateWord = async (token, wordId, payload) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    // آدرس API برای PUT (به‌روزرسانی واژه)
    // توجه: شناسه واژه (wordId) در مسیر URL قرار می‌گیرد.
    const apiUrl = `https://ip3.ir/dictionary/api/v1/words/${wordId}`;

    try {
      const response = await axios.put(
        apiUrl,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
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
        "خطا در به‌روزرسانی واژه";

      if (typeof message === "object") {
        // اگر پیام خطا یک شیء (مثلاً شامل خطاهای اعتبارسنجی) باشد، آن را تبدیل به رشته می‌کنیم
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
    updateWord,
  };
};

export default useUpdateWord;