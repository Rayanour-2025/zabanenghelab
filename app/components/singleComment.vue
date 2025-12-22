<template>
    <div>
        <div v-if="commentData.is_pinned" class="flex items-start gap-2">
            <pin width="23" height="23" />
            <p class="text-[#7FB77E]">سنجاق شده</p>
        </div>
        <div class="mt-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <!-- <img :src="profileImg" class="ml-3 rounded-full w-12 h-12" alt="profile" /> -->
                    <p>
                        <span class="font-semibold text-lg">{{ commentData.user.username }}</span>
                    </p>
                </div>
                <div>
                    <three-dot @click="isShowReportCard = true" class="cursor-pointer" width="26" height="26" />
                </div>
            </div>
            <div class="mt-4">
                <p class="[word-spacing:5px]">{{ commentData.body }}
                </p>
            </div>
            <div class="flex gap-x-5">
                <div
                    class="flex mt-4 bg-[#F0F1EE] w-fit px-5 py-2 rounded-full shadow-[0px_7px_15px_-6px_#5C636940] items-center justify-start">
                    <div class="flex items-center ml-2">
                        <p class="text-xl ml-2">{{ commentData.likes_count }}</p>
                        <like width="26" color="#ff0000" @click="reaction('like', commentData.id)" height="26" />
                    </div>
                    <div @click="reaction('dislike', commentData.id)">
                        <dislike width="26" color="#ff0000" height="26" />
                    </div>
                </div>
                <div @click="reply(commentData)"
                    class="flex mt-4 gap-2 bg-[#F0F1EE] w-fit px-5 py-2 rounded-full shadow-[0px_7px_15px_-6px_#5C636940] items-center justify-start">
                    <p>پاسخ</p>
                    <message width="26" height="26" />
                </div>
            </div>
        </div>
        <transition name="answer">
            <div v-if="isShowAnswer && commentData.children.length">
                <div class="mt-10 pr-9" v-for="cmd in commentData.children" :key="cmd.id">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <!-- <img :src="profileImg" class="ml-3 rounded-full w-12 h-12" alt="profile" /> -->
                            <p>
                                <span class="font-semibold text-lg">{{ cmd.user.username }}</span>
                            </p>
                        </div>
                        <div>
                            <three-dot @click="isShowReportCard = true" class="cursor-pointer" width="26" height="26" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <p class="[word-spacing:5px] text-base">{{ cmd.body }}
                        </p>
                    </div>
                </div>
            </div>
        </transition>

        <div v-if="commentData.children.length" class="flex cursor-pointer items-center gap-3 mt-4"
            @click="isShowAnswer = !isShowAnswer">
            <p class="text-[#7FB77E]">{{ !isShowAnswer ? "نمایش" : "بستن" }} {{ commentData.children.length }} پاسخ</p>
            <answar width="15" height="15" />
        </div>
    </div>
    <transition name="popup">
        <comment-report-card v-if="isShowReportCard" :comment-id="commentData?.id"
            @click="isShowReportCard = !isShowReportCard" @close-card="closeCard" />
    </transition>
</template>
<script setup>
import answar from "~/components/icons/answar.vue";
import Pin from "~/components/icons/Pin.vue";
import Dislike from "~/components/icons/Dislike.vue";
import Message from "~/components/icons/Message.vue";
import Like from "~/components/icons/Like.vue";
import { useAuthToken } from '@/composables/useAuthCrypto';
import ThreeDot from "~/components/icons/ThreeDot.vue";
import useLikeDislike from "@/composables/useLikeDislike";
import { useToast } from 'vue-toastification';
const emit = defineEmits(['sendReplyId'])
// import profileImg from "@/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
const { token: AUTH_TOKEN } = useAuthToken()
const toast = useToast()
const storeLogin = useAuthStore()
const isShowAnswer = ref(false)
const isShowReportCard = ref(false)
const props = defineProps({
    commentData: {
        required: true,
        type: Object
    }
})
const reply = (comment) => {
    emit('sendReplyId', comment)
}
const {
    likeDislike,
    loading: likeDislikeLoading,
} = useLikeDislike()
const reaction = async (reactionType, commentId) => {  
    try {
        if (AUTH_TOKEN.value && storeLogin.isLoggedIn && storeLogin.token) { 
            await likeDislike(AUTH_TOKEN.value, commentId, reactionType); 
        } else {
            toast.error("ابتدا وارد حساب خود شوید.");
        }
    } catch (error) {
        console.error("خطا در عملیات لایک:", error);
    }
};
</script>
