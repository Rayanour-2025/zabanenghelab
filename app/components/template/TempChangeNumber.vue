<template>
    <div
        class="md:w-1/3 w-full h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
        <h4 class="text-2xl mb-4">اطلاعات تماس</h4>
        <div class="flex flex-col gap-6">
            <div class="flex gap-y-3 flex-col">
                <label for="phone_namber" class=" text-[#5C636980]">شماره همراه:</label>
                <input v-model="contact.mobile" type="text" name="phone_nambe" id="phone_namber"
                    placeholder="شماره همراه" class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div class="flex gap-y-3 flex-col">
                <label for="email" class=" text-[#5C636980]">ایمیل / پست الکترونیکی:</label>
                <input v-model="contact.email" type="text" name="email" id="email" placeholder="ایمیل"
                    class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div>
                <base-button>
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
                        <span class="text-white">...درحال ارسال</span>
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
const prop = defineProps({
    email: {
        required: false,
        type: String
    },
    phone_number: {
        type: [String, Number],
        required: false
    }
})
const contact = ref({
    _method: 'PUT',
    email: prop?.email,
    mobile: prop?.phone_number
})
const sendData = async () => {
    if (!contact.value.email || !contact.value.mobile) {
        toast.error('فیلد ها را پر کنید')
        return
    }
    try {
        await sendPersonal(AUTH_TOKEN.value, 'password', contact.value)
    } catch (error) {

    }
}
</script>