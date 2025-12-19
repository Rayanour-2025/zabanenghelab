<template>
  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div class="md:p-5 flex w-full flex-col items-center gap-y-6">
      <template v-if="reportWordData?.data?.length">
        <temp-word-reported @send="reload" v-for="reportData in reportWordData?.data" :key="reportData.id"
          :report-data="reportData" />
      </template>
    </div>
    <loading-animation v-if="reportWordLoading" />
  </div>
</template>

<script setup>
import TempWordReported from '~/components/template/TempWordReported.vue'
import loadingAnimation from '~/components/loadingAnimation.vue'
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
  console.log(loginStore.isLoggedIn)
  if (loginStore.token && loginStore.isLoggedIn) {
    await fetchDashboardData(AUTH_TOKEN.value, "word-reports")
    console.log(reportWordData.value)
  }
}
loadData()
const reload = async (flag) => {
  console.log(flag)
  if (flag) {
    await loadData()
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
