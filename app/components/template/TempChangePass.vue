<template>
    <div
        class="md:w-1/3 w-full h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
        <h4 class="text-2xl mb-4">امنیت</h4>
        <div class="flex flex-col gap-6">
            <div class="flex gap-y-3 flex-col">
                <label for="now_pass" class=" text-[#5C636980]">رمز عبور کنونی:</label>
                <input v-model="passObj.current_password" type="password" name="now_pass" id="now_pass"
                    placeholder="رمز عبور کنونی" class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div class="flex gap-y-3 flex-col">
                <label for="new_pass" class=" text-[#5C636980]">رمز عبور جدید:</label>
                <input type="password" v-model="passObj.password" name="new_pass" id="new_pass"
                    placeholder="رمز عبور جدید" class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div class="flex gap-y-3 flex-col">
                <label for="repeat_pass" class=" text-[#5C636980]">تکرار رمز عبور جدید:</label>
                <input type="password" v-model="passObj.confirm_password" name="repeat_pass" id="repeat_pass"
                    placeholder="تکرار رمز عبور جدید" class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div>
                <base-button @click="sendData()" >
                    <span class="text-white" v-if="!loading">
                        ثبت تغییرات
                    </span>
                    <div v-if="loading" class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <span>...درحال ارسال</span>
                    </div>
                </base-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import BaseButton from '~/components/ui/BaseButton.vue';
import { useAuthToken } from '~/composables/useAuthCrypto';
import { useToast } from 'vue-toastification'
import useSendPersonal from '~/composables/useSendPersonal';
const { isLoggedIn, token: AUTH_TOKEN } = useAuthToken()
const { responseData, sendPersonal, loading } = useSendPersonal()
const toast = useToast()
const passObj = ref({
    _method: 'PUT',
    password: '',
    confirm_password: '',
    current_password: ''
})
const sendData = async () => {
    if (!passObj.value.current_password || !passObj.value.password || !passObj.value.password_confirmation) {
        toast.error('فیلد ها را پر کنید')
        return
    }
    try {
        await sendPersonal(AUTH_TOKEN.value, 'password', passObj.value)
    } catch (error) {
        
    }
}
</script>