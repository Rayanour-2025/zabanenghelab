<template>
  <div dir="rtl" class="container  bg-white mx-auto">
    <search-word-box dir="rtl" />
    <div class="flex items-start justify-between border mt-6 px-8 border-[#DADDD833] ">
      <div
        class="bg-[#F0F1EE] flex result flex-col gap-y-6 p-8 rounded-[35px] overflow-y-scroll shadow-[0px_7px_15px_-6px_#5C636940] w-[70%] h-[700px]">
        <div class="bg-[#F5F6F4] p-8 rounded-[50px] shadow-[0px_7px_15px_-6px_#5C636940]">
          <div class="mb-1"><span class="text-[#5C636980]">دهخدا</span></div>
          <div class="mb-2">
            <p class="text-4xl">سلام</p> <span class="text-sm">/salAm/</span>
          </div>
          <div class="bg-[#F0F1EE] rounded-2xl p-4">
            <span>ذکر</span> ،
            <span>سلامت</span> ،
            <span>تعظیم</span> ،
            <span>تهنیت</span> ،
            <span>احترام نظامی</span> ،
            <span>درود گویی</span> ،
            <span>مراسم عیاد</span> ،
            <span>تندرستی</span>
          </div>
        </div>
        <div class="bg-[#F5F6F4] p-8 rounded-[50px] shadow-[0px_7px_15px_-6px_#5C636940]">
          <div class="mb-1"><span class="text-[#5C636980]">دهخدا</span></div>
          <div class="mb-2">
            <p class="text-4xl">سلام</p> <span class="text-sm">/salAm/</span>
          </div>
          <div class="bg-[#F0F1EE] rounded-2xl p-4">
            <span>ذکر</span> ،
            <span>سلامت</span> ،
            <span>تعظیم</span> ،
            <span>تهنیت</span> ،
            <span>احترام نظامی</span> ،
            <span>درود گویی</span> ،
            <span>مراسم عیاد</span> ،
            <span>تندرستی</span>
          </div>
        </div>
        <div class="bg-[#F5F6F4] p-8 rounded-[50px] shadow-[0px_7px_15px_-6px_#5C636940]">
          <div class="mb-1"><span class="text-[#5C636980]">دهخدا</span></div>
          <div class="mb-2">
            <p class="text-4xl">سلام</p> <span class="text-sm">/salAm/</span>
          </div>
          <div class="bg-[#F0F1EE] rounded-2xl p-4">
            <span>ذکر</span> ،
            <span>سلامت</span> ،
            <span>تعظیم</span> ،
            <span>تهنیت</span> ،
            <span>احترام نظامی</span> ،
            <span>درود گویی</span> ،
            <span>مراسم عیاد</span> ،
            <span>تندرستی</span>
          </div>
        </div>
        <div class="bg-[#F5F6F4] p-8 rounded-[50px] shadow-[0px_7px_15px_-6px_#5C636940]">
          <div class="mb-1"><span class="text-[#5C636980]">دهخدا</span></div>
          <div class="mb-2">
            <p class="text-4xl">سلام</p> <span class="text-sm">/salAm/</span>
          </div>
          <div class="bg-[#F0F1EE] rounded-2xl p-4">
            <span>ذکر</span> ،
            <span>سلامت</span> ،
            <span>تعظیم</span> ،
            <span>تهنیت</span> ،
            <span>احترام نظامی</span> ،
            <span>درود گویی</span> ،
            <span>مراسم عیاد</span> ،
            <span>تندرستی</span>
          </div>
        </div>
        <div class="bg-[#F5F6F4] p-8 rounded-[50px] shadow-[0px_7px_15px_-6px_#5C636940]">
          <div class="mb-1"><span class="text-[#5C636980]">دهخدا</span></div>
          <div class="mb-2">
            <p class="text-4xl">سلام</p> <span class="text-sm">/salAm/</span>
          </div>
          <div class="bg-[#F0F1EE] rounded-2xl p-4">
            <span>ذکر</span> ،
            <span>سلامت</span> ،
            <span>تعظیم</span> ،
            <span>تهنیت</span> ،
            <span>احترام نظامی</span> ،
            <span>درود گویی</span> ،
            <span>مراسم عیاد</span> ،
            <span>تندرستی</span>
          </div>
        </div>
        <div class="bg-[#F5F6F4] p-8 rounded-[50px] shadow-[0px_7px_15px_-6px_#5C636940]">
          <div class="mb-1"><span class="text-[#5C636980]">دهخدا</span></div>
          <div class="mb-2">
            <p class="text-4xl">سلام</p> <span class="text-sm">/salAm/</span>
          </div>
          <div class="bg-[#F0F1EE] rounded-2xl p-4">
            <span>ذکر</span> ،
            <span>سلامت</span> ،
            <span>تعظیم</span> ،
            <span>تهنیت</span> ،
            <span>احترام نظامی</span> ،
            <span>درود گویی</span> ،
            <span>مراسم عیاد</span> ،
            <span>تندرستی</span>
          </div>
        </div>
      </div>
      <dictionary-list :dic-list-name="dictionaries" />
    </div>
  </div>
</template>
<script setup>
const dictionaries = [
  "همه",
  "معین",
  "دهخدا",
  "عمید",
  "فرهنگ زبان‌آموز فارسی",
  "فرهنگ جامع زبان فارسی",
  "فرهنگ سخن",
  "فرهنگ موضوعی فارسی",
]
</script>
<style>
.result::-webkit-scrollbar {
  width: 8px;
}

.result::-webkit-scrollbar-thumb {
  background-color: #DADDD8;
  border-radius: 4px;
  box-shadow: 0px 7px 15px -6px #5C636940;

}

.result::-webkit-scrollbar-track {
  background-color: none;
}
</style>