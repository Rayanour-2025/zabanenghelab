<template>
    <div
        class="w-full flex flex-col justify-center items-end gap-[30px] px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
        <search-box-of-dashboard />
        <div dir="rtl" class="w-full p-5">
            <div class="w-full">
                <h2 class="text-3xl mb-6">فارسی:</h2>
                <div class="flex w-full gap-y-4 gap-x-8 flex-wrap">
                    <div class="bg-[#F5F6F4] p-4 border-[#DADDD8] border rounded-3xl md:w-[22%] w-full shadow-[0px_7px_15px_-6px_#5C636940] " >
                        <div class="border border-[#DADDD8] rounded-3xl bg-[#FFFFFF1A] h-24 w-full">
                        </div>
                        <div class="mt-6 text-sm">
                            <p>نویسنده: محمدعمید</p>
                            <p class="mt-2">واژه نامه معتبره فارسی با معنی و ریشه واژه ها</p>
                        </div>
                        <button class="bg-[#7FB77E] mt-5 text-[#F5F6F4] px-6 py-2 rounded-full">ویرایش</button>
                    </div>     
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "dashboard-admin"
})
</script>