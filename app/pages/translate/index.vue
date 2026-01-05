<template>
    <div>
        <div v-if="data?.word">
            <div dir="rtl" class="container bg-white mx-auto">
                <!-- <search-word-box dir="rtl"  /> -->
                <div
                    class="flex section md:flex-row flex-col-reverse items-start justify-between border mt-6 md:px-8 px-2 border-[#DADDD833]">
                    <div class="bg-[#F0F1EE] flex flex-col gap-y-6 p-6 md:p-8 rounded-[35px] shadow-[0px_7px_15px_-6px_#5C636940] md:w-[70%] w-full"
                        dir="rtl">
                        <div class="rounded-[50px] flex items-center justify-between gap-4">
                            <div class="mb-2">
                                <div class="flex gap-3 mb-2 md:mb-6 items-baseline">
                                    <p class="text-2xl md:text-4xl  " v-html="data?.word"></p>
                                    <p class="text-xs md:text-sm text-gray-600 ">اسم</p>
                                </div>
                                <span class="text-xs md:text-sm opacity-70" v-if="data.pronunciation" dir="ltr">/{{
                                    data?.pronunciation }}/</span>
                            </div>

                            <div v-if="storeLogin.isAdmin == false" @click="isShowCard = !isShowCard"
                                class="bg-[#7FB77E33] p-2 md:p-3 cursor-pointer rounded-full flex items-center justify-center gap-2 whitespace-nowrap">
                                <Flag width="18" height="18" class="md:w-[22px] md:h-[22px]" />
                                <p class="text-xs md:text-base">گزارش</p>
                            </div>
                            <div @click="toEditPage(data?.id)" v-if="storeLogin.isLoggedIn && storeLogin.isAdmin"
                                class="bg-[#7FB77E33] p-2 md:p-3 cursor-pointer rounded-full flex items-center justify-center gap-2 whitespace-nowrap">
                                <p class="text-xs md:text-base">ویرایش</p>
                            </div>
                        </div>

                        <div>
                            <div class="flex">
                                <div class="bg-[#7FB77E] ml-2 md:ml-4 text-xs md:text-base text-white py-2 md:py-3 px-4 md:px-6"
                                    style="border-top-right-radius: 20px; border-top-left-radius: 20px">
                                    ترجمه
                                </div>
                                <div class="bg-white py-2 md:py-3 px-4 md:px-6 text-xs md:text-base cursor-pointer"
                                    @click="goToCommentsSection"
                                    style="border-top-right-radius: 20px; border-top-left-radius: 20px">
                                    دیدگاه‌ها
                                </div>
                            </div>

                            <div class="border-t border-[#7FB77E] bg-white/30 rounded-b-[25px] p-4 md:p-6">
                                <div class="mt-4 md:mt-8">
                                    <div class="flex items-end mb-6">
                                        <p dir="ltr" class="text-xl md:text-3xl   text-gray-800">{{
                                            data?.meaning }}</p>
                                    </div>

                                    <div v-if="data?.synonyms.length" class="mb-4">
                                        <h3 class="text-sm md:text-lg   mb-2 text-[#4a6b4a]">مترادف:</h3>
                                        <div
                                            class="bg-[#7FB77E33] w-fit rounded-xl p-3 md:p-4 text-xs md:text-base leading-relaxed">
                                            <span v-for="(syn, index) in data.synonyms" :key="index">
                                                {{ syn }}<span v-if="index < data.synonyms.length - 1">، </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div v-if="data.related_words.length" class="mb-4">
                                        <h3 class="text-sm md:text-lg   mb-2 text-[#4a6b4a]">هم‌خانواده:</h3>
                                        <div
                                            class="bg-[#7FB77E33] w-fit rounded-xl p-3 md:p-4 text-xs md:text-base leading-relaxed">
                                            <span v-for="(rlt, index) in data.related_words" :key="index">
                                                {{ rlt }}<span v-if="index < data.related_words.length - 1">، </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div v-if="data?.antonyms.length" class="mb-4">
                                        <h3 class="text-sm md:text-lg   mb-2 text-[#4a6b4a]">متضاد:</h3>
                                        <div
                                            class="bg-[#7FB77E33] w-fit rounded-xl p-3 md:p-4 text-xs md:text-base leading-relaxed">
                                            <span v-for="(ant, index) in data.antonyms" :key="index">
                                                {{ ant }}<span v-if="index < data.antonyms.length - 1">، </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div v-if="data.description">
                                        <h3 class="text-sm md:text-lg   mb-2 text-[#4a6b4a]">توضیحات:</h3>
                                        <div
                                            class="bg-[#7FB77E33] w-full md:w-fit rounded-xl p-3 md:p-4 text-xs md:text-base leading-loose">
                                            <span>{{ data?.description }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <dictionary-list :dic-list-name="dictionaries" />
                </div>
                <comments :word-loading="loading" :wrod-id="data.id" />
            </div>
            <transition name="popup">
                <word-report-card v-if="isShowCard" @close-card="close" @click="isShowCard = !isShowCard" :word-id="data.id" />
            </transition>
        </div>
        <loadingAnimation v-if="loading" />
    </div>
</template>
<script setup>
import reportcard from "~/components/reportcard.vue";
import Flag from "~/components/icons/flag.vue";
import loadingAnimation from "~/components/loadingAnimation.vue";
import { useAuthToken } from '~/composables/useAuthCrypto'
import useFetchSingleWord from '~/composables/useFetchSingleWord'
const isShowCard = ref(false);
const route = useRoute()
const isShowReportCard = ref(false);
const closeCard = (value) => {
    isShowCard.value = value;
}
const { token, isAdmin } = useAuthToken()
const storeWord = useWordStore();
const storeLogin = useAuthStore()
const data = ref()
const { loading, responseData, fetchSingleWord } = useFetchSingleWord()
if (data == null) {
    navigateTo("/resultTranslate");
}
const loadData = async () => {
    await fetchSingleWord(token.value, route.query.word)
    data.value = responseData.value.data 
}
loadData()
const dictionaries = [
    "همه",
    "معین",
    "دهخدا",
    "عمید",
    "فرهنگ زبان‌آموز فارسی",
    "فرهنگ جامع زبان فارسی",
    "فرهنگ سخن",
    "فرهنگ موضوعی فارسی",
];
const goToCommentsSection = () => {
    document.querySelector(".comments").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
const toEditPage = (id) => {
    navigateTo(`/edit_word/${id}`)
}
const close = (flag) => {
    isShowCard.value = flag
}
</script>
<style>
textarea::-webkit-scrollbar {
    width: 8px;
}

textarea::-webkit-scrollbar-thumb {
    background-color: #daddd8;
    border-radius: 4px;
    box-shadow: 0px 7px 15px -6px #5c636940;
}

textarea::-webkit-scrollbar-track {
    background-color: none;
}

/* Fade backdrop */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Popup animation */
.popup-enter-active {
    animation: popup-in 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-leave-active {
    animation: popup-out 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes popup-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes popup-out {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.answer-enter-active {
    animation: expand 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.answer-leave-active {
    animation: collapse 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* باز شدن */
@keyframes expand {
    0% {
        max-height: 0;
        opacity: 0;
    }

    100% {
        max-height: 500px;
        /* یک مقدار کافی بالا بگذار */
        opacity: 1;
    }
}

/* بسته شدن */
@keyframes collapse {
    0% {
        max-height: 500px;
        opacity: 1;
    }

    100% {
        max-height: 0;
        opacity: 0;
    }
}
</style>
