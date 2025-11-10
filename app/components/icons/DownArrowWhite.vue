<template>
  <svg :width="width" :height="height" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.007 8.03125L8.36952 9.66875C7.88827 10.15 7.10077 10.15 6.61952 9.66875L2.55078 5.59375" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.4508 5.59375L11.8008 6.24375" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  color: { type: [String, Number], default: "#5C6369" },
  customClass: { },
})
</script>



+