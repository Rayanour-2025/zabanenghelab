<template>
    <svg :width="width" :height="height" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.30041 4.98286C9.33166 6.77661 8.48791 8.24536 6.41291 8.24536L4.74414 8.24536L3.07539 8.24536C1.00664 8.24536 0.156638 6.77661 1.19414 4.98286L2.03164 3.53911L2.86914 2.09536C3.90664 0.301612 5.60039 0.301612 6.63791 2.09536"
            stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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