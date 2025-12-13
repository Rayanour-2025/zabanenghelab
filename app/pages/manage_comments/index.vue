<template>
  <div
    class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
    <div class="p-5 w-full flex flex-col items-center gap-y-6">
      <div dir="rtl" class="bg-[#F5F6F4] p-8 w-full rounded-[55px]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img :src="photo" class="w-12 h-12 rounded-full" alt="profile" />
            <p>
              سعید علوی -
              <sapn class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</sapn>
            </p>
          </div>
          <div class="relative">
            <three-dot class="cursor-pointer" @click="isShowPinBox = true" height="22" width="22" />
            <div v-if="isShowPinBox"
              class="cursor-pointer flex z-40 w-40 gap-2 top-5  left-5 absolute bg-white p-4 rounded-3xl">
              <black-pin height="22" width="22" />
              <p>سنجاق کردن</p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p>لغت: <span class="text-[#7FB77E]">سلام</span></p>
        </div>
        <div class="mt-2">لغت نامه: <span class="text-[#7FB77E]">دهخدا</span></div>
        <div class="mt-5">
          <h3>توضیحات:</h3>
          <p class="mt-3 text-sm">
            محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند تا دیکشنری معتبر رو باهم داشته باشه، بدون اینکه هی بین
            تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و ترجمه‌ها هم دقیق و سریع هستن. دمتون گرم واقعاً 🙌
          </p>
        </div>
        <div class="mt-5 flex gap-2">
          <div style="background-color: #e5737333" class="flex items-center gap-2 p-3 rounded-full">
            <red-trash width="22" height="22" />
          </div>
          <div class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
            <tick width="22" height="22" />
          </div>
        </div>
      </div>
      <div dir="rtl" class="bg-[#F5F6F4] p-8 w-full rounded-[55px]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img :src="photo" class="w-12 h-12 rounded-full" alt="profile" />
            <p>
              سعید علوی -
              <sapn class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</sapn>
            </p>
          </div>
          <div class="relative">
            <three-dot class="cursor-pointer" @click="isShowPinBox = true" height="22" width="22" />
            <div v-if="isShowPinBox"
              class="cursor-pointer flex z-40 w-40 gap-2 top-5  left-5 absolute bg-white p-4 rounded-3xl">
              <black-pin height="22" width="22" />
              <p>سنجاق کردن</p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p>لغت: <span class="text-[#7FB77E]">سلام</span></p>
        </div>
        <div class="mt-2">لغت نامه: <span class="text-[#7FB77E]">دهخدا</span></div>
        <div class="mt-5">
          <h3>توضیحات:</h3>
          <p class="mt-3 text-sm">
            محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند تا دیکشنری معتبر رو باهم داشته باشه، بدون اینکه هی بین
            تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و ترجمه‌ها هم دقیق و سریع هستن. دمتون گرم واقعاً 🙌
          </p>
        </div>
        <div class="mt-5 flex gap-2">
          <div style="background-color: #e5737333" class="flex items-center gap-2 p-3 rounded-full">
            <red-trash width="22" height="22" />
          </div>
          <div class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
            <tick width="22" height="22" />
          </div>
        </div>
      </div>
      <div dir="rtl" class="bg-[#F5F6F4] p-8 w-full rounded-[55px]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img :src="photo" class="w-12 h-12 rounded-full" alt="profile" />
            <p>
              سعید علوی -
              <sapn class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</sapn>
            </p>
          </div>
          <div class="relative">
            <three-dot class="cursor-pointer" @click="isShowPinBox = true" height="22" width="22" />
            <div v-if="isShowPinBox"
              class="cursor-pointer flex z-40 w-40 gap-2 top-5  left-5 absolute bg-white p-4 rounded-3xl">
              <black-pin height="22" width="22" />
              <p>سنجاق کردن</p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p>لغت: <span class="text-[#7FB77E]">سلام</span></p>
        </div>
        <div class="mt-2">لغت نامه: <span class="text-[#7FB77E]">دهخدا</span></div>
        <div class="mt-5">
          <h3>توضیحات:</h3>
          <p class="mt-3 text-sm">
            محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند تا دیکشنری معتبر رو باهم داشته باشه، بدون اینکه هی بین
            تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و ترجمه‌ها هم دقیق و سریع هستن. دمتون گرم واقعاً 🙌
          </p>
        </div>
        <div class="mt-5 flex gap-2">
          <div style="background-color: #e5737333" class="flex items-center gap-2 p-3 rounded-full">
            <red-trash width="22" height="22" />
          </div>
          <div class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
            <tick width="22" height="22" />
          </div>
        </div>
      </div>
      <div dir="rtl" class="bg-[#F5F6F4] p-8 w-full rounded-[55px]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img :src="photo" class="w-12 h-12 rounded-full" alt="profile" />
            <p>
              سعید علوی -
              <sapn class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</sapn>
            </p>
          </div>
          <div class="relative">
            <three-dot class="cursor-pointer" @click="isShowPinBox = true" height="22" width="22" />
            <div v-if="isShowPinBox"
              class="cursor-pointer flex z-40 w-40 gap-2 top-5  left-5 absolute bg-white p-4 rounded-3xl">
              <black-pin height="22" width="22" />
              <p>سنجاق کردن</p>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <p>لغت: <span class="text-[#7FB77E]">سلام</span></p>
        </div>
        <div class="mt-2">لغت نامه: <span class="text-[#7FB77E]">دهخدا</span></div>
        <div class="mt-5">
          <h3>توضیحات:</h3>
          <p class="mt-3 text-sm">
            محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند تا دیکشنری معتبر رو باهم داشته باشه، بدون اینکه هی بین
            تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و ترجمه‌ها هم دقیق و سریع هستن. دمتون گرم واقعاً 🙌
          </p>
        </div>
        <div class="mt-5 flex gap-2">
          <div style="background-color: #e5737333" class="flex items-center gap-2 p-3 rounded-full">
            <red-trash width="22" height="22" />
          </div>
          <div class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
            <tick width="22" height="22" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="popup">
    <reportcard @click="isShowPinBox = false" :class="!isShowPinBox ? 'hidden' : 'flex'" />
  </transition>
</template>

<script setup>
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png";
import plus from "~/components/icons/plus.vue";
import redTrash from "~/components/icons/redTrash.vue";
import ThreeDot from "~/components/icons/ThreeDot.vue";
import reportcard from "~/components/reportcard.vue";
import blackPin from "~/components/icons/blackPin.vue";
import tick from "~/components/icons/tick.vue";
const isShowPinBox = ref(false)
definePageMeta({
  layout: "dashboard-admin"
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Popup animation */
.popup-enter-active {
  animation: popup-in 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-leave-active {
  animation: popup-out 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}


@keyframes popup-in {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes popup-out {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  100% {
    opacity: 0;
    transform: scale(0.85) translateY(10px);
  }
}
</style>
