<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <mask id="mask0_359_624" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
    <path d="M20 0H0V20H20V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_359_624)">
    <path d="M10.7664 3.125H8.56642C7.39141 3.125 6.27474 3.61667 5.48307 4.49167L2.54141 7.725C1.36641 9.01667 1.36641 10.9833 2.54141 12.275L5.48307 15.5083C6.27474 16.375 7.39141 16.875 8.56642 16.875H14.1664C16.4664 16.875 18.3331 15.0083 18.3331 12.7083V7.29167C18.3331 4.99167 16.4664 3.125 14.1664 3.125" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3335 12.0578L9.2168 7.94116" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12.6738 8.5995L13.3322 7.94116" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M9.2168 12.058L11.1168 10.1497" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round"/>
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



+