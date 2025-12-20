<template>
    <div dir="rtl" class="bg-[#F5F6F4] w-full p-8 rounded-[55px]">
        <div class="flex justify-between items-center gap-3">
            <div class="flex items-center gap-3">
                <div class="flex  items-center">
                    <p class="ml-3">گزارش توسط: </p>
                    <img :src="photo" class="w-12 ml-2 h-12 rounded-full" alt="profile" />
                    <p class="text-xs md:text-base font-semibold">
                        {{ reportData.user.first_name }} {{ reportData.user.last_name }}
                    </p>
                </div>
                <div class="flex  items-center">
                    <p class="ml-3">گزارش شده: </p>
                    <img :src="photo" class="w-12 ml-2 h-12 rounded-full" alt="profile" />
                    <p class="text-xs md:text-base font-semibold">
                        {{ reportData?.comment?.user?.first_name }} {{ reportData?.comment?.user?.last_name }}
                    </p>
                </div>
            </div>
            <p class="text-[#5C636980]">{{ reportData.created_at }}</p>
        </div>
        <div class="mt-5">
            <p>علت: <span class="font-semibold">{{ selectedText }}</span></p>
        </div>
        <div class="mt-5">
            <p>لغت: <span class="text-[#7FB77E]">{{ reportData?.comment?.word?.word }}</span></p>
        </div>
        <div class="mt-3">لغت نامه: <span class="text-[#7FB77E]">{{ reportData?.comment?.word?.dictionary?.name }}</span></div>
        <div class="mt-5">
            <h3>نظر:</h3>
            <p class="mt-3 text-sm">{{ reportData?.comment?.body }}
            </p>
        </div>
        <div class="mt-5" v-if="reportData?.description">
            <h3>توضیحات:</h3>
            <p class="mt-3 text-sm">{{ reportData?.description }}
            </p>
        </div>
        <div class="mt-5 flex gap-2">
            <div class="  cursor-pointer  text-[#7FB77E] bg-[#7FB77E33] px-5 py-2 rounded-full" @click="approve(reportData.id, 'approve')">
                تایید
            </div>
            <div style="background-color: #e5737333; color:#E57373" @click="reject(reportData.id, 'reject')"
                class=" cursor-pointer  text-[#E57373] py-2 px-5 flex items-center rounded-full">
                رد
            </div>
        </div>
        <loading-animation v-if="loading" />
    </div>
</template>
<script setup>
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
import useEvaluateDashboardItem from '~/composables/useEvaluateDashboardItem';
import {useAuthToken} from '~/composables/useAuthCrypto' 
import loadingAnimation from "../loadingAnimation.vue";
const prop = defineProps({
    reportData: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['send'])
const {isLoggedIn, token: AUTH_TOKEN} = useAuthToken()
const {loading, evaluateItem} = useEvaluateDashboardItem()
const reportItems = [
    { id: 1, text: "واژه توهین‌آمیز یا نامناسب" },
    { id: 2, text: "محتوای قومیتی، نژادی یا تبعیض‌آمیز" },
    { id: 3, text: "محتوای سیاسی یا مغایر با قوانین" },
    { id: 4, text: "اطلاعات نادرست یا گمراه‌کننده" },
    { id: 5, text: "تهدید یا توهین مستقیم به کاربر دیگر" },
    { id: 6, text: "تبلیغاتی یا اسپم" },
    { id: 7, text: "سایر موارد" },
];
const selectedText = computed(() => {
    const data = prop.reportData?.reason
    const found = reportItems.find(item => item.id === data);
    return found ? found.text : 'موردی یافت نشد';
});
const approve = async (id, status) => {
    try { 
        if (AUTH_TOKEN.value && isLoggedIn.value) {
            await evaluateItem(AUTH_TOKEN.value, id, status, 'comment-reports')
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
        if (AUTH_TOKEN.value && isLoggedIn.value) {
            await evaluateItem(AUTH_TOKEN.value, id, status, 'comment-reports')
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