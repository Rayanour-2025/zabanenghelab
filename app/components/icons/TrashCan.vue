<template>
  <svg :width="width" :height="height" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="customClass">
    <path d="M17.25 4.39876C14.1975 4.09626 11.1267 3.94043 8.065 3.94043C6.25 3.94043 4.435 4.0321 2.62 4.21543L0.75 4.39876" stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.79102 3.4725L5.99268 2.27167C6.13935 1.40083 6.24935 0.75 7.79852 0.75H10.2002C11.7493 0.75 11.8685 1.4375 12.006 2.28083L12.2077 3.4725" stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.279 7.29541L14.6832 16.5262C14.5824 17.9654 14.4999 19.0837 11.9424 19.0837H6.05737C3.49987 19.0837 3.41737 17.9654 3.31654 16.5262L2.7207 7.29541" stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.46875 14.0415H10.5212" stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.70898 10.375H11.2923" stroke="#E57373" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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