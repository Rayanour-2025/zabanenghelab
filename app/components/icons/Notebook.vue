<template>
  <svg :width="width" :height="height" viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M36.1673 19.5V32C36.1673 32.2917 36.1673 32.5833 36.1465 32.875" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.75 34.0833V11.1667C0.75 2.83333 2.83333 0.75 11.1667 0.75H25.75C34.0833 0.75 36.1667 2.83333 36.1667 11.1667" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.6875 27.8335H36.1667V35.1252C36.1667 39.146 32.8958 42.4168 28.875 42.4168H8.04167C4.02083 42.4168 0.75 39.146 0.75 35.1252V33.771C0.75 30.5002 3.41667 27.8335 6.6875 27.8335Z" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.125 11.1665H26.7917" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.125 18.4585H20.5417" stroke="#7FB77E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: [String, Number], default: 23 },
  height: { type: [String, Number], default: 27 },
  customClass: { },
})
</script>
