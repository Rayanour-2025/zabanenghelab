<template>
  <div dir="rtl" class="relative w-fit" ref="dropdownRef">
    
    <div 
      class="flex items-center gap-2 cursor-pointer group select-none py-2"
      @click="toggleDropdown"
    > 

      <span class="text-xl text-gray-400  pb-1 group-hover:text-gray-600 transition-colors duration-300  min-w-[60px] text-center">
        {{ selectedLabel }}
      </span>

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="2.5" 
        stroke="currentColor" 
        :class="[
          'w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform duration-300',
          isOpen ? 'rotate-180' : 'rotate-0'
        ]"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>

    <transition name="fade">
      <ul 
        v-if="isOpen" 
        class="absolute top-full left-0 mt-2 w-full min-w-[140px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-50 flex flex-col"
      >
        <li 
          v-for="lang in languages" 
          :key="lang.value"
          @click="selectLanguage(lang)"
          class="px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-[#7FB77E] cursor-pointer transition-colors duration-200 font-bold text-center border-b last:border-none border-gray-100"
          :class="{'text-[#7FB77E] bg-gray-50': modelValue === lang.value}"
        >
          {{ lang.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// دریافت مقدار و تغییر آن (v-model)
const props = defineProps({
  modelValue: {
    type: String,
    default: 'fa'
  }
});
const emit = defineEmits(['update:modelValue']);

// لیست زبان‌ها
const languages = [
  { label: 'فارسی', value: 'fa' },
  { label: 'English', value: 'en' },
  { label: 'العربیة', value: 'ar' }
];

const isOpen = ref(false);
const dropdownRef = ref(null);

// پیدا کردن لیبل زبان انتخاب شده برای نمایش
const selectedLabel = computed(() => {
  const selected = languages.find(l => l.value === props.modelValue);
  return selected ? selected.label : 'زبان';
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (lang) => {
  emit('update:modelValue', lang.value);
  isOpen.value = false;
};

// بستن منو وقتی بیرون از کامپوننت کلیک شد
const closeIfClickedOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeIfClickedOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', closeIfClickedOutside);
});
</script>

<style scoped>
/* انیمیشن ساده برای باز و بسته شدن */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>