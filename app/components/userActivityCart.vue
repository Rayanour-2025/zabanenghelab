<template>
    <div class="flex w-full gap-x-2 items-center  ">
        <div dir="rtl"
            class="bg-[#7FB77E1A] flex flex-col md:gap-y-4 w-1/2 p-8 rounded-[50px] border-[#7FB77E] border-[0.5px] shadow-[0px_7px_15px_-6px_#5C636940]">
            <div class="flex items-center justify-between">
                <p class="text-[#5C636980] md:text-base text-xs">لغات درخواستی:</p>
                <p>0</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-[#5C636980]">لایک ها:</p>
                <p>{{ activity?.likes }}</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-[#5C636980]">دیسلابک ها:</p>
                <p>{{ activity?.dislikes }}</p>
            </div>
        </div>
        <div dir="rtl"
            class="bg-[#7FB77E1A] flex flex-col md:gap-y-4 p-8 w-1/2 rounded-[50px] border-[#7FB77E] border-[0.5px] shadow-[0px_7px_15px_-6px_#5C636940]">
            <div class="flex items-center justify-between">
                <p class="text-[#5C636980]">پیشنهاد ها:</p>
                <p>{{ activity?.suggestions }}</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-[#5C636980]">پرسش ها:</p>
                <p>{{ activity?.questions }}</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-[#5C636980]">پاسخ ها:</p>
                <p>{{ activity?.received_answers }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const prop = defineProps({
    activity: {
        required: true
    }
})
</script>