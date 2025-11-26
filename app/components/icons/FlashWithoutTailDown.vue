<template>
  <svg :width="width" :height="height" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M0.183056 0.183056C0.427131 -0.0610188 0.822865 -0.0610188 1.06694 0.183056L6.66666 5.78275L12.2664 0.183056C12.5105 -0.0610188 12.9062 -0.0610188 13.1502 0.183056C13.3943 0.427131 13.3943 0.822864 13.1502 1.06694L7.10858 7.10858C6.8645 7.35266 6.46883 7.35266 6.22475 7.10858L0.183056 1.06694C-0.0610187 0.822864 -0.0610187 0.427131 0.183056 0.183056Z" :fill="color"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  color: { type: String, default: '#7FB77E' },
  customClass: { },
})
</script>
