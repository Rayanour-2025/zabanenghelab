<template>
  <svg :width="width" :height="height" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.25 11.75V0.75" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.91602 6.25H11.7493" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.75 6.25H5.93833" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.25 11.75V0.75" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
<script setup>
const props = defineProps({
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  }
})
</script>