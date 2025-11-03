<template>
  <svg :width="width" :height="height" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M14.5176 4.30029C15.9009 4.30029 17.0176 5.41696 17.0176 6.80029V9.56699" stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.98242 4.30029H10.8241" stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.61576 1.6665L2.98242 4.29981L5.61576 6.93318" stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.0158 15.6998H5.48242C4.09909 15.6998 2.98242 14.5831 2.98242 13.1998V10.4331" stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.3828 18.3331L17.0161 15.6997L14.3828 13.0664" stroke="#7FB77E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  customClass: { },
})
</script>
