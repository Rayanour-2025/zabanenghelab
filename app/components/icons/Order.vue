<template>
    <svg :width="width" :height="height" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_334_1510)">
            <mask id="mask0_334_1510" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22"
                height="22">
                <path d="M22 0H0V22H22V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_334_1510)">
                <path d="M9.16602 6.4165H19.2493" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.75 6.4165H5.5" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5.5 11H16.5" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M9.16602 15.583H12.8327" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_334_1510">
                <rect width="22" height="22" fill="white" />
            </clipPath>
        </defs>
    </svg>


</template>
<script setup>
// import { type } from 'os';

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