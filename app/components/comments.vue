<template>
    <div class="comments md:w-[70%] w-full mt-28 relative md:mx-8 mx-1 h-auto">
        <h2 class="font-semibold text-4xl mb-5">دیدگاه:</h2>
        <div class="w-full">
            <div class="w-full flex flex-col items-center justify-center">
                <div v-if="replyTo" class="w-full mb-2 flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                    <p class="text-sm">در حال پاسخ به: <b>{{ replyTo.user.username }}</b></p>
                    <button @click="cancelReply" class="text-red-500 text-xs">انصراف</button>
                </div>
                <textarea name="commentText" v-model="payload.body" 
                    class=" shadow-[0px_7px_15px_-6px_#5C636940] text-sm bg-[#F0F1EE] w-full outline-none rounded-3xl p-8"
                    placeholder="دیدگاهتو باما درمیون بزارید..." id="commentText" rows="5"></textarea>
                <button @click="submitComment()"
                    class="text-white bg-[#DADDD8] absolute top-[200px] px-4 py-3 text-xl rounded-full shadow-[0px_7px_15px_-6px_#5C636940]">
                    ثبت {{ replyTo ? 'پاسخ' : 'دیدگاه' }}
                </button>
            </div>
            <div @click="isShowSortBox = true" class="mt-16 relative flex gap-3 items-center justify-start">
                <order width="22px" height="22px" class="cursor-pointer" />
                <p class="font-medium text-xl cursor-pointer">مرتب سازی</p>
                <ul v-if="isShowSortBox"
                    class="absolute z-30 bg-[#F8F9F4] shadow-[0px_7px_15px_-6px_#5C636940] p-4 top-9 right-7 rounded-2xl">
                    <li @click.stop="selectedSort(1)" :class="active == 1 ? 'text-[#7FB77E]' : 'text-[#2B2B2B]'"
                        class="text-center mb-2 cursor-pointer">
                        محبوب ترین دیدگاه
                    </li>
                    <li class="text-center mb-2 h-[2px] bg-[#DADDD8]"></li>
                    <li @click.stop="selectedSort(2)" :class="active == 2 ? 'text-[#7FB77E]' : 'text-[#2B2B2B]'"
                        class="text-center cursor-pointer">
                        جدید ترین دیدگاه
                    </li>
                </ul>
            </div>
            <div class="mt-9 flex flex-col gap-y-20">
                <single-comment v-for="comment in comments" :key="comment.id" @send-reply-id="setReply"
                    :comment-data="comment" />
            </div>
        </div>
    </div>

    <transition name="popup">
        <div @click="isShowSortBox = false"
            class="h-full w-full fixed items-center justify-center bg-black/30 top-0 left-0"
            :class="isShowSortBox ? 'flex' : 'hidden'"></div>
    </transition>
    <loading-animation v-if="commentsLoading" />
</template>
<script setup>
import singleComment from "~/components/singleComment.vue";
import Order from "~/components/icons/Order.vue";
import useFetchComment from "~/composables/useFetchComment";
import { useToast } from "vue-toastification";
import { useAuthToken } from "~/composables/useAuthCrypto.js";
import useSendComment from "@/composables/useSendComment";
import loadingAnimation from "~/components/loadingAnimation.vue";
const { token: AUTH_TOKEN } = useAuthToken()
const toast = useToast()
const props = defineProps({
    wrodId: {
        required: true,
    }
})
const replyTo = ref(null)
const {
    sendComment,
    errMessage,
    loading
} = useSendComment()
const {
    fetchComment,
    responseData: commentsRespone,
    loading: commentsLoading
} = useFetchComment()
const storeLogin = useAuthStore()
const isShowSortBox = ref(false)
const active = ref(1);
let token = null
if (storeLogin.isLoggedIn == true) {
    token = storeLogin.token
}

const setReply = (comment) => {
    replyTo.value = comment;
    // payload.value.body = `@${comment.user.username} `;
    document.getElementById('commentText').focus();
};

const cancelReply = () => {
    replyTo.value = null;
    payload.value.body = '';
};
const selectedSort = (num) => {
    active.value = num;
    isShowSortBox.value = false;
};
const comments = ref([])
const fetchCommentsData = async () => {
    await fetchComment(token, props.wrodId, active.value);
    if (commentsRespone.value) {
        comments.value = commentsRespone.value.data.comments
        console.log(comments.value)
    } else {
        console.log("خطا:", commentsErrMessage.value);
    }
};

fetchCommentsData()
const payload = ref({ body: '', })
const submitComment = async () => {
    if (storeLogin.isLoggedIn && storeLogin.token) {
        const commentData = {
            body: payload.value.body,
            parent_id: replyTo.value ? replyTo.value.id : null
        }
        await sendComment(AUTH_TOKEN.value, props.wrodId, commentData)
        payload.value.body = ''
        replyTo.value = null
        isShowSortBox.value = false
        fetchCommentsData()
    } else {
        toast.error("ابتدا وارد حساب خود شوید")
    }
}
watch(active, () => {
    fetchCommentsData()
})
</script>
