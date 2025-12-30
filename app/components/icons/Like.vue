<template>
    <svg :width="width" :height="height" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.6667 8.50171C17.0833 7.33505 16.3333 6.33502 15.0833 6.33502H11.75C11.25 6.33502 10.8333 5.91835 10.9167 5.33502L11.3333 2.66835C11.5 1.91835 11 1.08502 10.25 0.835016C9.58335 0.585016 8.75002 0.918349 8.41668 1.41835L5 6.50168"
            :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M5 13.835L7.58335 15.835C7.91668 16.1684 8.66668 16.335 9.16668 16.335H12.3334C13.3334 16.335 14.4167 15.585 14.6667 14.585L15.7 11.4434"
            :stroke="color" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M0.75 13.835V5.66829C0.75 4.50163 1.25 4.08496 2.41667 4.08496H3.25C4.41667 4.08496 4.91667 4.50163 4.91667 5.66829V13.835C4.91667 15.0016 4.41667 15.4183 3.25 15.4183H2.41667C1.25 15.4183 0.75 15.0016 0.75 13.835Z"
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