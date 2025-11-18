import axios from "axios";
import { ref } from "vue";
import { navigateTo } from "#app";
import { useAuthStore } from "@/stores/auth"; 

export function useLogin({ toast, generateNewCaptcha, captchaText }) {
  const username = ref("");
  const password = ref("");
  const captchaInput = ref("");

  const loading = ref(false);    
  const err = ref(false);
  const errMessage = ref("");    
  const success = ref(false);      
  const responseData = ref(null); 

  const authStore = useAuthStore();
  
  const login = async () => {
    if (!username.value || !password.value || !captchaInput.value) {
      toast.error("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    if (captchaInput.value.trim() !== captchaText.value.trim()) {
      toast.error("کد امنیتی اشتباه است. لطفاً دوباره تلاش کنید.");
      captchaInput.value = "";
      generateNewCaptcha();
      return;
    }

    loading.value = true;
    err.value = false;
    success.value = false;
    errMessage.value = "";
    responseData.value = null;

    try {
      // const response = await axios.post(`https://ip3.ir/dictionary/api/v1/login`,
      //   {
      //     username: username.value,
      //     password: password.value,
      //   },
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );

      responseData.value = {
    "message": "ورود موفق",
    "status_response": "SUCCESS",
    "token": "78|tRl6nE8gSTtuAd6kwVzQOzzVi3azOvZJPFh0JMD8dacdd5ca",
    "user": {
        "id": 1,
        "username": "admin_1"
    }
};
      success.value = true;
      
      if (responseData.value.status_response === 'SUCCESS' && responseData.value.token) {
          authStore.setLoginData(responseData.value); 
          toast.success("ورود موفقیت‌آمیز بود. در حال هدایت...");
          
          await navigateTo('/words'); 
      } else {
          toast.error("ورود موفق بود، اما ساختار پاسخ سرور صحیح نیست.");
          generateNewCaptcha();
      }
      
      return response.data;
    } catch (error) {
      err.value = true;

      let message =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "خطا در ورود به سیستم";

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      errMessage.value = message;
      toast.error(message);

      captchaInput.value = "";
      generateNewCaptcha();

      throw new Error(message); 
    } finally {
      loading.value = false;
    }
  };

  return {
    username,
    password,
    captchaInput,
    loading,
    err,
    errMessage,
    success,
    responseData,
    login, 
  };
}