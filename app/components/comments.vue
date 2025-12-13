<template>
    <div class="comments md:w-[70%] w-full mt-28 relative md:mx-8 mx-1 h-auto">
        <h2 class="font-semibold text-4xl mb-5">دیدگاه:</h2>
        <div class="w-full">
            <div class="w-full flex flex-col items-center justify-center">
                <textarea name="commentText" v-model="payload.body"
                    class="shadow-[0px_7px_15px_-6px_#5C636940] text-sm bg-[#F0F1EE] w-full outline-none rounded-3xl p-8"
                    placeholder="دیدگاهتو باما درمیون بزارید..." id="commentText" rows="5"></textarea>
                <button @click="submitComment()"
                    class="text-white bg-[#DADDD8] absolute top-[200px] px-4 py-3 text-xl rounded-full shadow-[0px_7px_15px_-6px_#5C636940]">
                    ثبت دیدگاه
                </button>
            </div>
            <div @click="isShowSortBox = true" class="mt-16 relative flex gap-3 items-center justify-start">
                <order width="22px" height="22px" class="cursor-pointer" />
                <p class="font-medium text-xl cursor-pointer">مرتب سازی</p>
                <ul v-if="isShowSortBox"
                    class="absolute z-30 bg-[#F8F9F4] shadow-[0px_7px_15px_-6px_#5C636940] p-4 rounded-2xl">
                    <li @click="selectedSort(1)" :class="active == 1 ? 'text-[#7FB77E]' : 'text-[#2B2B2B]'"
                        class="text-center mb-2 cursor-pointer">
                        محبوب ترین دیدگاه
                    </li>
                    <li class="text-center mb-2 h-[2px] bg-[#DADDD8]"></li>
                    <li @click="selectedSort(2)" :class="active == 2 ? 'text-[#7FB77E]' : 'text-[#2B2B2B]'"
                        class="text-center cursor-pointer">
                        جدید ترین دیدگاه
                    </li>
                </ul>
            </div>
            <div class="mt-9 flex flex-col gap-y-20">
                <single-comment v-for="comment in comments" :key="comment.id" :comment-data="comment" />
            </div>
        </div>
    </div>

    <transition name="popup">
        <div @click="isShowSortBox = false"
            class="h-full w-full fixed items-center justify-center bg-black/30 top-0 left-0"
            :class="isShowSortBox ? 'flex' : 'hidden'"></div>
    </transition>
</template>
<script setup>
import singleComment from "~/components/singleComment.vue";
import Order from "~/components/icons/Order.vue";
import useFetchComment from "~/composables/useFetchComment";
import { useToast } from "vue-toastification";
import { useAuthToken } from "~/composables/useAuthCrypto.js";
import useSendComment from "@/composables/useSendComment";
const { token: AUTH_TOKEN } = useAuthToken()
const toast = useToast()
const props = defineProps({
    wrodId: {
        required: true,
    }
})
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
const payload = ref({ body: 'sfsdf' })
const submitComment = async () => {
    if (storeLogin.isLoggedIn && storeLogin.token) {
        await sendComment(AUTH_TOKEN.value, props.wrodId, payload.value)
    } else {
        toast.error("ابتدا وارد حساب خود شوید")
    }
}

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
</script>