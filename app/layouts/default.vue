<template>
  <div dir="ltr" class="bg-[#F5F6F4] h-full">
    <div class="w-full flex flex-row items-center justify-between px-[50px] py-[33px]">
      <div class="flex flex-row items-center p-0 gap-[10px]">
        <button type="button" class="w-[125px] h-[61px] flex flex-row justify-center items-center p-[8px_22px] gap-[10px] bg-[#F5F6F4] border border-[#7FB77E] shadow-[0_5px_10px_-6px_rgba(139,150,139,0.25)] rounded-[20px] flex-none order-0 flex-grow-0">
          <div class="font-zain font-normal text-2xl leading-[45px] text-[#7FB77E] flex-none order-0 flex-grow-0">
            حمایت
          </div>
        </button>

        <button type="button" class="w-[98px] h-[61px] flex flex-row justify-center items-center p-[8px_22px] gap-[10px] bg-[#F5F6F4] border border-[#7FB77E] shadow-[0_5px_10px_-6px_rgba(139,150,139,0.25)] rounded-[20px] flex-none order-1 flex-grow-0">
          <div class="font-zain font-normal text-2xl leading-[45px] text-[#7FB77E] flex-none order-0 flex-grow-0">
            ورود
          </div>
        </button>
      </div>
      <div class="flex flex-row items-center p-0 gap-[35px]">
        <div class="flex flex-row items-center p-0 gap-[52px] flex-none order-0 flex-grow-0">
          <div class="font-zain font-normal text-xl leading-[39px] text-[#2B2B2B] flex-none order-0 flex-grow-0">
            درباره ما
          </div>
          <div class="font-zain font-normal text-xl leading-[39px] text-[#2B2B2B] flex-none order-1 flex-grow-0">
            قوانین
          </div>
          <div class="font-zain font-normal text-xl leading-[39px] text-[#2B2B2B] flex-none order-2 flex-grow-0">
            راهنما
          </div>
          <div class="font-zain font-normal text-xl leading-[39px] text-[#2B2B2B] flex-none order-3 flex-grow-0">
            دیکشنری
          </div>
        </div>
        <div class="font-zain font-black text-4xl leading-[67px] text-[#7FB77E] flex-none order-1 flex-grow-0"> <!-- scale-y-90 -->
          لوگو
        </div>
      </div>
    </div>
      <slot />
    <footer class="w-full h-[330px] bg-[#5A6E5A] mt-12 flex flex-col items-center justify-end gap-4 font-['Zain']">

        <div class="text-white font-black text-[48px] leading-[67px] text-center shrink-0">
          لوگو
        </div>
        
        <div class="text-white font-normal text-lg leading-[34px]">
          : ارتباط با ما
        </div>

        <div class="flex items-center gap-10">
            <icons-instagram class="w-[30px] h-[30px]"/>
            <icons-telegram class="w-[28px] h-[23px]"/>
            <icons-eitaa class="w-[27px] h-[28px]"/>
            <icons-bale class="w-[28px] h-[28px]"/>
            <icons-email class="w-[30px] h-[31px]"/>
        </div>

        <div class="flex flex-row items-center gap-14 shrink-0"> 
            <a href="#" class="text-white font-normal text-lg leading-[34px] hover:text-gray-200">درباره ما</a>
            <a href="#" class="text-white font-normal text-lg leading-[34px] hover:text-gray-200">حمایت</a>
            <a href="#" class="text-white font-normal text-lg leading-[34px] hover:text-gray-200">قوانین</a>
            <a href="#" class="text-white font-normal text-lg leading-[34px] hover:text-gray-200">راهنما</a>
            <a href="#" class="text-white font-normal text-lg leading-[34px] hover:text-gray-200">دیکشنری</a>
        </div>

        <div class="text-white font-normal text-sm opacity-80 mb-4 mt-3">
            © 2025 Website nickname. All rights reserved.
        </div>

    </footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>