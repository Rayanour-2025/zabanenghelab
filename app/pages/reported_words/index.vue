<template>
  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div dir="rtl" class="md:p-5 flex w-full flex-col items-center gap-y-6">
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
          <template v-if="activeFilter == 2">
            <div class="flex flex-col lg:flex-row w-full items-start lg:items-center justify-between gap-4">
              <div class="flex flex-col md:flex-row gap-3 items-start md:items-center w-full lg:w-auto">
                <div class="flex items-center flex-wrap gap-2 w-full md:w-auto justify-between md:justify-start">
                  <div class="w-full md:w-auto">
                    <PersianDatePicker v-model="fromDate" format="jYYYY-jMM-jDD" display-format="jDD jMMMM jYYYY" />
                  </div>
                  <span class="text-[#7FB77E] md:block hidden font-bold">-</span>
                  <div class="w-full md:w-auto">
                    <PersianDatePicker v-model="toDate" format="jYYYY-jMM-jDD" display-format="jDD jMMMM jYYYY" />
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-[300px]">
                <input type="text" v-model="searchQuery"
                  class="border-[0.5px] border-[#7FB77E] bg-[#F5F6F4] outline-none p-3 rounded-lg w-full placeholder:text-sm"
                  placeholder="نام کاربری را وارد کنید">
              </div>
            </div>
          </template>
        </div>
      </div>
      <template v-if="reportWordData?.data?.length">
        <temp-word-reported :filter-id="activeFilter" @send="reload" v-for="reportData in reportWordData?.data" :key="reportData.id"
          :report-data="reportData" />
      </template>
    </div>
    <loading-temp v-if="reportWordLoading" />
  </div>
</template>

<script setup>
import TempWordReported from '~/components/template/TempWordReported.vue'
import loadingTemp from '~/components/loadingTemp.vue'
import useFetchDashboardData from '~/composables/useFetchDashboardData'
definePageMeta({
  layout: "dashboard-admin"
})
const loginStore = useAuthStore()
const { token: AUTH_TOKEN } = useAuthToken()
const {
  fetchDashboardData,
  responseData: reportWordData,
  loading: reportWordLoading
} = useFetchDashboardData()
const loadData = async () => {
  if (loginStore.token && loginStore.isLoggedIn) {
    await fetchDashboardData(AUTH_TOKEN.value, "word-reports")
  }
}
loadData()
const reload = async (flag) => {
  if (flag) {
    await loadData()
  }
}
const filters = ref([
  { title: 'گزارش های ثبت شده', id: 1 },
  { title: 'گزارش ها', id: 2 }
])
const activeFilter = ref(1)
const params = ref({})
watch(activeFilter, async (newVal) => {
  params.value.status = newVal
  await fetchDashboardData(AUTH_TOKEN.value, 'word-reports', params.value)
})
const searchQuery = ref('')
let searchTimeout = null
let dateTimeout = null
const fromDate = ref()
const toDate = ref()
watch(searchQuery, (newVal) => {
  clearTimeout(searchTimeout)
  if (newVal.length >= 2 || newVal.length === 0) {
    searchTimeout = setTimeout(async () => {
      if (newVal.length >= 2) {
        params.value.username = newVal
        await fetchDashboardData(AUTH_TOKEN.value, "comment-reports", params.value)
      } else {
        delete params.value.search
        await fetchDashboardData(AUTH_TOKEN.value, 'comment-reports')
      }
    }, 500)
  }
})
watch([fromDate, toDate], ([newFrom, newTo]) => {
  clearTimeout(dateTimeout)
  dateTimeout = setTimeout(async () => {
    if (newFrom) {
      params.value.from_date = newFrom
    } else {
      delete params.value.from_date
    }

    if (newTo) {
      params.value.to_date = newTo
    } else {
      delete params.value.to_date
    }

    await fetchDashboardData(AUTH_TOKEN.value, "comment-reports", params.value)

  }, 500)
})
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
  transition: transform 0.5s cubic-bezier(0.22, 0.9, 0.33, 1), opacity 0.4s ease;
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
