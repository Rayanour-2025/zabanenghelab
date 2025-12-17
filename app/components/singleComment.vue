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
                        <like width="26" @click="reaction('like', commentData.id)" height="26" />
                    </div>
                    <div>
                        <dislike width="26" height="26" />
                    </div>
                </div>
                <div 
                    class="flex mt-4 gap-2 bg-[#F0F1EE] w-fit px-5 py-2 rounded-full shadow-[0px_7px_15px_-6px_#5C636940] items-center justify-start">
                    <p>پاسخ</p>
                    <message width="26" height="26" />
                </div>
            </div>
        </div>
        <transition name="answer">
            <div v-if="isShowAnswer && commentData.children.length">
                <div class="mt-10 pr-9" v-for="cmd in  commentData.children" :key="cmd.id">
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

        <div v-if="commentData.children.length" class="flex cursor-pointer items-center gap-3 mt-4" @click="isShowAnswer = !isShowAnswer">
            <p class="text-[#7FB77E]">{{ !isShowAnswer ? "نمایش" : "بستن" }} {{ commentData.children.length }} پاسخ</p>
            <answar width="15" height="15" />
        </div>
    </div>
    <transition name="popup">
        <reportcard v-if="isShowReportCard" @click="isShowReportCard = !isShowReportCard">
            <div @click.stop class="w-1/4 h-auto p-7 rounded-[64px] bg-white flex flex-col justify-between">
                <h3 class="mb-6 font-bold">گزارش</h3>
                <p class="text-xs">لطفاً دلیل گزارش این واژه را انتخاب کنید.</p>
                <p class="text-xs mb-6">
                    تیم پشتیبانی پس از بررسی، در صورت لزوم اقدام خواهد کرد.
                </p>
                <div class="flex flex-col mb-6 gap-7">
                    <base-check-box v-for="(item, index) in reportMessageItems" :key="index" :label="item" />
                </div>
                <div class="w-full">
                    <textarea name="reason" id="reason" placeholder="علت گزارش را توضیح دیهید" rows="6"
                        class="p-4 w-full rounded-[20px] text-xs outline-none border boeder-[#DADDD8]"></textarea>
                </div>
                <div class="w-full">
                    <button class="text-center w-full py-2 rounded-[100px] bg-[#7FB77E] text-white"
                        @click="isShowReportCard = !isShowReportCard">
                        تایید
                    </button>
                </div>
            </div>
        </reportcard>
    </transition>
</template>
<script setup>
import profileImg from '~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png'
import answar from "~/components/icons/answar.vue";
import Pin from "~/components/icons/Pin.vue";
import Dislike from "~/components/icons/Dislike.vue";
import Message from "~/components/icons/Message.vue";
import Like from "~/components/icons/Like.vue";
import { useAuthToken } from '@/composables/useAuthCrypto';
import ThreeDot from "~/components/icons/ThreeDot.vue";
import useLikeDislike from "@/composables/useLikeDislike";
import { useToast } from 'vue-toastification';
// import profileImg from "@/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
const {token: AUTH_TOKEN} = useAuthToken()
const toast = useToast()
const storeLogin = useAuthStore() 
const isShowAnswer = ref(false)
const isShowReportCard = ref(false)
const props =defineProps({
    commentData : {
        required: true,
        type: Object
    }
})
const {
    likeDislike,
    loading: likeDislikeLoading,
} = useLikeDislike()
const reaction = async (reaction, commentId) => {
    if (AUTH_TOKEN.value && storeLogin.isLoggedIn && storeLogin.token) { 
        await likeDislike(AUTH_TOKEN.value, commentId, reaction)
    } else {
        toast.error("ابتدا وارد حساب خود شوید.")
        return
    }
}
</script>
