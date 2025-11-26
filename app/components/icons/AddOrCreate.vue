<template>
  <svg :width="width" :height="height" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <mask id="mask0_259_159" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
      <path d="M28 0H0V28H28V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_259_159)">
      <path d="M14 21V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.666 14H20.9993" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 14H13.6033" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 21V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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