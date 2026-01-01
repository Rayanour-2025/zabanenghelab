<template>
  <div class="datepicker-container" v-click-outside="close">
    <input type="text" :value="displayDate" @click="toggle" readonly class="datepicker-input"
      placeholder="انتخاب تاریخ" />

    <div v-if="isOpen" class="calendar-panel">
      <div class="calendar-header">
        <button type="button" @click="changeMonth(1)">&lt;</button>
        <span class="month-year-label">{{ currentMonthName }} {{ currentYear }}</span>
        <button type="button" @click="changeMonth(-1)">&gt;</button>
      </div>

      <div class="calendar-days-header">
        <div v-for="day in weekDays" :key="day">{{ day }}</div>
      </div>

      <div class="calendar-grid">
        <div v-for="(date, index) in daysInMonth" :key="index" :class="['day-cell', {
          'is-selected': isSelected(date),
          'is-today': isToday(date),
          'empty-cell': !date
        }]" @click="selectDate(date)">
          {{ date ? date.format('jD') : '' }}
        </div>
      </div>

      <div class="calendar-footer">
        <button type="button" @click="goToToday" class="today-btn">امروز</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-jalaali';

// تنظیم فارسی‌سازی کل کتابخانه moment
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

export default {
  props: {
    modelValue: { type: String, default: '' },
    // فرمت ذخیره‌سازی (مثلاً برای دیتابیس)
    format: { type: String, default: 'jYYYY/jMM/jDD' },
    // فرمت نمایش به کاربر
    displayFormat: { type: String, default: 'jDD jMMMM jYYYY' }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isOpen: false,
      viewDate: moment(),
      selectedDate: this.modelValue ? moment(this.modelValue, this.format) : moment(),
      weekDays: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
    };
  },
  computed: {
    displayDate() {
      return this.selectedDate ? this.selectedDate.format(this.displayFormat) : '';
    },
    currentMonthName() {
      return this.viewDate.format('jMMMM');
    },
    currentYear() {
      return this.viewDate.format('jYYYY');
    },
    daysInMonth() {
      const startOfMonth = moment(this.viewDate).startOf('jMonth');
      const endOfMonth = moment(this.viewDate).endOf('jMonth');
      const days = [];

      const firstDayOfWeek = startOfMonth.day();
      const offset = (firstDayOfWeek + 1) % 7;
      for (let i = 0; i < offset; i++) days.push(null);

      let current = moment(startOfMonth);
      while (current <= endOfMonth) {
        days.push(moment(current));
        current.add(1, 'day');
      }
      return days;
    }
  },
  methods: {
    toggle() { this.isOpen = !this.isOpen; },
    close() { this.isOpen = false; },
    changeMonth(step) {
      this.viewDate = moment(this.viewDate).add(step, 'jMonth');
    },
    selectDate(date) {
      if (!date) return;
      this.selectedDate = date;
      this.$emit('update:modelValue', date.format(this.format));
      this.close();
    },
    goToToday() {
      const today = moment();
      this.viewDate = moment(today);
      this.selectDate(today);
    },
    isSelected(date) {
      return date && date.isSame(this.selectedDate, 'day');
    },
    isToday(date) {
      return date && date.isSame(moment(), 'day');
    }
  },
  directives: {
    clickOutside: {
      mounted(el, binding) {
        el.clickOutsideEvent = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener('mousedown', el.clickOutsideEvent);
      },
      unmounted(el) {
        document.removeEventListener('mousedown', el.clickOutsideEvent);
      }
    }
  }
};
</script>

<style scoped>
.datepicker-container {
  position: relative;
  display: inline-block;
  direction: rtl;
}

.datepicker-input {
  width: 50%;
  min-width: 200px;
  padding-inline: 0px;
  padding-block: 12px;
  border: 2px solid #7FB77E;
  border-radius: 8px;
  background-color: #F5F6F4;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  /* جلوگیری از زوم در موبایل */
  color: #333;
  outline: none;
}

.calendar-panel {
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #F5F6F4;
  border: 1px solid #7FB77E;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 90vw;
  max-width: 300px;
  padding: 15px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #7FB77E;
  padding-bottom: 10px;
}

.month-year-label {
  color: #444;
  font-weight: bold;
  font-size: 1.1rem;
}

.calendar-header button {
  background: #7FB77E;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.calendar-days-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 0.85rem;
  color: #7FB77E;
  font-weight: bold;
  margin-bottom: 8px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.day-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.day-cell:hover:not(.empty-cell) {
  background-color: #d1e5d1;
}

.is-selected {
  background-color: #7FB77E !important;
  color: white !important;
}

.is-today {
  border: 2px solid #7FB77E;
  color: #7FB77E;
  font-weight: 900;
}

.calendar-footer {
  margin-top: 15px;
  text-align: center;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.today-btn {
  background: none;
  border: 1px solid #7FB77E;
  color: #7FB77E;
  padding: 4px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
}

.today-btn:hover {
  background: #7FB77E;
  color: white;
}
</style>