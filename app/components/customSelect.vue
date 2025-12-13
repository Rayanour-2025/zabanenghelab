<template>
  <div class="relative w-full max-w-xs" ref="selectContainer">
    <label v-if="label" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>

    <button
      type="button"
      @click="toggleDropdown"
      class="relative w-full cursor-pointer rounded-lg bg-white py-2.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
      :class="{ 'ring-indigo-500': isOpen }"
    >
      <span class="block truncate" :class="{ 'text-gray-400': !selectedOption }">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>
      
      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg 
          class="h-5 w-5 text-gray-400 transition-transform duration-200" 
          :class="{ 'rotate-180': isOpen }"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        >
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-indigo-50 text-gray-900"
          :class="{ 'bg-indigo-100 text-indigo-900': modelValue === option.value }"
        >
          <span class="block truncate" :class="{ 'font-semibold': modelValue === option.value }">
            {{ option.label }}
          </span>

          <span
            v-if="modelValue === option.value"
            class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </span>
        </li>
        
        <li v-if="options.length === 0" class="py-2 pl-3 pr-9 text-gray-500 italic">
            گزینه‌ای موجود نیست
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: { // برای v-model
    type: [String, Number, Object],
    default: null
  },
  options: {
    type: Array,
    required: true,
    default: () => [] // ساختار: [{ label: 'تهران', value: 1 }]
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'انتخاب کنید...'
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const isOpen = ref(false);
const selectContainer = ref(null);

// پیدا کردن آبجکت کامل گزینه انتخاب شده بر اساس value
const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  emit('update:modelValue', option.value); // آپدیت مقدار v-model
  emit('change', option); // رویداد تغییر برای استفاده‌های دیگر
  isOpen.value = false;
};

// بستن منو وقتی بیرون کلیک می‌شود
const handleClickOutside = (event) => {
  if (selectContainer.value && !selectContainer.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* اسکرول بار زیبا برای لیست */
ul::-webkit-scrollbar {
  width: 6px;
}
ul::-webkit-scrollbar-track {
  background: #f1f1f1;
}
ul::-webkit-scrollbar-thumb {
  background: #c7c7c7;
  border-radius: 4px;
}
ul::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>