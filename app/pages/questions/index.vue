<template>
    <div class="px-8 mx-auto container" dir="rtl">
        <h2 class="text-[#7FB77E] font-bold md:font-extrabold md:text-4xl text-2xl mb-8">پرسش ها</h2>
        <div class="flex gap-x-4">
            <base-button>ثبت پرسش</base-button>
            <base-button active>پرسش های من</base-button>
        </div>
        <div class="mt-10 flex flex-col" >
            <div>
                <div
                    class="bg-[#F0F1EE] shadow-[0px_5px_10px_-6px_#8B968B40] py-6 px-6 rounded-3xl flex flex-col gap-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-x-4">
                            <img class="rounded-full w-10 h-10" :src="photo" alt="profile" />
                            <h4 class="text-xs md:text-sm">سعید علوی</h4>
                        </div>
                        <div>
                            <p class="text-[#5C636980] text-xs md:text-sm">۱۴۰۱ آبان ۰۶ ۱۰:۳۲</p>
                        </div>
                    </div>
                    <div>
                        <p class="md:text-sm text-xs font-normal">
                            واژه‌ی «سلامت» فقط به معنای تندرستی است یا می‌تواند به معنای درستی و امانت
                            هم باشد؟
                        </p>
                    </div>
                </div>
                <div class="py-6 px-6 rounded-3xl flex flex-col gap-y-4">
                    <div class="flex">
                        <div class="flex items-center gap-x-4">
                            <img class="rounded-full w-10 h-10" :src="photo" alt="profile" />
                            <h4 class="text-xs md:text-sm">ادمین - یک هفته پیش</h4>
                        </div> 
                    </div>
                    <div>
                        <p class="md:text-sm text-xs font-normal">«سلامت» در اصل به معنای تندرستی جسمی و روحی است، اما در زبان
                            فارسی گاهی در مفهوم استعاری هم به‌کار می‌رود؛ مثلاً در عبارت «سلامت نفس» به معنای درستی و
                            پاکی است.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
<script setup>
import BaseButton from "~/components/ui/BaseButton.vue";
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
</script>
