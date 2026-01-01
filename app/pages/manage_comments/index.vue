<template>
  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div dir="rtl" class="md:p-5 p-2 w-full flex flex-col  gap-y-6">
      <div class="w-full" dir="rtl">
        <div class="flex w-full mb-4 items-center gap-3">
          <div v-for="item in commentFilter" :key="item.id" @click="selectedFilter = item.id" :class="[
            'p-4 rounded-[100px] cursor-pointer transition-all duration-300 ease-in-out',
            selectedFilter === item.id
              ? 'bg-[#7FB77E] text-white'
              : 'bg-[#DDE8D6] text-[#7FB77E]'
          ]" style="box-shadow: 0px 2px 10px -6px #8B968B40;">
            {{ item.title }}
          </div>
        </div>
        <div class="flex w-full items-center gap-3">
          <template v-if="selectedFilter == 1">
            <div class="flex w-full items-center justify-between">
              <div class="flex gap-3 items-center">
                <div class="bg-[#DDE8D6] text-[#7FB77E] px-4 py-4 rounded-xl">عمومی: </div>
                <div class="w-[40%] flex items-center gap-2">
                  <PersianDatePicker v-model="fromDate" format="jYYYY-jMM-jDD" display-format="jDD jMMMM jYYYY" /> -
                  <PersianDatePicker v-model="toDate" format="jYYYY-jMM-jDD" display-format="jDD jMMMM jYYYY" />
                </div>
              </div>
              <div>
                <input type="text" v-model="searchQuery"
                  class="border-[0.5px] border-[#7FB77E] bg-[#F5F6F4] outline-none p-3 rounded-lg w-full"
                  placeholder="نام کاربری را وارد کنید">
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="p-5 w-full flex flex-col items-center gap-y-6">
        <template v-if="commentData">
          <template-temp-manage-comment v-for="comment in commentData.data" :key="comment.id" :comment="comment" />
        </template>
      </div>
      <loading-animation v-if="commentLoading" />
    </div>
  </div>
</template>

<script setup>
import useFetchDashboardData from '~/composables/useFetchDashboardData'
import PersianDatePicker from '~/components/PersianDatePicker.vue'
import {useAuthToken } from '~/composables/useAuthCrypto'
definePageMeta({
  layout: "dashboard-admin"
})
const loginStore = useAuthStore()
const commentFilter = ref([
  { title: 'دیدگاه های  ثبت شده', id: 2 },
  { title: 'دیدگاه', id: 1 }
])
const fromDate = ref('')
const toDate = ref('')
const { token: AUTH_TOKEN } = useAuthToken()
const {
  fetchDashboardData,
  responseData: commentData,
  loading: commentLoading
} = useFetchDashboardData()
const selectedFilter = ref(1)
const loadData = async () => {
  if (loginStore.token && loginStore.isLoggedIn) {
    console.log(AUTH_TOKEN.value)
    await fetchDashboardData(AUTH_TOKEN.value, "comments/admin-list")
    console.log(commentData.value)
  }
}
loadData()
const params = ref({})
watch(selectedFilter, async (newFilter) => {
  delete params.value.username
  params.value.status = newFilter
  await fetchDashboardData(AUTH_TOKEN.value, `comments/admin-list`, params.value)
})
const searchQuery = ref('')
let searchTimeout = null // متغیری برای ذخیره تایمر
let dateTimeout = null // متغیری برای ذخیره تایمر

watch(searchQuery, (newVal) => {
  clearTimeout(searchTimeout)
  if (newVal.length >= 2 || newVal.length === 0) {
    searchTimeout = setTimeout(async () => {
      if (newVal.length >= 2) {
        params.value.username = newVal
        await fetchDashboardData(AUTH_TOKEN.value, "comments/admin-list", params.value)
      } else {
        delete params.value.search
        await fetchDashboardData(AUTH_TOKEN.value, 'comments/admin-list')
      }
    }, 500)
  }
})
watch([fromDate, toDate], ([newFrom, newTo]) => {
  clearTimeout(dateTimeout)
console.log(newFrom)
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
 
    await fetchDashboardData(AUTH_TOKEN.value, "comments/admin-list", params.value)
    
  }, 500) 
})
</script>

<style scoped></style>
