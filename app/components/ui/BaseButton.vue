<script setup>
const props = defineProps({
  textColor: {
    type: String,
    default: "#F0F1EE",
  },
  bgColor: {
    type: String,
    default: "#7FB77E",
  },
  active: {
    type: Boolean,

    default: false,
  },
});
</script>

<template>
  <button
    class="rounded-2xl shadow-[0px_5px_10px_-6px_#8B968B40] px-5 py-3 text-sm  md:text-lg"
    :style="
      active
        ? {
            color: bgColor,
            backgroundColor: textColor,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: bgColor,
          }
        : { color: textColor, backgroundColor: bgColor }
    "
  >
    <slot />
  </button>
</template>
