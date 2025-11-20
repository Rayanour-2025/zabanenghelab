<template>
    <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_274_1367" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20"
            height="20">
            <path d="M1.74846e-06 20L20 20L20 0L0 1.74846e-06L1.74846e-06 20Z" fill="white" />
        </mask>
        <g mask="url(#mask0_274_1367)">
            <path
                d="M2.1009 10.0413C1.68423 11.2079 2.43423 12.208 3.68423 12.208L7.01756 12.208C7.51756 12.208 7.93423 12.6246 7.8509 13.208L7.43423 15.8746C7.26756 16.6246 7.76756 17.458 8.51756 17.708C9.18423 17.958 10.0176 17.6246 10.3509 17.1246L13.7676 12.0413"
                stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M13.7676 4.70794L11.1842 2.70794C10.8509 2.37461 10.1009 2.20794 9.6009 2.20794L6.43423 2.20794C5.43423 2.20794 4.3509 2.95794 4.1009 3.95794L3.06756 7.09961"
                stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M18.0176 4.708L18.0176 12.8747C18.0176 14.0413 17.5176 14.458 16.3509 14.458L15.5176 14.458C14.3509 14.458 13.8509 14.0413 13.8509 12.8747L13.8509 4.708C13.8509 3.54133 14.3509 3.12467 15.5176 3.12467L16.3509 3.12467C17.5176 3.12467 18.0176 3.54133 18.0176 4.708Z"
                stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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