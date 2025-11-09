// /home/hamyar/Desktop/test/maktabyar/src/composable/useDeleteWord.js
import axios from "axios";
import { ref } from "vue";

const useDeleteWord = () => {
  const loading = ref(false);    
  const err = ref(false);         
  const errMessage = ref("");    
  const success = ref(false);    

  const deleteWord = async (token, wordId) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";

    const apiUrl = `https://ip3.ir/dictionary/api/v1/words/${wordId}`;

    try {
      const response = await axios.delete( 
        apiUrl,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      success.value = true;
      return response.data; 
      
    } catch (error) {
      console.error("خطا در حذف واژه:", error);
      err.value = true;
      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در حذف واژه";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      errMessage.value = message;
      // پرتاب خطا برای مدیریت توسط کامپوننت
      throw new Error(message); 
      
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    err,
    errMessage,
    success,
    deleteWord,
  };
};

export default useDeleteWord;