<template>
  <div class="w-full items-center p-8 flex gap-3 bg-[#F5F6F4]">
    <base-input class="w-[40%] " />
    <div
      class="flex shadow-[0px_7px_15px_-6px_#5C636940] w-1/4 justify-center items-center rounded-[50px]  border border-[#7FB77E] p-4 gap-5">
      <div
        class="flex cursor-pointer gap-2 items-center border border-[#DADDD8] px-3 py-1 rounded-full  text-[#7FB77E]">
        <p class="text-[#7FB77E]">فارسی</p> <down-arrow />
      </div>
      <div>
        <reverse />
      </div>
      <div
        class="flex items-center cursor-pointer gap-2 border border-[#DADDD8] px-3 py-1 rounded-full  text-[#7FB77E] ">
        <p class="text-[#7FB77E]">انگلیسی</p> <down-arrow />
      </div>
    </div>
  </div>
</template>
<script setup>
import DownArrow from './icons/DownArrow.vue';
import reverse from './icons/reverse.vue';
</script>
