<template>


  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div class="p-5 flex w-full flex-col items-center gap-y-6">
      <div dir="rtl" class="bg-[#F5F6F4] w-full p-8 rounded-[55px]">
        <div class="flex justify-between items-center gap-3">
          <div class="flex items-center gap-3">
            <div class="flex  items-center">
              <p class="ml-3">گزارش توسط: </p>
              <img :src="photo" class="w-12 ml-2 h-12 rounded-full" alt="profile" />
              <p class="text-xs font-semibold">
                سعید علوی
              </p>
            </div>
            <div class="flex  items-center">
              <p class="ml-3">گزارش شده: </p>
              <img :src="photo" class="w-12 ml-2 h-12 rounded-full" alt="profile" />
              <p class="text-xs font-semibold">
                مهرداد سعیدی
              </p>
            </div>
          </div>
          <p class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</p>
        </div>
        <div class="mt-5">
          <p>علت: <span class="font-semibold">توهین به قومیت ها، اقلیت ها، اعتقادات و ...</span></p>
        </div>
        <div class="mt-5">
          <p>لغت: <span class="text-[#7FB77E]">سلام</span></p>
        </div>
        <div class="mt-3">لغت نامه: <span class="text-[#7FB77E]">دهخدا</span></div>
        <div class="mt-5">
          <h3>نظر:</h3>
          <p class="mt-3 text-sm">همیشه گفتن بعضیا تلفظ درست بلد نیستن، ولی واقعاً باید یه ذره بیشتر تمرین کنن،
            تلفظشون فاجعه‌ست!
          </p>
        </div>
        <div class="mt-5">
          <h3>توضیحات:</h3>
          <p class="mt-3 text-sm">اینجور لحن‌ها باعث بحث و بی‌احترامی بین کاربرا میشه. گفتم گزارش بدم که فضا آروم‌تر
            بمونه.
          </p>
        </div>
        <div class="mt-5 flex gap-2">
          <div class=" text-[#7FB77E] bg-[#7FB77E33] px-5 py-2 rounded-full">
            تایید
          </div>
          <div style="background-color: #e5737333; color:#E57373 "
            class="text-[#E57373] py-2 px-5 flex items-center rounded-full">
            رد
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
import plus from "~/components/icons/plus.vue";
import redTrash from "~/components/icons/redTrash.vue";
import tick from "~/components/icons/tick.vue";
import useFetchDashboardData from "~/composables/useFetchDashboardData";
import { useAuthToken } from "~/composables/useAuthCrypto";
definePageMeta({
  layout: 'dashboard-admin'
})
const loginStore = useAuthStore()
if (loginStore.isAdmin == 0) {
  navigateTo('/')
}
const { token: AUTH_TOKEN } = useAuthToken()
const {
  fetchDashboardData,
  responseData: reportCommentData,
  loading: reportCommentLoading
} = useFetchDashboardData()
const loadData = async () => {
  if (loginStore.isAdmin && loginStore.token && loginStore.isLoggedIn) {
    console.log(AUTH_TOKEN.value)
    await fetchDashboardData(AUTH_TOKEN.value, "comment-reports")
    console.log(reportCommentData.value)
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
