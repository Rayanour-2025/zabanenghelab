<template>
  <div class="w-full flex flex-row-reverse items-start justify-end gap-5 pr-7">
    <dictionary-sidebar />

    <div
      class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]"
    >
      <div class="p-5 flex flex-col items-center gap-y-6">
        <div dir="rtl" class="bg-[#F5F6F4] p-8 rounded-[55px]">
          <div class="flex items-center gap-3">
            <img :src="photo" class="w-12 h-12 rounded-full" alt="profile" />
            <p>
              سعید علوی -
              <sapn class="text-[#5C636980]"> ۱۴۰۱ آبان ۰۶ ۱۰:۳۲</sapn>
            </p>
          </div>
          <div class="mt-5">
            <p>لغت: <span class="text-[#7FB77E]">سلام</span></p>
          </div>
          <div class="mt-2">لغت نامه: <span class="text-[#7FB77E]">دهخدا</span></div>
          <div class="mt-5">
            <h3>توضیحات:</h3>
            <p class="mt-3 text-sm">
              سلام واژه‌ای کوتاه اما پر از معناست؛ نشانه‌ی صلح، احترام و انسان‌بودن.
              دنیایی که با "سلام" شروع بشه همیشه زیباتره، چون پشتش نیت دوستی و آرامش
              خوابیده. شاید ساده باشه، ولی ریشه‌ی تمام ارتباط‌های خوبه 🌿.
            </p>
          </div>
          <div class="mt-5 flex gap-2">
            <div
              style="background-color: #e5737333"
              class="flex items-center gap-2 p-3 rounded-full"
            >
              <red-trash width="22" height="22" />
            </div>
            <div class="flex items-center gap-2 bg-[#7FB77E33] p-3 rounded-full">
              <tick width="22" height="22" />
            </div>
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
