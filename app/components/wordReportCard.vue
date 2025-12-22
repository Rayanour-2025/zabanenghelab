<template>
    <reportcard>
        <div @click.stop class="md:w-1/4 w-full h-auto p-7 rounded-[64px] bg-white flex flex-col justify-between">
            <h3 class="mb-6 font-bold">گزارش</h3>
            <p class="text-xs">لطفاً دلیل گزارش این واژه را انتخاب کنید.</p>
            <p class="text-xs mb-6">تیم پشتیبانی پس از بررسی، در صورت لزوم اقدام خواهد کرد.</p>

            <div class="flex flex-col mb-6 gap-7">
                <base-check-box v-for="(item) in reportItems" :key="item.id" :index="item.id" :label="item.text"
                    @update:selectedValue="handleSelection" />
            </div>

            <div v-if="showInput" class="w-full">
                <textarea v-model="description" name="reason" id="reason" placeholder="علت گزارش را توضیح دهید" rows="6"
                    class="p-4 w-full rounded-[20px] text-xs outline-none border border-[#DADDD8]">
                </textarea>
            </div>

            <div class="w-full">
                <button class="text-center w-full py-2 rounded-[100px] bg-[#7FB77E] text-white disabled:bg-gray-400"
                    @click="submitReport" :disabled="!selectedReportId">
                    <div dir="rtl" v-if="isSubmiting" class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-4 w-4 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <span>...درحال ارسال</span>
                    </div>
                    <div v-if="!isSubmiting">تایید</div>
                </button>
            </div>
        </div>
    </reportcard>
</template>

<script setup>
import { useAuthToken } from "~/composables/useAuthCrypto";
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification/dist/index.mjs";
import Cookies from 'js-cookie'
const emit = defineEmits(['closeCard']);
const props = defineProps({
    wordId: {
        required: true
    }
})
const isSubmiting = ref(false)
const { token: AUTH_TOKEN } = useAuthToken()
const selectedReportId = ref(null);
const description = ref("");
const showInput = ref(false);

const reportItems = [
    { id: 1, text: "معنی یا ترجمه نادرست" },
    { id: 2, text: "اطلاعات ناقص یا گمراه‌کننده" },
    { id: 3, text: "غلط املایی یا نگارشی" },
    { id: 4, text: "واژه وجود خارجی ندارد" },
    { id: 5, text: "سایر موارد" },
];

const handleSelection = (index) => {
    const idx = Number(index);
    const item = reportItems[idx];
    if (item) {
        selectedReportId.value = item.id;
        if (item.id) {
            showInput.value = true;
        }
    }
};
const toast = useToast()
const url = `https://ip3.ir/dictionary/api/v1/words/${props.wordId}/reports`
const submitReport = async () => {
    if (!selectedReportId.value) return;

    if (!AUTH_TOKEN) return toast.error("ابتدا وارد شوید");

    const bodyData = {
        reason: selectedReportId.value,
        description: description.value
    };
    console.log(bodyData)
    try {
        isSubmiting.value = true
        const res = await $fetch(url, {
            method: 'POST',
            body: bodyData,
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN.value}`,
            }
        });
        toast.success(res.value.message || 'گزارش با موفقیت ثبت شد.')
        emit('closeCard', false);

    } catch (error) {
        console.error(error);
        toast.error(error.data?.message || 'خطایی رخ داد');
    } finally {
        isSubmiting.value = false
    }
};
</script>