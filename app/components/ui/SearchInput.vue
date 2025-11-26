<template>
  <div class="flex items-center justify-center gap-4">
    <div class="relative w-[400px]">
      <input :value="query" @input="$emit('update:query', $event.target.value)" type="text" placeholder="جستجوی لغت مورد نظر..." class="w-full h-[50px] pl-[14px] pr-[50px] text-right text-[13px] leading-[22px] text-[#2B2B2B] font-normal placeholder:text-[#DADDD8] bg-[#F5F6F4] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] focus:outline-none" />
      <icons-search class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-[#2B2B2B] pointer-events-none" />

      <div v-if="query.length >= 2 && !searching && searchResults.length" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-xl rounded-xl max-h-80 overflow-y-auto z-10 p-2 custom-offcanvas2" >
        <ul class="divide-y divide-gray-100">
          <li v-for="word in searchResults" :key="word.id" class="flex justify-between items-center py-3 px-2 hover:bg-gray-50 transition-all duration-200" >
            <div class="flex items-center gap-2">
              <button @click="$emit('deleteWord', word.id, word.word)" :disabled="deleting" class="flex-shrink-0 p-2 text-white bg-red-500 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md tooltip" title="حذف لغت" >
                <icons-trash class="w-4 h-4" />
              </button>

              <button @click="$emit('editWord', word)" class="flex-shrink-0 p-2 text-white bg-[#7FB77E] rounded-full hover:bg-green-700 transition-colors duration-200 shadow-md tooltip" title="ویرایش لغت" >
                <icons-pencil class="w-4 h-4" />
              </button>
            </div>

            <div class="flex flex-col items-end justify-center flex-grow min-w-0 pr-2" >
              <div class="flex items-center justify-end w-full gap-2">
                <span v-if="word.pronunciation" class="text-xs text-gray-400 font-normal italic" >[{{ word.pronunciation }}]</span >
                <span class="font-bold text-sm text-[#2B2B2B] truncate text-right" >{{ word.word }}</span >
              </div>
              <span class="text-gray-500 text-xs mt-1 truncate w-full inline-block text-right" >{{ word.meaning }}</span >
            </div>
          </li>
        </ul>
      </div>

      <div v-else-if="searching" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-xl rounded-xl px-4 py-3 text-center text-sm text-[#7FB77E] z-10" >
        <div class="flex items-center justify-center gap-2">
          <svg class="animate-spin h-4 w-4 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" ></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path>
          </svg>
          <span>...درحال جستجو</span>
        </div>
      </div>

      <div v-else-if="query.length >= 2 && searchResults.length === 0" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-xl rounded-xl px-4 py-3 text-center text-sm text-gray-500 z-10" >
        نتیجه‌ای برای "{{ query }}" یافت نشد
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  query: {
    type: String,
    required: true,
  },
  searchResults: {
    type: Array,
    default: () => [],
  },
  searching: {
    type: Boolean,
    default: false,
  },
  deleting: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:query', 'deleteWord', 'editWord']);
</script>

<style scoped>
.custom-offcanvas2 {
  overflow-y: auto;
}
.custom-offcanvas2::-webkit-scrollbar {
  width: 8px;
}
.custom-offcanvas2::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
}
</style>