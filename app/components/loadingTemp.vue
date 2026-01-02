<template>
    <div class="flex items-center justify-center gap-2 py-4 w-full h-full" dir="ltr">
        <div class="w-3 h-3 rounded-full bg-[#7FB77E] animate-bounce" style="animation-delay: 0s;"></div>
        <div class="w-3 h-3 rounded-full bg-[#7FB77E] animate-bounce" style="animation-delay: 0.15s;"></div>
        <div class="w-3 h-3 rounded-full bg-[#7FB77E] animate-bounce" style="animation-delay: 0.3s;"></div>
    </div>
</template>

<script setup>
// هیچ پراپ یا اسکریپت خاصی نیاز نیست
</script>

<style scoped>
/* تنظیم دقیق‌تر انیمیشن برای نرم‌تر بودن */
.animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
        opacity: 0.6;
    }

    50% {
        transform: translateY(-8px);
        /* ارتفاع پرش */
        opacity: 1;
    }
}
</style>