<template>
  <div
    class="w-full  flex flex-col justify-center items-end  px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div dir="rtl" class="md:p-5 p-2 w-full flex flex-col  gap-y-6">
      <div class="w-full">
        <div class="flex w-full mb-4 items-center gap-3">
          <div v-for="item in filters" :key="item.id" @click="activeFilter = item.id" :class="[
            'p-4 rounded-[100px] cursor-pointer transition-all duration-300 ease-in-out',
            activeFilter === item.id
              ? 'bg-[#7FB77E] text-white'
              : 'bg-[#DDE8D6] text-[#7FB77E]'
          ]" style="box-shadow: 0px 2px 10px -6px #8B968B40;">
            {{ item.title }}
          </div>
        </div>
        <div class="flex w-full items-center gap-3">
          <template v-if="activeFilter == 1">
            <div class="flex flex-wrap gap-2">
              <div v-for="item in questionFilters" :key="item.id" @click="questionSearch = item.id" :class="[
                'p-3 sm:p-4 rounded-[15px] cursor-pointer border-[0.5px] border-[#7FB77E] transition-all duration-300 ease-in-out text-center text-xs sm:text-base',
                questionSearch === item.id
                  ? 'bg-[#7FB77E] text-white'
                  : 'bg-[#F5F6F4] text-[#7FB77E]'
              ]" style="box-shadow: 0px 2px 10px -6px #8B968B40;">
                {{ item.title }}
              </div>
            </div>
          </template>
          <template v-if="activeFilter == 2">
            <div class="flex w-full items-center justify-between">
              <div class="flex gap-3 items-center">
                <div class="bg-[#DDE8D6] text-[#7FB77E] px-4 py-4 rounded-xl" @click="sd">عمومی: </div>
                <div class="w-[40%]">
                  <PersianDatePicker v-model="myDate" format="jYYYY-jMM-jDD" display-format="jDD jMMMM jYYYY" />
                </div>
              </div>
              <div>
                <input type="text"
                  class="border-[0.5px] border-[#7FB77E] bg-[#F5F6F4] outline-none p-3 rounded-lg w-full"
                  placeholder="نام کاربری را وارد کنید">
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="md:p-5 p-2 w-full flex flex-col items-center gap-y-6">
      <div dir="rtl" class="bg-[#F5F6F4] w-full p-8 rounded-[55px]">
        <div class="flex items-center gap-3">
          <img :src="photo" class="md:w-12 w-10  md:h-12 h-10  rounded-full" alt="profile">
          <p class="mD:text-base text-xs">سعید علوی -
            <span class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</span>
          </p>
        </div>
        <div class="md:mt-5 mt-2">
          <p class="md:text-base text-xs">لغت درخواستی: <span class="text-[#7FB77E]">سلام</span></p>
        </div>
        <div class="mt-2 text-xs md:text-base">زبان: <span class="text-[#7FB77E]">فارسی</span></div>
        <div class="mt-5 text-sm md:text-base">
          <h3>توضیحات:</h3>
          <p class="mt-3 md:text-sm text-xs">سلام واژه‌ای کوتاه اما پر از معناست؛ نشانه‌ی صلح، احترام و انسان‌بودن.
            دنیایی که با
            "سلام" شروع بشه همیشه زیباتره، چون پشتش نیت دوستی و آرامش خوابیده. شاید ساده باشه، ولی ریشه‌ی تمام
            ارتباط‌های خوبه 🌿.</p>
        </div>
        <div class="mt-3">
          <button class="flex items-center gap-2 bg-[#7FB77E33] p-2 md:p-3 rounded-full">
            <plus width="12" height="12" />
            <span class="text-[#7FB77E] text-xs md:text-base">افزودن لغت</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png"
import plus from "~/components/icons/plus.vue"
import PersianDatePicker from "~/components/PersianDatePicker.vue"
definePageMeta({
  layout: 'dashboard-admin'
})
const filters = [
  { id: 1, title: 'پرسش ها' },
  { id: 2, title: 'پاسخ ها' },
  { id: 3, title: 'لغات ثبت شده' },
]
const questionFilters = [
  { id: 1, title: 'عمومی' },
  { id: 2, title: 'گزارش مشکل' },
  { id: 3, title: 'مشکل فنی' },
  { id: 4, title: 'حساب کاربری' },
  { id: 5, title: 'پیشنهاد' },
]
const activeFilter = ref('')
const questionSearch = ref('')
const myDate = ref('')
const sd = () => {
  console.log(myDate.value)
}
</script>

<style scoped>
textarea {
  height: auto;
  max-height: 130px;
  overflow: hidden;
}

.custom-offcanvas2 {
  overflow-y: auto;
  /* cursor: pointer; */
}

.custom-offcanvas2::-webkit-scrollbar {
  width: 8px;
}

.custom-offcanvas2::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
}


.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-slide-enter-from .modal-box {
  transform: translateY(100px);
  opacity: 0;
}

.modal-slide-enter-to .modal-box {
  transform: translateY(0);
  opacity: 1;
}

.modal-slide-leave-to .modal-box {
  transform: translateY(-100px);
  opacity: 0;
}

.modal-slide-enter-active .modal-box,
.modal-slide-leave-active .modal-box {
  transition: transform 0.5s cubic-bezier(0.22, 0.9, 0.33, 1),
    opacity 0.4s ease;
}

.modal-slide-enter-from {
  opacity: 0;
}

.modal-slide-enter-to {
  opacity: 1;
}

.modal-slide-leave-from {
  opacity: 1;
}

.modal-slide-leave-to {
  opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: opacity 0.4s ease;
}
</style>