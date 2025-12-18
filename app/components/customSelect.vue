<template>
  <div class="custom-select-container" v-click-outside="close">
    <label v-if="label" class="select-label" @click="toggle">
      {{ label }}:
    </label>

    <div class="custom-select">
      <div class="select-wrapper" @click="toggle">
        <div class="selected-text">
          {{ selectedLabel || 'انتخاب کنید' }}
        </div>
        <div class="arrow-icon" :class="{ 'open': isOpen }">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1L7 7L13 1" stroke="#BDC3C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <transition name="fade">
        <ul v-if="isOpen" class="options-list">
          <li v-for="option in options" :key="option.value" @click="selectOption(option)"
            :class="{ 'active': modelValue === option.value }">
            {{ option.label }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String, // پراپ جدید برای لیبل
    modelValue: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  data() {
    return { isOpen: false };
  },
  computed: {
    selectedLabel() {
      const option = this.options.find(opt => opt.value === this.modelValue);
      return option ? option.label : '';
    }
  },
  methods: {
    toggle() { this.isOpen = !this.isOpen; },
    close() { this.isOpen = false; },
    selectOption(option) {
      this.$emit('update:modelValue', option.value);
      this.isOpen = false;
    }
  },
  directives: {
    'click-outside': {
      mounted(el, binding) {
        el.clickOutsideEvent = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
      }
    }
  }
};
</script>

<style scoped>
.custom-select-container {
  display: flex;
  flex-direction: column;
  gap: 8px; 
  direction: rtl;
  font-family: sans-serif;
  width: 250px;
}

.select-label {
  font-size: 14px;  
  margin-right: 12px; 
  cursor: pointer;
}

.custom-select {
  position: relative;
}

.select-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  cursor: pointer;
  background-color: white;
}

.selected-text {
  color: #4eb58c;
  font-size: 16px;
}

.arrow-icon {
  transition: transform 0.3s;
  display: flex;
}

.arrow-icon.open {
  transform: rotate(180deg);
}

.options-list {
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.options-list li {
  padding: 10px 20px;
  cursor: pointer;
  text-align: right;
}

.options-list li:hover {
  background-color: #f5f5f5;
  color: #4eb58c;
}

.options-list li.active {
  background-color: #e8f7f0;
  color: #2d8a63;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>