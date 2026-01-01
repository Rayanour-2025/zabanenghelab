<template>
    <div class="bg-[#F0F1EE] p-6 rounded-3xl shadow-[0px_5px_10px_-6px_#8B968B40]">
        <p class="text-[#5C636980] text-left">{{ comment?.created_at }}</p>
        <p class="text-sm">{{ comment?.body }}</p>
    </div>
</template>
<script setup>
const prop = defineProps({
    comment: {
        required: true
    }
})
</script>