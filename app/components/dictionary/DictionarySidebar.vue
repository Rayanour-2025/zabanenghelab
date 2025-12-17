<template>
  <div class="w-[195px] hidden font-zain md:flex flex-col items-end pr-6">
    <h2 class="text-[#7FB77E] w-[80%] text-right text-lg leading-[38px] font-normal py-[25px]">
      لغات
    </h2>
    <div class="w-full border-t border-[#DADDD8]"></div>

    <NuxtLink to="/dashboard/dictionaries" class="w-full">
      <span
        class="text-[#2B2B2B] w-[80%] text-right text-base leading-[32px] py-[25px] cursor-pointer block hover:text-[#7FB77E] transition-colors duration-200">دیکشنری‌ها</span>
    </NuxtLink>
    <div class="w-full border-t border-[#DADDD8]"></div>

    <NuxtLink to="/requests" class="w-full">
      <div
        class="w-full flex flex-row items-center justify-end gap-[10px] py-[25px] cursor-pointer hover:bg-gray-50 pr-6 rounded-lg transition-colors duration-200">
        <!-- <icons-pop-up-flash class="w-[18px] h-[18px]" /> -->
        <span class="text-[#2B2B2B] text-right text-base leading-[30px]">لغات در خواستی</span>
      </div>
    </NuxtLink>
    <div class="w-full border-t border-[#DADDD8]"></div>

    <NuxtLink to="/manage_comments" class="w-full">
      <div
        class="text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px] cursor-pointer hover:text-[#7FB77E] transition-colors duration-200">
        دیدگاه ها
      </div>
    </NuxtLink>
    <div class="w-full border-t border-[#DADDD8]"></div>

    <NuxtLink to="/reported_comments" class="w-full">
      <div
        class="text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px] cursor-pointer hover:text-[#7FB77E] transition-colors duration-200">
        دیدگاه گزارش شده
      </div>
    </NuxtLink>
    <div class="w-full border-t border-[#DADDD8]"></div>

    <NuxtLink to="/reported_words" class="w-full">
      <div
        class="text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px] cursor-pointer hover:text-[#7FB77E] transition-colors duration-200">
        لغات گزارش شده
      </div>
    </NuxtLink>
  </div>
  <div dir="rtl" class="md:hidden px-4 w-full overflow-x-auto flex gap-4 whitespace-nowrap py-2">
    <NuxtLink class="px-4 text-[#7FB77E] py-2 bg-[#DDE8D6] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block border border-[#7FB77E]">
      لغات
    </NuxtLink>
    <NuxtLink class="px-4 text-[#8B968B] py-2 bg-[#F0F1EE] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block">
      دیکشنری ها
    </NuxtLink>
    <NuxtLink class="px-4 text-[#8B968B] py-2 bg-[#F0F1EE] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block">
      لغات درخواستی
    </NuxtLink>
    <NuxtLink class="px-4 text-[#8B968B] py-2 bg-[#F0F1EE] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block">
      لغات گزارش شده
    </NuxtLink>
    <NuxtLink class="px-4 text-[#8B968B] py-2 bg-[#F0F1EE] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block">
      دیدگاه ها
    </NuxtLink>
    <NuxtLink class="px-4 text-[#8B968B] py-2 bg-[#F0F1EE] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block">
      دیدگاه گزارش شده
    </NuxtLink>
  </div>

</template>

<script setup>
// منطق خاصی نیاز نیست
</script>