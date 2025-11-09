// /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/composables/useUpdateWord.js
import axios from "axios";
import { ref } from "vue";


const useUpdateWord = () => {
  const responseData = ref(null);  
  const loading = ref(false);     
  const err = ref(false);         
  const errMessage = ref("");     
  const success = ref(false);     


  const updateWord = async (token, wordId, payload) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

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
    updateWord,
  };
};

export default useUpdateWord;