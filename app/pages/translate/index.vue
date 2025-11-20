<template>
    <div dir="rtl" class="container bg-white mx-auto">
        <search-word-box dir="rtl" />
        <div class="flex section items-start justify-between border mt-6 px-8 border-[#DADDD833]">
            <div
                class="bg-[#F0F1EE] flex flex-col gap-y-6 p-8 rounded-[35px] shadow-[0px_7px_15px_-6px_#5C636940] w-[70%]">
                <div class="rounded-[50px] flex items-center justify-between">
                    <div class="mb-2">
                        <div class="flex gap-3 mb-6 items-end">
                            <p class="text-4xl">سلام</p>
                            <p class="text-sm">اسم</p>
                        </div>
                        <span class="text-sm">/salAm/</span>
                    </div>
                    <div @click="isShowCard = !isShowCard"
                        class="bg-[#7FB77E33] p-3 cursor-pointer rounded-full flex items-center justify-center gap-2">
                        <Flag width="22" height="22" />
                        <p>گزارش</p>
                    </div>
                </div>
                <div>
                    <div class="flex">
                        <div class="bg-[#7FB77E] ml-4 text-white py-3 px-5"
                            style="border-top-right-radius: 25px; border-top-left-radius: 25px">
                            ترجمه
                        </div>
                        <div class="bg-white py-3 px-5 cursor-pointer" @click="goToCommentsSection"
                            style="border-top-right-radius: 25px; border-top-left-radius: 25px">
                            دیدگاه ها
                        </div>
                    </div>
                    <div class="border-t border-[#7FB77E]">
                        <div class="mt-10">
                            <div class="flex items-end">
                                <p class="text-5xl">hello</p>
                                -<span class=""> hə'loʊ• hɛ'loʊ</span>
                            </div>
                            <div class="mt-7 flex flex-wrap gap-6">
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
                            </div>
                            <div>
                                <h3 class="text-xl font-medium my-4">مترادف:</h3>
                                <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                                    <span>ذکر</span> ، <span>سلامت</span> ، <span>تعظیم</span> ،
                                    <span>تهنیت</span> ، <span>احترام نظامی</span> ،
                                    <span>درود گویی</span> ، <span>مراسم عیاد</span> ،
                                    <span>تندرستی</span>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-medium my-4">هم خانواده:</h3>
                                <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                                    <span>سلیم</span> ، <span>سالم</span> ، <span>اسلام</span> ،
                                    <span>سلامت</span> ،
                                    <span>سلم</span>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-medium my-4">متضاد:</h3>
                                <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                                    <span>خداحافظ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <dictionary-list :dic-list-name="dictionaries" />
        </div>
        <div class="comments w-[70%] mt-28 relative mx-8 h-auto">
            <h2 class="font-semibold text-4xl mb-5">دیدگاه:</h2>
            <div class="w-full">
                <div class="w-full flex flex-col items-center justify-center">
                    <textarea name="commentText"
                        class="shadow-[0px_7px_15px_-6px_#5C636940] text-sm bg-[#F0F1EE] w-full outline-none rounded-3xl p-8"
                        placeholder="دیدگاهتو باما درمیون بزارید..." id="commentText" rows="5"></textarea>
                    <button
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
                    <div>
                        <div class="flex items-start gap-2">
                            <pin width="23" height="23" />
                            <p class="text-[#7FB77E]">سنجاق شده</p>
                        </div>
                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <img :src="profileImg" class="ml-3 rounded-full w-12 h-12" alt="profile">
                                    <p><span class="font-semibold text-lg">سعید علوی</span>-<span>6 ساعت پیش</span>
                                    </p>
                                </div>
                                <div>
                                    <three-dot @click="isShowReportCard = true" class="cursor-pointer" width="26"
                                        height="26" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <p class="[word-spacing:5px]">محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند تا
                                    دیکشنری معتبر رو باهم داشته
                                    باشه، بدون اینکه هی بین تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و ترجمه‌ها هم
                                    دقیق و سریع هستن. دمتون گرم واقعاً 🙌</p>
                            </div>
                            <div class="flex gap-x-5">
                                <div
                                    class="flex mt-4 bg-[#F0F1EE] w-fit px-5 py-2 rounded-full shadow-[0px_7px_15px_-6px_#5C636940] items-center justify-start">
                                    <div class="flex items-center ml-2">
                                        <p class="text-xl ml-2">20</p>
                                        <like width="26" height="26" />
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
                            <div v-if="isShowAnswer">
                                <div class="mt-10 pr-9">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img :src="profileImg" class="ml-3 rounded-full w-12 h-12" alt="profile">
                                            <p><span class="font-semibold text-lg">سعید علوی</span>-<span>6 ساعت
                                                    پیش</span>
                                            </p>
                                        </div>
                                        <div>
                                            <three-dot @click="isShowReportCard = true" class="cursor-pointer"
                                                width="26" height="26" />
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <p class="[word-spacing:5px]">محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند
                                            تا
                                            دیکشنری معتبر رو باهم داشته
                                            باشه، بدون اینکه هی بین تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و
                                            ترجمه‌ها هم
                                            دقیق و سریع هستن. دمتون گرم واقعاً 🙌</p>
                                    </div>
                                </div>
                            </div>
                        </transition>

                        <div class="flex cursor-pointer items-center gap-3 mt-4" @click="isShowAnswer = !isShowAnswer">
                            <p class="text-[#7FB77E]">{{ !isShowAnswer ? 'نمایش' : 'بستن' }} 1 پاسخ</p>
                            <answar width="15" height="15" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <transition name="popup">
        <reportcard v-if="isShowCard" @click="isShowCard = !isShowCard">
            <div @click.stop class="w-1/4 h-auto p-7 rounded-[64px] bg-white flex flex-col justify-between">
                <h3 class="mb-6 font-bold">گزارش</h3>
                <p class="text-xs">لطفاً دلیل گزارش این واژه را انتخاب کنید.</p>
                <p class="text-xs mb-6">
                    تیم پشتیبانی پس از بررسی، در صورت لزوم اقدام خواهد کرد.
                </p>
                <div class="flex flex-col mb-6 gap-7">
                    <base-check-box v-for="(item, index) in reportItems" :key="index" :label="item" />
                </div>
                <div class="w-full">
                    <textarea name="reason" id="reason" placeholder="علت گزارش را توضیح دیهید" rows="6"
                        class="p-4 w-full rounded-[20px] text-xs outline-none border boeder-[#DADDD8]"></textarea>
                </div>
                <div class="w-full">
                    <button class="text-center w-full py-2 rounded-[100px] bg-[#7FB77E] text-white"
                        @click="isShowCard = !isShowCard">
                        تایید
                    </button>
                </div>
            </div>
        </reportcard>
    </transition>
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
    <transition name="popup">
        <div @click="isShowSortBox = false"
            class="h-full w-full fixed items-center justify-center bg-black/30 top-0 left-0"
            :class="isShowSortBox ? 'flex' : 'hidden'"></div>
    </transition>
