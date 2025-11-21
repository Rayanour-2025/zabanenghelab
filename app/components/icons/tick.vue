<template>
    <svg :width="width" :height="height" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3.08333 5.41667C1.625 7.365 0.75 9.79167 0.75 12.4167C0.75 18.8567 5.97667 24.0833 12.4167 24.0833C18.8567 24.0833 24.0833 18.8567 24.0833 12.4167C24.0833 5.97667 18.8567 0.75 12.4167 0.75C10.7483 0.75 9.15 1.1 7.715 1.74167"
            stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.916 10.5266L17.2227 9.20825" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7.60938 12.4167L10.8061 15.6251L13.7811 12.6617" stroke="#7FB77E" stroke-width="1.5"
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
    }
})
</script>