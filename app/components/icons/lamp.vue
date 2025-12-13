<template>
 <svg :width="width" :height="height" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3334 5.20266C18.5105 9.57768 16.2188 14.2235 12.8542 16.2548V17.4631C12.8542 17.7652 12.9688 18.4631 11.8542 18.4631H6.11458C4.96875 18.4631 5.11458 18.0152 5.11458 17.4631V16.2548C2.71875 14.8068 0.75 11.9839 0.75 8.98391C0.75 3.82766 5.48958 -0.21401 10.8438 0.952657C11.625 1.12974 12.3855 1.41099 13.073 1.79641" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.32227 21.5869C7.70768 20.9098 10.2285 20.9098 12.6139 21.5869" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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