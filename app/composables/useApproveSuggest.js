// /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/composables/useUpdateWord.js
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
const useApproveSuggest = () => {
  const responseData = ref(null);
  const loading = ref(false);
  const err = ref(false);
  const errMessage = ref("");
  const success = ref(false);

  const approveSuggest = async (token, id) => {
    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null; 
    const apiUrl = `https://ip3.ir/dictionary/api/v1/questions/${id}/approve`;

    try {
      const response = await axios.post(apiUrl, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      responseData.value = response.data;
      success.value = true;
      toast.success(responseData.value.message);
      return response.data;
    } catch (error) {
      console.log(error);
      err.value = true;
      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در به‌روزرسانی واژه";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }
      toast.error(message);
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
    approveSuggest,
  };
};

export default useApproveSuggest;
