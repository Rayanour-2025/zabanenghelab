<template>
    <div dir="rtl"
        class="bg-[#7FB77E1A] p-8 rounded-[50px] border-[#7FB77E] border-[0.5px] shadow-[0px_7px_15px_-6px_#5C636940]">
        <p class="font-medium text-lg mb-6">{{ info?.data.username }}</p>
        <div class="flex flex-col gap-y-3">
            <p>نام: <span class="text-[#5C636980]">{{ info?.data.first_name }}</span></p>
            <p>نام خوانوادگی: <span class="text-[#5C636980]">{{ info?.data.last_name }}</span></p>
            <p>جنسیت: <span class="text-[#5C636980]">{{ info?.data.gender }}</span></p>
            <p>شماره همراه: <span class="text-[#5C636980]">{{ info?.data.mobile }}</span></p>
            <p>ایمیل: <span class="text-[#5C636980]">{{ info?.data.email }}</span></p>
            <p>عضویت: <span class="text-[#5C636980]">{{ info?.data?.joined_at }}</span></p>
        </div>
        <base-button class="mt-3" @click="goToEditPage">ویرایش اطلاعات</base-button>
    </div>
</template>
<script setup>
import BaseButton from '~/components/ui/BaseButton.vue';
const prop = defineProps({
    info: { 
        required: true
    }
})
const goToEditPage = () => {
    navigateTo('/user_dashboard')
}
</script>