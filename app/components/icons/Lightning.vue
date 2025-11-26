<template>
  <svg :width="width" :height="height" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.784 11.2106V3.91898C21.784 0.418976 19.8882 -0.289358 17.5757 2.33564L1.80485 20.2524C-0.132646 22.4399 0.679854 24.2524 3.61735 24.2524H10.0549V39.2524C10.0549 42.7524 11.9507 43.4607 14.2632 40.8357L30.034 22.919C31.9715 20.7315 31.159 18.919 28.2215 18.919H21.784" :stroke="stroke" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  stroke: { type: String, default:"#7FB77E"},
  customClass: { },
})
</script>
