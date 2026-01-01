<template>
    <div
        class="md:w-1/3 w-full h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
        <h4 class="text-2xl mb-4">مشخصات</h4>
        <div class="flex flex-col gap-6">
            <div class="flex gap-y-3 flex-col">
                <label for="first_name" class=" text-[#5C636980]">نام:</label>
                <input type="text" name="first_name" id="first_name" v-model="personalInfo.first_name" placeholder="نام"
                    class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div class="flex gap-y-3 flex-col">
                <label for="last_name" class=" text-[#5C636980]">نام خانوادگی:</label>
                <input type="text" name="last_name" v-model="personalInfo.last_name" id="last_name"
                    placeholder="نام خانوادگی" class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div class="flex gap-4">
                <div class="text-[#5C636980]">جنسیت:</div>
                <div>
                    <input type="radio" id="man" name="gender" class="peer hidden" />
                    <label for="man" class="cursor-pointer peer-checked:text-red-500">
                        مرد
                    </label>
                </div>

                <div>
                    <input type="radio" id="woman" name="gender" class="peer hidden" />
                    <label for="woman" class="cursor-pointer peer-checked:text-red-500">
                        زن
                    </label>
                </div>

            </div>
            <div class="flex gap-y-3 flex-col">
                <label for="birth" class=" text-[#5C636980]">تاریخ تولد:</label>
                <input type="text" v-model="personalInfo.birth_date" name="birth" id="birth" placeholder="تاریخ تولد"
                    class="outline-none border p-3 rounded-full border-[#7FB77E] ">
            </div>
            <div class="flex gap-y-3 flex-col">
                <label for="about-me" class=" text-[#5C636980]">درباره من:</label>
                <textarea name="about-me" v-model="personalInfo.about_me" id="about-me" rows="4" placeholder="درباره من"
                    class="outline-none text-sm border p-3 rounded-2xl border-[#7FB77E]"></textarea>
            </div>
            <div>
                <base-button @click="sendData">
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
import { useSendPersonal } from '#imports';
import { useToast } from 'vue-toastification'
import { useAuthToken } from '~/composables/useAuthCrypto'
const prop = defineProps({
    lastName: {
        required: false,
        type: [String, Number]
    },
    firstName: {
        required: false,
        type: [String, Number]
    },
    gender: {
        required: false,
        type: [String, Number]
    },
    birthDate: {
        required: false,
        type: [String, Number]
    },
    aboutMe: {
        required: false,
        type: [String, Number]
    },
})
const { token: AUTH_TOKEN, isLoggedIn } = useAuthToken()
const { loading, sendPersonal, responseData } = useSendPersonal()
const toast = useToast()
const personalInfo = ref({
    _method: 'PUT',
    last_name: prop?.lastName,
    first_name: prop?.firstName,
    gender: prop?.gender,
    birth_date: prop?.birthDate,
    about_me: prop?.aboutMe,
})
watch(() => prop, (newProps) => {
    personalInfo.value.last_name = newProps.lastName;
    personalInfo.value.first_name = newProps.firstName;
    personalInfo.value.gender = newProps.gender;
    personalInfo.value.birth_date = newProps.birthDate;
    personalInfo.value.about_me = newProps.aboutMe;
}, { deep: true, immediate: true });
const sendData = async () => {
    try {
        if (AUTH_TOKEN.value && isLoggedIn.value) {
            await sendPersonal(AUTH_TOKEN.value, 'personal-info', personalInfo.value)
        } else {
            toast.error('ابتدا وارد سایت شوید')
            await navigateTo('/login')
            return
        }
    } catch (error) {

    }
}
</script>