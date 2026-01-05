<template>
    <div class="mx-auto px-5 container">
        <div class="w-full max-md:flex-col flex-row-reverse flex gap-x-10">
            <div class="flex w-[40%] max-md:w-full flex-col gap-y-4">
                <user-info-cart :info="info" /> 
                <div dir="rtl"
                    class="bg-[#7FB77E1A] p-8 rounded-[50px] border-[#7FB77E] border-[0.5px] shadow-[0px_7px_15px_-6px_#5C636940]">
                    <p class="font-medium text-lg mb-6">درباره</p>
                    <div class="p-4 text-sm bg-white rounded-full border-[#7FB77E] border-[0.5px]">
                        <p>{{ info?.data.about_me }}</p>
                    </div>
                </div>
            </div>
            <div class="md:w-[60%] w-full mt-8">
                <user-activity-cart :activity="activity?.data"/>
                <div class="mt-20" dir="rtl">
                    <div v-if="isAdmin == 0">
                        <div>
                            <div  class="flex justify-between">
                                <div class="flex gap-x-3 items-center">
                                    <lamp width="25" height="25" />
                                    <p class="text-xl font-normal">لغات پیشنهاد اخیر</p>
                                </div>
                                <div class="border p-3 rounded-3xl">نمایش همه</div>
                            </div>
                            <div class="flex mt-5 gap-3 flex-wrap">
                                <p
                                    class="bg-[#F0F1EE] py-4 px-7 w-fit rounded-[50px] shadow-[0px_5px_10px_-6px_#8B968B40]">
                                    سلامت</p>
                                <p
                                    class="bg-[#F0F1EE] py-4 px-7 w-fit rounded-[50px] shadow-[0px_5px_10px_-6px_#8B968B40]">
                                    تعظیم</p>
                                <p
                                    class="bg-[#F0F1EE] py-4 px-7 w-fit rounded-[50px] shadow-[0px_5px_10px_-6px_#8B968B40]">
                                    درود</p>
                                <p
                                    class="bg-[#F0F1EE] py-4 px-7 w-fit rounded-[50px] shadow-[0px_5px_10px_-6px_#8B968B40]">
                                    ذکر</p>
                                <p
                                    class="bg-[#F0F1EE] py-4 px-7 w-fit rounded-[50px] shadow-[0px_5px_10px_-6px_#8B968B40]">
                                    مراسم اعیاد</p>
                                <p
                                    class="bg-[#F0F1EE] py-4 px-7 w-fit rounded-[50px] shadow-[0px_5px_10px_-6px_#8B968B40]">
                                    احترام نظامی</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div class="flex justify-between my-6">
                                <div class="flex gap-x-3 items-center">
                                    <message-icon width="22" height="22" />
                                    <p class="text-xl font-normal">4 دیدگاه اخیر</p>
                                </div> 
                            </div>
                            <div class="flex flex-col gap-y-5">
                                <recent-comment v-for="(com, index) in comments?.data.slice(0,4)" :key="index" :comment="com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <loading-animation v-if="loading || activityLoading || commentLoading" />
        </div>
    </div>
</template>
<script setup>
import loadingAnimation from '~/components/loadingAnimation.vue';
import lamp from '~/components/icons/lamp.vue';
import messageIcon from '~/components/icons/messageIcon.vue';
import useFetchPersonalInfo from '~/composables/useFetchPersonalInfo'
import { useAuthToken } from '~/composables/useAuthCrypto'
import userInfoCart from '~/components/userInfoCart.vue';
import recentComment from '~/components/recentComment.vue';
import userActivityCart from '~/components/userActivityCart.vue';
import useFechRecentSuggestions from '~/composables/useFechRecentSuggestions'
import useFetchRecentComment from '~/composables/useFetchRecentComment'
import useFetchUserActivities from '~/composables/useFetchUserActivities'
const { token: AUTH_TOKEN, isLoggedIn, isAdmin } = useAuthToken()
const { loading: activityLoading, fetchUserActivities, responseData: activity  } = useFetchUserActivities()
const { loading: recentSugLoading, responseData: recentSug, fechRecentSuggestions } = useFechRecentSuggestions()
const { fetchPersonalInfo, responseData: info, loading } = useFetchPersonalInfo()
const { loading: commentLoading, fetchRecentComment, responseData: comments } = useFetchRecentComment()
const loadData = async () => {
    try {
        if (isLoggedIn.value, AUTH_TOKEN.value) {
            await fetchPersonalInfo(AUTH_TOKEN.value)
            await fetchUserActivities(AUTH_TOKEN.value)
            await fetchRecentComment(AUTH_TOKEN.value)
            if (isAdmin.value == 0) {
                await fechRecentSuggestions(AUTH_TOKEN.value)
            }
        }
        console.log(recentSug.value.data)
    } catch (error) {

    }
}
loadData()
</script>