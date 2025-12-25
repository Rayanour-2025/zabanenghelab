// /home/hamyar/Desktop/test/maktabyar/src/composable/useDeleteWord.js
import axios from "axios";
import { ref } from "vue";
import { useToast } from 'vue-toastification'
const toast = useToast()
const useDeleteDictionary = () => {
  const loading = ref(false);
  const err = ref(false);
  const errMessage = ref("");
  const success = ref(false);

  const deleteDictionary = async (token, dicId) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";

    const apiUrl = `https://ip3.ir/dictionary/api/v1/dictionaries/${dicId}`;

    try {
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      success.value = true;
      toast.success(response.message)
      return response.data;
    } catch (error) {
      console.error("خطا در حذف واژه:", error);
      err.value = true;
      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در حذف لغت نامه";

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
    loading,
    err,
    errMessage,
    success,
    deleteDictionary,
  };
};

export default useDeleteDictionary;
