<template>
    <svg :width="width" :height="height" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.75 2.75C4.75 1.65 3.85 0.75 2.75 0.75C1.65 0.75 0.75 1.65 0.75 2.75C0.75 3.85 1.65 4.75 2.75 4.75C3.85 4.75 4.75 3.85 4.75 2.75Z"
            stroke="#2B2B2B" stroke-width="1.5" />
        <path
            d="M4.75 16.75C4.75 15.65 3.85 14.75 2.75 14.75C1.65 14.75 0.75 15.65 0.75 16.75C0.75 17.85 1.65 18.75 2.75 18.75C3.85 18.75 4.75 17.85 4.75 16.75Z"
            stroke="#2B2B2B" stroke-width="1.5" />
        <path
            d="M2.75 7.75C1.65 7.75 0.75 8.65 0.75 9.75C0.75 10.85 1.65 11.75 2.75 11.75C3.85 11.75 4.75 10.85 4.75 9.75"
            stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

</template>
<script setup>
const props = defineProps({
    width: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    }
})
</script>