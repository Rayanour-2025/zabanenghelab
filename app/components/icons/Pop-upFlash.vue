<template>
  <svg :width="width" :height="height" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M1.33644 5.1C-0.0385634 2.70833 1.08644 0.75 3.8531 0.75H6.07813H8.30313C11.0615 0.75 12.1948 2.70833 10.8115 5.1L9.6948 7.025L8.57813 8.95C7.1948 11.3417 4.93646 11.3417 3.5531 8.95" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  customClass: { },
})
</script>


 