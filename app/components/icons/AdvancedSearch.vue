<template>
  <svg :width="width" :height="height" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M23.9577 4.1665C34.8952 4.1665 43.7493 13.0207 43.7493 23.9582C43.7493 34.8957 34.8952 43.7498 23.9577 43.7498C13.0202 43.7498 4.16602 34.8957 4.16602 23.9582C4.16602 16.2498 8.56185 9.58317 14.9993 6.31234" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M45.8327 45.8332L41.666 41.6665" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  customClass: { },
})
</script>
