<template>
    <div dir="rtl" class="bg-[#F5F6F4] w-full md:p-8 p-4  rounded-[55px]">
        <div class="flex items-center gap-3">
            <img :src="photo" class="md:w-12 w-8 md:h-12 h-8 rounded-full" alt="profile" />
            <p class="text-xs md:text-base">
                {{ reportData?.user?.username }}-
                <span class="text-[#5C636980]"> {{ reportData?.created_at }}</span>
            </p>
        </div>
        <div class="md:mt-5 mt-2 text-xs md:text-base">
            <p>علت: <span class="font-semibold">{{ selectedText }}</span></p>
        </div>
        <div class="md:mt-5 mt-2">
            <p class="  text-xs md:text-base">لغت: <span class="text-[#7FB77E]">{{ reportData?.word?.word }}</span></p>
        </div>
        <div class="md:mt-3 mt-2 text-xs md:text-base">لغت نامه: <span class="text-[#7FB77E]">{{
            reportData?.word?.dictionary?.name }}</span></div>
        <div class="md:mt-5 mt-2 text-xs md:text-base">
            <h3>توضیحات:</h3>
            <p class="mt-3 md:text-sm text-[10px]">{{ reportData?.description }}
            </p>
        </div>
        <div class="md:mt-5 mt-2 flex gap-2">
            <div @click="reject(reportData?.id, 'reject')" style="background-color: #e5737333"
                class="flex items-center gap-2 p-3 rounded-full">
                <red-trash width="22" height="22" />
            </div>
            <div @click="approve(reportData?.id, 'approve')"
                class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
                <tick width="22" height="22" />
            </div>
        </div>
        <loading-animation v-if="loading" />
    </div>
</template>
<script setup>
import loadingAnimation from "~/components/loadingAnimation.vue";
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
import plus from "~/components/icons/plus.vue";
import { computed } from 'vue'
import redTrash from "~/components/icons/redTrash.vue";
import tick from "~/components/icons/tick.vue";
import useEvaluateDashboardItem from '~/composables/useEvaluateDashboardItem';
import { useAuthToken } from '~/composables/useAuthCrypto'
const { token: AUTH_TOKEN, isLoggedIn } = useAuthToken()
const props = defineProps({
    reportData: {
        required: true,
        type: Object
    }
})
const emit = defineEmits(['send'])
const { evaluateItem, loading } = useEvaluateDashboardItem()
const reportItems = [
    { id: 1, text: "معنی یا ترجمه نادرست" },
    { id: 2, text: "اطلاعات ناقص یا گمراه‌کننده" },
    { id: 3, text: "غلط املایی یا نگارشی" },
    { id: 4, text: "واژه وجود خارجی ندارد" },
    { id: 5, text: "سایر موارد" },
];
const selectedText = computed(() => {
    const data = props.reportData?.reason
    const found = reportItems.find(item => item.id === data);
    return found ? found.text : 'موردی یافت نشد';
});
const approve = async (id, status) => {
    try {
        console.log("Token:", AUTH_TOKEN.value); // چک کنید توکن خالی نباشد
        console.log("ID:", id);
        if (AUTH_TOKEN.value && isLoggedIn.value) {
            await evaluateItem(AUTH_TOKEN.value, id, status, 'word-reports')
        } else {
            console.warn("User is not logged in or token is missing");
        }
        emit('send', true)
    } catch (error) {
        console.error("Error in approve function:", error);
        emit('send', true)
    }
}
const reject = async (id, status) => {
    try {
        console.log("Token:", AUTH_TOKEN.value); // چک کنید توکن خالی نباشد
        console.log("ID:", id);
        if (AUTH_TOKEN.value && isLoggedIn.value) {
            await evaluateItem(AUTH_TOKEN.value, id, status, 'word-reports')
        } else {
            console.warn("User is not logged in or token is missing");
        }
        emit('send', true)
    } catch (error) {
        console.error("Error in approve function:", error);
        emit('send', true)
    }
}
</script>