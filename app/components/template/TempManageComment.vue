<template>
    <div dir="rtl" class="bg-[#F5F6F4] p-8 w-full rounded-[55px]">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <img :src="photo" class="w-12 h-12 rounded-full" alt="profile" />
                <p>
                    سعید علوی -
                    <span class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</span>
                </p>
            </div>
            <div class="relative">
                <three-dot class="cursor-pointer" @click="isShowPinBox = true" height="22" width="22" />
                <div @click="pin(comment.id); isShowPinBox = false" v-if="isShowPinBox"
                    class="cursor-pointer flex z-40 w-40 gap-2 top-5  left-5 absolute bg-white p-4 rounded-3xl">
                    <black-pin height="22" width="22" />
                    <p>سنجاق کردن</p>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <p>لغت: <span class="text-[#7FB77E]">{{ comment.word.word }}</span></p>
        </div>
        <div class="mt-2">لغت نامه: <span class="text-[#7FB77E]">{{ comment.word.dictionary.name }}</span></div>
        <div class="mt-5">
            <h3>توضیحات:</h3>
            <p class="mt-3 text-sm">
                {{ comment.body }}
            </p>
        </div>
        <div class="mt-5 flex gap-2">
            <div @click="reject(comment.id, 'reject')" style="background-color: #e5737333"
                class="flex items-center gap-2 p-3 rounded-full">
                <red-trash width="22" height="22" />
            </div>
            <div @click="approve(comment.id, 'approve')"
                class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
                <tick width="22" height="22" />
            </div>
        </div>
    </div>
    <transition name="popup">
        <reportcard @click="isShowPinBox = false" :class="!isShowPinBox ? 'hidden' : 'flex'" />
    </transition>
</template>
<script setup>
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
import redTrash from "~/components/icons/redTrash.vue";
import ThreeDot from "~/components/icons/ThreeDot.vue";
import reportcard from "~/components/reportcard.vue";
import blackPin from "~/components/icons/blackPin.vue";
import tick from "~/components/icons/tick.vue";
import loadingAnimation from "~/components/loadingAnimation.vue";
import { useAuthToken } from "~/composables/useAuthCrypto";
import useEvaluateDashboardItem from "~/composables/useEvaluateDashboardItem.js";
import usePinComment from "~/composables/usePinComment";
const isShowPinBox = ref(false)
const props = defineProps({
    comment: {
        required: true,
        type: Object
    }
})
const { loading: pinLoading, pinComment } = usePinComment()
const { token: AUTH_TOKEN, isLoggedIn } = useAuthToken()
const { loading, evaluateItem } = useEvaluateDashboardItem()
const {
    fetchDashboardData,
    responseData: commentData,
    loading: reportCommentLoading
} = useFetchDashboardData()
const loadData = async () => {
    if (loginStore.isAdmin && loginStore.token && loginStore.isLoggedIn) { 
        await fetchDashboardData(AUTH_TOKEN.value, "comments") 
    }
}
const approve = async (id, status) => {
    if (AUTH_TOKEN.value && isLoggedIn.value) {
        await evaluateItem(AUTH_TOKEN.value, id, status, 'comments')
        loadData()
    }
}
const reject = async (id, status) => {
    if (AUTH_TOKEN.value && isLoggedIn.value) {
        await evaluateItem(AUTH_TOKEN.value, id, status, 'comments')
        loadData()
        loadData()
    }
}
const pin = async (id) => {
    if (AUTH_TOKEN.value && isLoggedIn.value) {
        await pinComment(AUTH_TOKEN.value, id)
        loadData()
    }
}

</script>
<style>
.popup-enter-active {
    animation: popup-in 3s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-leave-active {
    animation: popup-out 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}


@keyframes popup-in {
    0% {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
    }

    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

@keyframes popup-out {
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }

    100% {
        opacity: 0;
        transform: scale(0.85) translateY(10px);
    }
}
</style>