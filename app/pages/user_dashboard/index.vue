<template>
    <div>
        <div
            class="bg-[#7FB77E1A] mb-16 border border-[#7FB77E] w-full  h-24 flex pr-10 pt-10 justify-end items-start  shadow-[0px_7px_15px_-6px_#5C636940]">
            <div class="bg-[#FFFFFF1A] shadow-[0px_7px_15px_-6px_#5C636940] w-40 h-40 rounded-full"></div>
        </div>
        <div class="mx-auto forms px-5 container">
            <div dir="rtl" class="w-full flex md:flex-row flex-col items-start justify-start gap-8 px-7">
                <div
                    class="md:w-1/3 w-full h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
                    <h4 class="text-2xl mb-4">مشخصات</h4>
                    <div class="flex flex-col gap-6">
                        <div class="flex gap-y-3 flex-col">
                            <label for="first_name" class=" text-[#5C636980]">نام:</label>
                            <input type="text" name="first_name" id="first_name" placeholder="نام"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-3 flex-col">
                            <label for="last_name" class=" text-[#5C636980]">نام خانوادگی:</label>
                            <input type="text" name="last_name" id="last_name" placeholder="نام خانوادگی"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-4">
                            <div class="text-[#5C636980]">جنسیت:</div>
                            <div>
                                <input type="radio" id="man" name="gender" class="peer hidden" />
                                <label for="man" class="cursor-pointer peer-checked:text-red-500">
                                    مرد
                                </label>
                            </div>

                            <div>
                                <input type="radio" id="woman" name="gender" class="peer hidden" />
                                <label for="woman" class="cursor-pointer peer-checked:text-red-500">
                                    زن
                                </label>
                            </div>

                        </div>
                        <div class="flex gap-y-3 flex-col">
                            <label for="birth" class=" text-[#5C636980]">تاریخ تولد:</label>
                            <input type="text" name="birth" id="birth" placeholder="تاریخ تولد"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-3 flex-col">
                            <label for="about-me" class=" text-[#5C636980]">درباره من:</label>
                            <textarea name="about-me" id="about-me" rows="4" placeholder="درباره من"
                                class="outline-none text-sm border p-3 rounded-2xl border-[#7FB77E]"></textarea>
                        </div>
                    </div>
                </div>
                <div
                    class="md:w-1/3 w-full h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
                    <h4 class="text-2xl mb-4">اطلاعات تماس</h4>
                    <div class="flex flex-col gap-6">
                        <div class="flex gap-y-3 flex-col">
                            <label for="phone_namber" class=" text-[#5C636980]">شماره همراه:</label>
                            <input type="text" name="phone_nambe" id="phone_namber" placeholder="شماره همراه"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-3 flex-col">
                            <label for="email" class=" text-[#5C636980]">ایمیل / پست الکترونیکی:</label>
                            <input type="text" name="email" id="email" placeholder="ایمیل"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                    </div>
                </div>
                <div
                    class="md:w-1/3 w-full h-auto p-6 rounded-[50px] bg-[#7FB77E1A] border-[#7FB77E] border shadow-[0px_7px_15px_-6px_#5C636940]">
                    <h4 class="text-2xl mb-4">امنیت</h4>
                    <div class="flex flex-col gap-6">
                        <div class="flex gap-y-3 flex-col">
                            <label for="now_pass" class=" text-[#5C636980]">رمز عبور کنونی:</label>
                            <input type="text" name="now_pass" id="now_pass" placeholder="رمز عبور کنونی"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-3 flex-col">
                            <label for="new_pass" class=" text-[#5C636980]">رمز عبور جدید:</label>
                            <input type="text" name="new_pass" id="new_pass" placeholder="رمز عبور جدید"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                        <div class="flex gap-y-3 flex-col">
                            <label for="repeat_pass" class=" text-[#5C636980]">تکرار رمز عبور جدید:</label>
                            <input type="text" name="repeat_pass" id="repeat_pass" placeholder="تکرار رمز عبور جدید"
                                class="outline-none border p-3 rounded-full border-[#7FB77E] ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
onMounted(() => {
    setTimeout(() => {
        document.querySelector(".forms").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, 1000);
})
</script>