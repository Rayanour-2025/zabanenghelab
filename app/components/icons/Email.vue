<template>
  <svg :width="width" :height="height" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M29 3.11111V17.8889C29 19.0548 28.0357 20 26.8462 20H3.15385C1.96431 20 1 19.0548 1 17.8889V3.11111M29 3.11111C29 1.94518 28.0357 1 26.8462 1H3.15385C1.96431 1 1 1.94518 1 3.11111M29 3.11111L16.226 11.7792C15.4884 12.2797 14.5116 12.2797 13.774 11.7792L1 3.11111" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  customClass: { },
})
</script>
