<template>
  <div
    class="flex justify-center items-center px-[22px] py-[10px] bg-[#F5F6F4] rounded-[100px] shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] hover:bg-[#DADDD8] cursor-pointer transition-colors duration-300"
  >
    <span class="font-bold text-[13px] leading-[22px] text-[#2B2B2B]">{{
      title
    }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>