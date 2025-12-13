<template>
  <div class="w-full md:items-center p-8 flex md:flex-row flex-col gap-3 bg-[#F5F6F4]">
    <base-input class="md:w-[40%] " v-model="model" />
    <div
      class="flex shadow-[0px_7px_15px_-6px_#5C636940] md:w-1/4 justify-center items-center rounded-[50px]  border border-[#7FB77E] md:p-4 p-2 gap-2 md:gap-5">
      <div
        class="flex cursor-pointer gap-2 items-center border border-[#DADDD8] px-3 py-1 rounded-full  text-[#7FB77E]">
        <p class="text-[#7FB77E] md:text-base text-[10px]">فارسی</p> <down-arrow />
      </div>
      <div>
        <reverse />
      </div>
      <div
        class="flex items-center cursor-pointer gap-2 border border-[#DADDD8] px-3 py-1 rounded-full  text-[#7FB77E] ">
        <p class="text-[#7FB77E] md:text-base text-[10px]">انگلیسی</p> <down-arrow />
      </div>
    </div>
  </div>
</template>
<script setup>
import DownArrow from './icons/DownArrow.vue';
import reverse from './icons/reverse.vue';
const model = defineModel()
</script>
