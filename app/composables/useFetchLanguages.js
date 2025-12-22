// composable/useFetchDictionaries.js
import axios from "axios";
import { ref } from "vue";

const useFetchLanguages = () => {
  const responseData = ref(null);
  const loading = ref(false);    
  const err = ref(false);        
  const errMessage = ref("");     
  const success = ref(false);   

  const fetchLanguages = async (token = null) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await axios.get(
        `https://ip3.ir/dictionary/api/v1/languages`,
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
        "خطا در واکشی زبان ها";

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
    fetchLanguages,
  };
};

export default useFetchLanguages;