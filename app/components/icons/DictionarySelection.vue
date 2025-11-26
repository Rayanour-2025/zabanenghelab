<template>
  <svg :width="width" :height="height" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <mask id="mask0_261_409" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
    <path d="M22 0H0V22H22V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_261_409)">
    <path d="M3.66732 5.50016C2.52148 7.031 1.83398 8.93766 1.83398 11.0002C1.83398 16.0602 5.94065 20.1668 11.0007 20.1668C16.0607 20.1668 20.1673 16.0602 20.1673 11.0002C20.1673 5.94016 16.0607 1.8335 11.0007 1.8335C9.68982 1.8335 8.43398 2.1085 7.30648 2.61266" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.75 9.51533L14.7767 8.47949" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.22461 11L9.73629 13.5208L12.0738 11.1925" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  customClass: { },
})
</script>
