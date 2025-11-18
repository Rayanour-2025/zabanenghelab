<template>
<svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height"undo viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  color: { type: String, default: '#7FB77E' },
  customClass: { },
})
</script>