</template>
<script setup>
const isShowCard = ref(false);
const isShowAnswer = ref(false);
const isShowReportCard = ref(false);
import Order from "~/components/icons/Order.vue";
import Flag from "~/components/icons/flag.vue";
import answar from "~/components/icons/answar.vue";
import reportcard from "~/components/reportcard.vue";
import Pin from "~/components/icons/Pin.vue";
import Dislike from "~/components/icons/Dislike.vue";
import Message from "~/components/icons/Message.vue";
import Like from "~/components/icons/Like.vue";
import ThreeDot from "~/components/icons/ThreeDot.vue";
import profileImg from "@/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png"
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
const reportItems = [
    "معنی یا ترجمه نادرست",
    "اطلاعات ناقص یا گمراه‌کننده",
    "غلط املایی یا نگارشی",
    "واژه وجود خارجی ندارد",
    "سایر موارد",
];
const reportMessageItems = [
    "واژه توهین‌آمیز یا نامناسب",
    "محتوای قومیتی، نژادی یا تبعیض‌آمیز",
    "محتوای سیاسی یا مغایر با قوانین",
    "اطلاعات نادرست یا گمراه‌کننده",
    "تهدید یا توهین مستقیم به کاربر دیگر",
    "تبلیغاتی یا اسپم",
    "سایر موارد"
];
const isShowSortBox = ref(false);
const active = ref(1);
const selectedSort = (num) => {
    active.value = num;
    isShowSortBox.value = false;
};
const goToCommentsSection = () => {
    document.querySelector(".comments").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
onMounted(() => {
    setTimeout(() => {
        document.querySelector(".section").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, 1000);
});
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
        max-height: 500px; /* یک مقدار کافی بالا بگذار */
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
