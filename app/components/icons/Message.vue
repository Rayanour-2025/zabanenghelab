<template>
    <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_274_1389" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20"
            height="20">
            <path d="M20 0H0V20H20V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_274_1389)">
            <path d="M7.08203 8.75H12.9154" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10"
                stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M1.66602 9.63324V11.1916C1.66602 13.6916 3.33268 15.3582 5.83268 15.3582H9.16602L12.8743 17.8249C13.4243 18.1916 14.166 17.7999 14.166 17.1332V15.3582C16.666 15.3582 18.3327 13.6916 18.3327 11.1916V6.19157C18.3327 3.69157 16.666 2.0249 14.166 2.0249H5.83268C3.33268 2.0249 1.66602 3.69157 1.66602 6.19157"
                stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
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