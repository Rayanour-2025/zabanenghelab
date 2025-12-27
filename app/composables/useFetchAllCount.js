// composable/useFetchDictionaries.js
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast()
const useFetchAllCount = () => {
  const responseData = ref(null);
  const loading = ref(false);
  const err = ref(false);
  const errMessage = ref("");
  const success = ref(false);

  const fetchAllCount = async (token,) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null; 
    const headers = {}; 
      headers.Authorization = `Bearer ${token}`;  
    try {
      const response = await axios.get(
        `https://ip3.ir/dictionary/api/v1/admin/dashboard`,
        { headers }
      );

      responseData.value = response.data;
      success.value = true;
      return response.data;
    } catch (error) {
      console.log(error)
      err.value = true;
      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message 

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }
      toast.error(message)
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
    fetchAllCount,
  };
};

export default useFetchAllCount;
