<template>
    <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_274_1378" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20"
            height="20">
            <path d="M20 0H0V20H20V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_274_1378)">
            <path
                d="M17.8991 9.95875C18.3158 8.79208 17.5658 7.79205 16.3158 7.79205H12.9824C12.4824 7.79205 12.0658 7.37538 12.1491 6.79205L12.5658 4.12538C12.7324 3.37538 12.2324 2.54205 11.4824 2.29205C10.8158 2.04205 9.98244 2.37538 9.64911 2.87538L6.23242 7.95871"
                stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M6.23242 15.2921L8.81577 17.2921C9.14911 17.6254 9.8991 17.7921 10.3991 17.7921H13.5658C14.5658 17.7921 15.6491 17.0421 15.8991 16.0421L16.9324 12.9004"
                stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M1.98242 15.292V7.12533C1.98242 5.95866 2.48242 5.54199 3.64909 5.54199H4.48242C5.64909 5.54199 6.14909 5.95866 6.14909 7.12533V15.292C6.14909 16.4587 5.64909 16.8753 4.48242 16.8753H3.64909C2.48242 16.8753 1.98242 16.4587 1.98242 15.292Z"
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