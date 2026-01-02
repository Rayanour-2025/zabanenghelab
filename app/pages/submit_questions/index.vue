<template>
    <div class="px-10 mx-auto container" dir="rtl">
        <h2 class="text-[#7FB77E] w-full font-bold md:font-extrabold md:text-4xl text-2xl mb-4">پرسش ها</h2>
        <p class="text-[#5C636980] mb-10 text-sm md:text-base ">به پرسش ‌ها براساس تعداد و اولویت رسیدگی خواهد شد.</p>
        <div class="flex gap-x-10 flex-col md:flex-row w-full">
            <div class="md:w-1/2 w-full">
                <div
                    class="h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
                    <div class="flex flex-col gap-6">
                        <div class="flex gap-y-3 flex-col">
                            <label class="font-medium text-xl">نوع پرسش:</label>
                            <custom-select :options="Qtypes" v-model="selectedQType" />
                        </div>
                        <div v-if="selectedQType == 5" class="flex gap-y-3 flex-col">
                            <label class="font-medium text-xl">زبان:</label>
                            <custom-select :options="options" v-model="selectedLang" />
                        </div>
                        <div v-if="selectedQType == 5" class="flex gap-y-3 flex-col">
                            <label for="question_type" class="font-medium text-xl">کلمه:</label>
                            <input v-model="word" type="text" name="question_type" id="question_type"
                                placeholder="کلمه را وارد کنید"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-6 flex-col">
                            <label for="descritption" class="font-medium text-xl">توضیحات:</label>
                            <textarea v-model="description" name="descritption" id="descritption" rows="8"
                                placeholder="لینک / توضیحات..."
                                class="outline-none text-sm border p-3 rounded-2xl border-[#7FB77E]"></textarea>
                        </div>
                        <div class="w-full">
                            <base-button @click="sendData" class="w-full"><span class="text-white" v-if="!qLoading">
                                    ثبت تغییرات
                                </span>
                                <div v-if="qLoading" class="flex items-center justify-center gap-2">
                                    <svg class="animate-spin h-5 w-5 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4">
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
            </div>
            <div class="mt-10 md:w-1/2 w-full">
                <h4 class=" flex items-center text-[#5C636980] justify-center mb-5 font-semibold text-3xl">پرسش های من
                </h4>
                <div class=" flex flex-col">
                    <div v-for="question in data?.slice(0, 4)" :key="question.id">
                        <div
                            class="bg-[#F0F1EE] shadow-[0px_5px_10px_-6px_#8B968B40] py-6 px-6 rounded-3xl flex flex-col gap-y-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-x-4">
                                    <img class="rounded-full w-10 h-10" :src="photo" alt="profile" />
                                    <h4 class="text-xs md:text-sm">{{ question?.user?.first_name }} {{
                                        question?.user?.last_name }}</h4>
                                </div>
                                <div>
                                    <p class=" text-xs md:text-sm text-[#5C636980]">{{ question?.created_at }}</p>
                                </div>
                            </div>
                            <div>
                                <p class="md:text-sm text-xs font-normal">{{ question?.description }}
                                </p>
                            </div>
                        </div>

                        <div class="py-6 px-6 rounded-3xl flex flex-col gap-y-4">
                            <div class="flex" v-if="question?.answer">
                                <div class="flex items-center gap-x-4">
                                    <img class="rounded-full w-10 h-10" :src="photo" alt="profile" />
                                    <h4 class="text-xs md:text-sm">{{ question?.answer?.admin?.username }} </h4>
                                </div>
                            </div>
                            <div>
                                <p class="md:text-sm text-xs font-normal">
                                    {{ question?.answer?.body ? question.answer.body : 'در انتظار پاسخ' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <loading-animation v-if="loading || langLoading" />
        </div>
    </div>
</template>
<script setup>
import BaseButton from "~/components/ui/BaseButton.vue";
import customSelect from "~/components/customSelect.vue";
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
import { useAuthToken } from '~/composables/useAuthCrypto'
import useFetchLanguages from '~/composables/useFetchLanguages'
import { useSendQuestion } from "#imports";
import loadingAnimation from "~/components/loadingAnimation.vue";
import useFetchQuestions from '~/composables/useFetchQuestions'
const Qtypes = ref([
    { value: 4, label: 'سایر' },
    { value: 2, label: 'مشکل فنی' },
    { value: 1, label: 'گزارش مشکل' },
    { value: 3, label: 'حساب کاربری' },
    { value: 5, label: 'پیشنهاد لغت' },
])
const { fetchQuestions, loading, responseData } = useFetchQuestions()
const { loading: qLoading, sendQuestion } = useSendQuestion()
const { token: AUTH_TOKEN, isLoggedIn } = useAuthToken()
const { responseData: lang, fetchLanguages, loading: langLoading } = useFetchLanguages()
const selectedQType = ref(1)
const word = ref('')
const data = ref()
const selectedLang = ref(1)
const description = ref('')
const options = ref([]);
const loadLang = async () => {
    await fetchLanguages(AUTH_TOKEN.value);
    lang?.value.data.forEach((lang) => {
        const obg = {};
        obg.label = lang.name;
        obg.value = lang.id;
        options.value.push(obg);
    });
    await fetchQuestions(AUTH_TOKEN.value)
    data.value = responseData.value.data
    console.log(data.value)
};
loadLang()
const qObj = ref({})
const sendData = async () => {
    qObj.value.type = selectedQType.value,
        qObj.value.description = description.value;
    if (selectedQType.value == 5) {
        qObj.value.language_id = selectedLang.value
        qObj.value.word = word.value
    }
    try {
        await sendQuestion(AUTH_TOKEN.value, qObj.value)
        qObj.value.description = ''
        delete qObj.value.word
        delete qObj.value.language_id
        qObj.value.type = ''
        selectedLang.value = 1
        selectedQType.value = 1
    } catch (error) {
        console.log(qObj.value)
        qObj.value.description = ''
        delete qObj.value.word
        delete qObj.value.language_id
        qObj.value.type = ''
        selectedLang.value = 1
        description.value = ''
        word.value = ''
        selectedQType.value = 1
    }
}
</script>
