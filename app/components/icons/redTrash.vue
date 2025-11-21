<template>
    <svg :width="width" :height="height" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1495_457)">
            <mask id="mask0_1495_457" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28"
                height="28">
                <path d="M28 0H0V28H28V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1495_457)">
                <path
                    d="M24.5 6.97713C20.615 6.59213 16.7067 6.3938 12.81 6.3938C10.5 6.3938 8.19 6.51047 5.88 6.7438L3.5 6.97713"
                    stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M9.91602 5.79825L10.1727 4.26992C10.3593 3.16159 10.4993 2.33325 12.471 2.33325H15.5277C17.4994 2.33325 17.651 3.20825 17.826 4.28159L18.0827 5.79825"
                    stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M21.9911 10.6641L21.2328 22.4124C21.1045 24.244 20.9995 25.6674 17.7445 25.6674H10.2545C6.99948 25.6674 6.89448 24.244 6.76615 22.4124L6.00781 10.6641"
                    stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.0508 19.25H15.9358" stroke="#E57373" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M11.084 14.5833H16.9173" stroke="#E57373" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
        </g>
        <defs>
            <clipPath id="clip0_1495_457">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
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