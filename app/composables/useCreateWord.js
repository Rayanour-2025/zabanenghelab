// /home/hamyar/Desktop/test/maktabyar/src/composable/useCreateWord.js
import axios from "axios";
import { ref } from "vue";

const useCreateWord = () => {
  const responseData = ref(null); 
  const loading = ref(false);    
  const err = ref(false);         
  const errMessage = ref("");    
  const success = ref(false);    

  // 💡 payload اکنون می تواند FormData یا آبجکت JSON باشد
  const createWord = async (token, payload) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    console.log(payload)
    const apiUrl = 'https://ip3.ir/dictionary/api/v1/words';

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(
        apiUrl,
        payload,
        {
          headers: headers,
        }
      );

      axios.defaults.withCredentials = false ;

      responseData.value = response.data;
      success.value = true;
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