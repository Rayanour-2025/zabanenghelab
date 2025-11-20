<template>
  <svg :width="width" :height="height"  :class="customClass" viewBox="0 0 20 20" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5176 4.30005C15.9009 4.30005 17.0176 5.41672 17.0176 6.80005V9.56675" stroke="#7FB77E"
          stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.98242 4.30005H10.8241" stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M5.61576 1.66675L2.98242 4.30006L5.61576 6.93342" stroke="#7FB77E" stroke-width="1.5"
          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.0158 15.6995H5.48242C4.09909 15.6995 2.98242 14.5829 2.98242 13.1995V10.4329" stroke="#7FB77E"
          stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.3828 18.3331L17.0161 15.6997L14.3828 13.0664" stroke="#7FB77E" stroke-width="1.5"
          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>
<script setup>
const props = defineProps({
  width: {type: [String, Number], default: 23},
  height: {type: [String, Number], default: 27},
  customClass: {},
})
</script>