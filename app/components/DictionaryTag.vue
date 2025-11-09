<!-- /home/hamyar/Desktop/My_Folder/zaban-enghelab/app/components/DictionaryTag.vue -->
<template>
  <div class="flex flex-row items-center py-[10px] px-[18px] gap-[8px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[50px]">
    <span class="font-zain font-extrabold text-[15px] leading-[28px] text-[#7FB77E] text-right">
      {{ title }}
    </span>
    <!-- انتخاب نشده -->
    <div class="flex items-center justify-center w-[40px] h-[40px] p-[9px] bg-white border border-[#7FB77E] rounded-full"></div>
    <!-- انتخاب شده -->
    <!-- <div class="flex items-center justify-center w-[40px] h-[40px] p-[9px] bg-[#7FB77E] border border-[#7FB77E] rounded-full">
      <icons-dictionary-selection class="w-5 h-5" />
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>


