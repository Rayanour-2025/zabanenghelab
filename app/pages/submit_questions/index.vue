<template>
    <div class="px-10 mx-auto container" dir="rtl">
        <h2 class="text-[#7FB77E] w-full font-bold md:font-extrabold md:text-4xl text-2xl mb-4">پرسش ها</h2>
        <p class="text-[#5C636980] mb-10 text-sm md:text-base ">به پرسش ‌ها براساس تعداد و اولویت رسیدگی خواهد شد.</p>
        <div class="flex gap-x-10 flex-col md:flex-row w-full">
            <div class="md:w-1/2 w-full">
                <div
                    class="h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
                    <div class="flex flex-col gap-6">
                        <div class="flex gap-y-3 flex-col">
                            <label for="question_type" class="font-medium text-xl">نوع پرسش:</label>
                            <input type="text" name="question_type" id="question_type" placeholder="عنوان جدید"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-6 flex-col">
                            <label for="descritption" class="font-medium text-xl">توضیحات:</label>
                            <textarea name="descritption" id="descritption" rows="8" placeholder="لینک / توضیحات..."
                                class="outline-none text-sm border p-3 rounded-2xl border-[#7FB77E]"></textarea>
                        </div>
                        <div class="w-full">
                            <base-button class="w-full">ثبت پرسش</base-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10 md:w-1/2 w-full">
                <h4 class=" flex items-center text-[#5C636980] justify-center mb-5 font-semibold text-3xl">پرسش های من</h4>
                <div class=" flex flex-col">
                    <div>
                        <div
                            class="bg-[#F0F1EE] shadow-[0px_5px_10px_-6px_#8B968B40] py-6 px-6 rounded-3xl flex flex-col gap-y-4">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-x-4">
                                    <img class="rounded-full w-10 h-10" :src="photo" alt="profile" />
                                    <h4 class="text-xs md:text-sm">سعید علوی</h4>
                                </div>
                                <div>
                                    <p class=" text-xs md:text-sm text-[#5C636980]">۱۴۰۱ آبان ۰۶ ۱۰:۳۲</p>
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
                                <p class="md:text-sm text-xs font-normal">«سلامت» در اصل به معنای تندرستی جسمی و روحی
                                    است،
                                    اما در زبان
                                    فارسی گاهی در مفهوم استعاری هم به‌کار می‌رود؛ مثلاً در عبارت «سلامت نفس» به معنای
                                    درستی
                                    و
                                    پاکی است.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import BaseButton from "~/components/ui/BaseButton.vue";
// import BaseButton from "~/components/ui/BaseButton.vue";
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
</script>
