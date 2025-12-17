<template>
    <div>
        <div dir="rtl" class="container bg-white mx-auto">
            <!-- <search-word-box dir="rtl"  /> -->
            <div
                class="flex section md:flex-row flex-col-reverse items-start justify-between border mt-6 md:px-8 px-2 border-[#DADDD833]">
                <div
                    class="bg-[#F0F1EE] flex flex-col gap-y-6 p-8 rounded-[35px] shadow-[0px_7px_15px_-6px_#5C636940] md:w-[70%] w-full">
                    <div class="rounded-[50px] flex items-center justify-between">
                        <div class="mb-2">
                            <div class="flex gap-3 mb-6 items-end">
                                <p class="text-4xl">{{ data.word }}</p>
                                <p class="text-sm">اسم</p>
                            </div>
                            <span class="text-sm" v-if="data.pronunciation">/{{ data.pronunciation }}/</span>
                        </div>
                        <div v-if="storeLogin.isAdmin == false  " @click="isShowCard = !isShowCard"
                            class="bg-[#7FB77E33] p-3 cursor-pointer rounded-full flex items-center justify-center gap-2">
                            <Flag width="22" height="22" />
                            <p>گزارش</p>
                        </div>
                        <NuxtLink to="\edit_word" v-if="storeLogin.isAdmin == 1 && storeLogin.isLoggedIn" @click="isShowCard = !isShowCard"
                            class="bg-[#7FB77E33] p-3 cursor-pointer rounded-full flex items-center justify-center gap-2">
                            <p>ویرایش</p>
                        </NuxtLink>
                    </div>
                    <div>
                        <div class="flex">
                            <div class="bg-[#7FB77E] ml-4 md:text-base text-xs text-white py-3 px-5"
                                style="border-top-right-radius: 25px; border-top-left-radius: 25px">
                                ترجمه
                            </div>
                            <div class="bg-white py-3 px-5 md:text-base text-xs cursor-pointer"
                                @click="goToCommentsSection"
                                style="border-top-right-radius: 25px; border-top-left-radius: 25px">
                                دیدگاه ها
                            </div>
                        </div>
                        <div class="border-t border-[#7FB77E]">
                            <div class="mt-10">
                                <div class="flex items-end">
                                    <p dir="ltr" class="md:text-2xl text-2xl">{{ data.meaning }}</p>
                                    <!-- -<span class=""> hə'loʊ• hɛ'loʊ</span> -->
                                </div>
                                <!-- <div class="mt-7 md:text-base text-xs flex flex-wrap gap-6">
                                    <div>
                                        <p>سلام و احوالپرسی که هنگام ملاقات با کسی استفاده می‌شود.</p>
                                        <p dir="ltr">greeting used when meeting someone.</p>
                                    </div>
                                    <div>
                                        <p>او قبل از بازی بزرگ با رویی گشاده از تیم استقبال کرد.</p>
                                        <p dir="ltr">
                                            He greeted the team with a cheerful hello before the big game.
                                        </p>
                                    </div>
                                </div> -->
                                <div v-if="data.synonyms.length">
                                    <h3 class="text-xl font-medium my-4">مترادف:</h3>
                                    <div class="bg-[#7FB77E33] w-fit rounded-2xl md:text-base text-[10px] p-4">
                                        <span v-for="(syn, index) in data.synonyms" :key="index">{{ syn }}،
                                        </span>
                                    </div>
                                </div>
                                <div v-if="data.related_words.length">
                                    <h3 class="text-xl font-medium my-4">هم خانواده:</h3>
                                    <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4 md:text-base text-[10px]">
                                        <span v-for="(rlt, index) in data.related_words" :key="index">{{ rlt }} ,</span>
                                    </div>
                                </div>
                                <!-- <div>
                                    <h3 class="text-xl font-medium my-4">متضاد:</h3>
                                    <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4 md:text-base text-[10px]">
                                        <span>خداحافظ</span>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <dictionary-list :dic-list-name="dictionaries" />
            </div>
            <comments :wrod-id="data.id" />
        </div>
        <transition name="popup">
            <word-report-card v-if="isShowCard" @click="isShowCard = !isShowCard" @close-card="closeCard" />
        </transition>
    </div>
</template>
<script setup>
import reportcard from "~/components/reportcard.vue";
import Flag from "~/components/icons/flag.vue";
const isShowCard = ref(false);
const isShowReportCard = ref(false);
const closeCard = (value) => {
    isShowCard.value = value;
}
const storeWord = useWordStore();
const storeLogin = useAuthStore()
const data = storeWord.selectedWord;
console.log(storeLogin.isAdmin);
if (data == null) {
    navigateTo("/resultTranslate");
}
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
