<template>
    <svg :width="width" :height="height" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 0.75V15.75" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7.2 4.875C9.675 5.925 9.675 7.725 7.35 8.925L1.125 12" stroke="#2B2B2B" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.125 2.25L4.5675 3.735" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
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
    },
})
</script>