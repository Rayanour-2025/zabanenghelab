<template>
  <div 
    @click="$emit('toggle')"
    :class="[
      'flex flex-row items-center py-[10px] px-[18px] gap-[8px] rounded-[50px] cursor-pointer transition-all duration-300 ease-in-out select-none',
      isSelected 
        ? 'bg-[#7FB77E] shadow-lg shadow-[#7FB77E]/30' 
        : 'bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] hover:shadow-md hover:bg-[#EAEBE9]'
    ]"
  >
    <span 
      :class="[
        'font-zain font-extrabold text-[15px] leading-[28px] text-right transition-colors duration-300',
        isSelected ? 'text-white' : 'text-[#2B2B2B]' // تغییر رنگ متن در حالت انتخاب
      ]"
    >
      {{ title }}
    </span>
    
    <div 
      :class="[
        'flex items-center justify-center w-[25px] h-[25px] p-[3px] rounded-full transition-all duration-300 ease-in-out border-2',
        isSelected 
          ? 'bg-white border-white scale-100' 
          : 'bg-[#7FB77E] border-[##7FB77E] scale-100'
      ]"
    >
      <icons-dictionary-selection v-if="isSelected" class="w-5 h-5" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  dictionaryId: [String, Number], 
  isSelected: Boolean, 
});

defineEmits(['toggle']); 
</script>