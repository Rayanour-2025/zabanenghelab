<template>
    <svg :width="width" :height="height" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.4525 15.75C6.645 15.75 7.125 15.3 7.125 14.175V2.325C7.125 1.2 6.645 0.75 5.4525 0.75H2.4225C1.23 0.75 0.75 1.2 0.75 2.325V14.175C0.75 15.3 1.23 15.75 2.4225 15.75"
            stroke="#5A6E5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M11.0475 0.75C9.855 0.75 9.375 1.1775 9.375 2.235V5.6325C9.375 6.6975 9.855 7.1175 11.0475 7.1175H14.0775C15.27 7.1175 15.75 6.69 15.75 5.6325V2.235C15.75 1.1775 15.27 0.75 14.0775 0.75"
            stroke="#5A6E5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M15.75 14.0775V11.0475C15.75 9.855 15.27 9.375 14.0775 9.375H11.0475C9.855 9.375 9.375 9.855 9.375 11.0475V14.0775C9.375 15.27 9.855 15.75 11.0475 15.75H14.0775C15.27 15.75 15.75 15.27 15.75 14.0775Z"
            stroke="#5A6E5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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