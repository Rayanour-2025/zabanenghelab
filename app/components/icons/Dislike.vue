<template>
    <svg :width="width" :height="height" viewBox="0 0 18 18" fill="none"  
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.864567 8.58325C0.4479 9.74991 1.1979 10.7499 2.4479 10.7499L5.78123 10.7499C6.28123 10.7499 6.6979 11.1666 6.61457 11.7499L6.1979 14.4166C6.03123 15.1666 6.53123 15.9999 7.28123 16.2499C7.9479 16.4999 8.78123 16.1666 9.11457 15.6666L12.5312 10.5833"
             :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M12.5312 3.24994L9.9479 1.24994C9.61457 0.916602 8.86457 0.749935 8.36457 0.749935L5.1979 0.749936C4.1979 0.749936 3.11457 1.49994 2.86457 2.49994L1.83123 5.6416"
             :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M16.7812 3.24999L16.7812 11.4167C16.7812 12.5833 16.2812 13 15.1146 13L14.2813 13C13.1146 13 12.6146 12.5833 12.6146 11.4167L12.6146 3.24999C12.6146 2.08333 13.1146 1.66666 14.2812 1.66666L15.1146 1.66666C16.2812 1.66666 16.7812 2.08333 16.7812 3.24999Z"
             :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
    color: {
        type: String,
        required: true
    }
})
</script>