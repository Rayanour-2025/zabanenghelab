<template>
  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div class="p-5 flex w-full flex-col items-center gap-y-6">
      <template v-if="reportCommentData?.data.length">
        <temp-comment-reported @send="reload" v-for="data in reportCommentData?.data" :report-data="data" :key="data.id" />
      </template>
    </div>
    <loadingAnimation v-if="reportCommentLoading" />
  </div>
</template>

<script setup>
import TempCommentReported from "~/components/template/TempCommentReported.vue";
import useFetchDashboardData from "~/composables/useFetchDashboardData";
import loadingAnimation from "~/components/loadingAnimation.vue";
import { useAuthToken } from "~/composables/useAuthCrypto";
definePageMeta({
  layout: 'dashboard-admin'
})
const loginStore = useAuthStore()
const { token: AUTH_TOKEN } = useAuthToken()
const {
  fetchDashboardData,
  responseData: reportCommentData,
  loading: reportCommentLoading
} = useFetchDashboardData()
const loadData = async () => {
  if (loginStore.token && loginStore.isLoggedIn) {
    console.log(AUTH_TOKEN.value)
    await fetchDashboardData(AUTH_TOKEN.value, "comment-reports")
    console.log(reportCommentData?.value?.data)
  }
}
const reload = (flag) => {
  if (flag) {
    loadData
  }
}
loadData()
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
