// /home/hamyar/Desktop/test/maktabyar/src/composable/useCreateWord.js
import axios from "axios";
import { ref } from "vue";

const useCreateWord = () => {
  const responseData = ref(null); 
  const loading = ref(false);    
  const err = ref(false);         
  const errMessage = ref("");    
  const success = ref(false);    

  const createWord = async (token, payload, contentType = "application/json") => { // پذیرش contentType
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;
    const apiUrl = 'https://ip3.ir/dictionary/api/v1/words';
    try {
        
        let headers = {
            Authorization: `Bearer ${token}`,
        };
        // اگر contentType برابر با multipart/form-data بود، نباید Content-Type را تنظیم کنیم.
        // Axios خودش با توجه به FormData، Content-Type مناسب را با boundary تنظیم می‌کند.
        if (contentType === "application/json") {
            headers["Content-Type"] = "application/json";
        } else {
            // اگر FormData باشد، Content-Type را حذف می‌کنیم تا مرورگر آن را مدیریت کند.
            // در Axios تنظیم Content-Type: multipart/form-data برای FormData مشکل ایجاد می‌کند.
            // لذا فقط Authorization را می‌فرستیم.
        }
        const response = await axios.post(
            apiUrl,
            payload,
            {
                headers: headers,
            }
        );
        // ... (بقیه منطق)
        return response.data;
    } catch (error) {
      console.log(error)
      err.value = true;
      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در ایجاد واژه جدید";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      errMessage.value = message;
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
    createWord,
  };
};

export default useCreateWord;