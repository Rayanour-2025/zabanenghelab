<template>
  <div
    class="w-full  flex flex-col justify-center items-end  px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div dir="rtl" class="md:p-5 p-2 w-full flex flex-col  gap-y-6">
      <div class="w-full">
        <div class="flex w-full mb-4 items-center gap-3">
          <div v-for="item in filters" :key="item.id" @click="activeFilter = item.id; filterData(item)" :class="[
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
              <div v-for="item in questionFilters" :key="item.id" @click="questionSearch = item.id; filterQ(item)"
                :class="[
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
      <temp-request v-for="item in data?.data" :filter-id="activeFilter"  :item="item" :key="item.id" />
      <loadingTemp v-if="loading" />
    </div>
  </div>
</template>

<script setup> 
import loadingTemp from "~/components/loadingTemp.vue"
import TempRequest from "~/components/template/TempRequest.vue"
import { useFetchDashboardData } from "#imports"
import { useAuthToken } from '~/composables/useAuthCrypto'
import PersianDatePicker from "~/components/PersianDatePicker.vue"
definePageMeta({
  layout: 'dashboard-admin'
})
const { loading, fetchDashboardData, responseData: data } = useFetchDashboardData()
const { token: AUTH_TOKEN, isLoggedIn } = useAuthToken()
const filters = [
  { id: 1, title: 'پرسش ها' },
  { id: 2, title: 'پاسخ ها' },
  { id: 3, title: 'لغات ثبت شده' },
]
const questionFilters = [
  { id: 4, title: 'سایر' },
  { id: 2, title: 'مشکل فنی' },
  { id: 1, title: 'گزارش مشکل' },
  { id: 3, title: 'حساب کاربری' },
  { id: 5, title: 'پیشنهاد لغت' },
]
const activeFilter = ref(2)
const questionSearch = ref('')
const myDate = ref('')
const params = ref({})
const filterData = async (item) => {
  if (item.id == 2) {
    await fetchDashboardData(AUTH_TOKEN.value, 'admin/questions/answered')
    console.log(data.value)
  } else if (item.id == 1) {
    await fetchDashboardData(AUTH_TOKEN.value, 'admin/questions/unanswered')
  } else if (item.id = 3) {
    await fetchDashboardData(AUTH_TOKEN.value, 'admin/questions/suggestions/approved')
    console.log(data.value.data)
  }
}
const filterQ = async (item) => {
  if (item.id == 5) {
    await fetchDashboardData(AUTH_TOKEN.value, 'admin/questions/suggestions/pending')
    console.log(data.value.data)
  } else {
    params.value.type = item.id
    await fetchDashboardData(AUTH_TOKEN.value, 'admin/questions/unanswered', params.value)
  }
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