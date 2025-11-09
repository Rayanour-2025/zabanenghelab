// /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/composables/useSearchWords.js
import axios from "axios";
import { ref } from "vue";

const useSearchWords = () => {
  const responseData = ref(null); 
  const loading = ref(false);   
  const err = ref(false);        
  const errMessage = ref("");    
  const success = ref(false);      

  const searchWords = async (token, dictionaryId, searchTerm) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

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