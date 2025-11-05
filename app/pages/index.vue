<template>
  <div class="w-full flex flex-col items-center justify-center gap-8 mt-24 mb-32">
    <div class="flex flex-col items-center justify-center gap-1">
      <div class="font-zain font-black text-4xl leading-[70px] text-[#7FB77E]">
        دنبال واژه نباش، دنبال معنا باش
      </div>

      <div class="font-zain font-normal text-xl leading-10 text-[#5A6E5A]">
      .با جستجوی هر واژه، می‌توانید معنای دقیق، تلفظ و کاربرد آن را ببینید
      </div>
    </div>
    
    <div class="flex flex-col items-center justify-center gap-5">
      <div class="w-[1000px] h-[65px] flex flex-row justify-between items-center p-[10px_20px] bg-[rgba(245,246,244,0.2)] border border-[#7FB77E] shadow-[0_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-[500px] box-border lens-inner2">
        <div class="flex flex-row items-center p-0 gap-4">
          <div class="w-[50px] h-[50px] bg-[#7FB77E] rounded-full flex items-center justify-center">
            <icons-left-arrow class="w-6 h-6" />
          </div>

          <div class="flex flex-row items-center gap-3">
            <button type="button">
              <icons-add-word class="w-6 h-6"/>
            </button>

            <button type="button">
              <icons-microphone class="w-5 h-5"/>
            </button>
          </div>
        </div>

        <div class="font-zain font-normal text-base leading-7 text-[#7FB77E] text-center">
          هرچی میخوای اینجا بنویس
        </div>
      </div>

      <div class="flex flex-row items-center justify-between p-[12px_25px] gap-5 bg-[rgba(245,246,244,0.2)] border border-[#7FB77E] shadow-[0_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-[40px] box-border">
        <div class="flex flex-row items-center justify-center p-[4px_8px] gap-1 border border-[#DADDD8] rounded-full">
          <icons-flash-without-tail-down class="w-3 h-3"/>
          <div class="font-zain font-normal text-base p-0.5 leading-7 text-[#7FB77E]">
            انگلیسی
          </div>
        </div>
        <icons-displacement class="w-4 h-4"/>

        <div class="flex flex-row items-center p-[4px_8px] justify-center gap-1 border border-[#DADDD8] rounded-full">
          <icons-flash-without-tail-down class="w-3 h-3"/>
          <div class="font-zain font-normal text-base p-0.5 leading-7 text-[#7FB77E]">
            فارسی
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <hr class="w-full border-t border-gray-100" />

  <div class="relative w-full max-w-[calc(100%-50px)] h-[550px] bg-[#7FB77E] shadow-[5px_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-[0_30px_30px_0] flex flex-col items-end justify-center p-[50px] box-border overflow-visible">
    <h2 class="font-zain font-black text-3xl leading-[55px] text-white text-right max-w-[655px]">
      جایی که کلمات فقط معنی نمی‌گیرن، بلکه معنا می‌سازن.
    </h2>

    <p class="mt-8 flex flex-col items-end justify-center font-zain font-normal text-xl text-nowrap leading-9 text-white text-right max-w-[690px]">
      <span>ما یک دیکشنری آنلاین هستیم</span>
      <span>که تلاش می‌کنیم هر واژه را نه‌فقط ترجمه، بلکه با معن،</span>
      <span>کاربرد و درک واقعی آن به شما ارائه دهیم. </span>
      <span>هدف ما این است که جستجوی یک کلمه، به فهم عمیق‌تری</span>
      <span> از زبان تبدیل شود.</span>
      <span>اینجا می‌توانید معانی، مترادف‌ها، تلفظ و مثال‌های کاربردی</span>
      <span>را به‌سادگی و در کوتاه‌ترین زمان پیدا کنید.</span>
    </p>
    
    <div class="absolute top-[50px] left-[50px] w-[450px] h-[650px] bg-white/10 backdrop-blur-sm shadow-[0_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-[300px] border border-white/20 lens-inner">

    </div>
  </div>
  
  <hr class="w-full border-t border-gray-100" />

  <div class="w-full flex flex-row justify-end items-center gap-10 px-[100px] py-[40px]">
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center gap-1 font-zain font-black text-4xl text-nowrap leading-[75px] text-[#7FB77E] text-center">
        <span>هزار</span>
        <span>32+</span>
      </div>
      <div class="font-zain font-black text-2xl text-nowrap leading-10 text-[#7FB77E] text-center">
        واژگان
      </div>
    </div>
    <div class="w-[2px] h-[90px] bg-[#DADDD8] rounded-full"></div>
    
    <div class="flex flex-col items-center justify-center">
      <div class="font-zain font-black text-4xl text-nowrap leading-[75px] text-[#7FB77E] text-center">
        324+
      </div>
      <div class="font-zain font-black text-2xl text-nowrap leading-10 text-[#7FB77E] text-center">
        بازدید
      </div>
    </div>
    <div class="w-[2px] h-[90px] bg-[#DADDD8] rounded-full"></div>
    
    <div class="flex flex-col justify-center items-center">
      <div class="font-zain font-black text-4xl text-nowrap leading-[75px] text-[#7FB77E] text-center">
        12+
      </div>
      <div class="font-zain font-black text-2xl text-nowrap leading-10 text-[#7FB77E] text-center">
        زبان‌ها
      </div>
    </div>
  </div>

  <hr class="w-full border-t border-gray-100" />

  <div class="w-full flex flex-col items-center justify-center gap-1 mt-24 mb-16">
    <div class="flex flex-row justify-center items-center gap-3">
      <icons-left-quote class="w-7 h-7"/>

      <h2 class="font-zain font-black text-3xl leading-[50px] text-[#7FB77E] text-center">
        دیکشنری‌ای ساخته‌شده برای ذهن امروز
      </h2>

      <icons-right-quote class="w-7 h-7"/>
    </div>

    <p class="font-zain font-normal text-xl leading-10 text-[#5A6E5A] text-center">
      ما ترجمه را ساده کردیم تا تمرکزت روی یادگیری بماند، نه جست‌وجو.
    </p>
  </div>

  <hr class="w-full border-t border-gray-100" />

  <div class="w-full flex flex-row justify-around items-start mt-20 mb-20">
    <div class="flex flex-col items-end gap-5 max-w-sm">
      <icons-advanced-search class="w-10 h-10"/>

      <div class="flex flex-col items-end gap-3">
        <h3 class="font-zain font-extrabold text-xl leading-9 text-[#7FB77E] text-right">
          جست‌وجوی هوشمند
        </h3>
        <p class="font-zain font-normal text-base leading-7 text-[#5A6E5A] text-right w-full">
          با چند حرف اول، پیشنهادهای دقیق و مرتبط بگیر؛ چون وقتت باارزش‌تر از تایپ کامل کلمه است.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-end gap-5 max-w-sm">
      <icons-notebook class="w-10 h-10"/>

      <div class="flex flex-col items-end gap-3">
        <h3 class="font-zain font-extrabold text-xl leading-9 text-[#7FB77E] text-right">
          یادگیری در کنار ترجمه
        </h3>
        <p class="font-zain font-normal text-base leading-7 text-[#5A6E5A] text-right w-full">
          با هر جست‌وجو، نه‌تنها معنی بلکه مترادف، توضیح و کاربرد واقعی واژه رو یاد می‌گیری.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-end gap-5 max-w-sm">
      <icons-lightning class="w-10 h-10"/>

      <div class="flex flex-col items-end gap-3">
        <h3 class="font-zain font-extrabold text-xl leading-9 text-[#7FB77E] text-right">
          رابط کاربری سریع و ساده
        </h3>
        <p class="font-zain font-normal text-base leading-7 text-[#5A6E5A] text-right w-full">
          طوری طراحی شده که بدون حواس‌پرتی فقط دنبال معنی باشی — سریع، سبک و تمیز.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main-page',
})
</script>

<style>
.lens-inner {
  background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
  /* جلوه گودی */
  box-shadow:
    inset 0 2px 15px rgba(0,0,0,0.15), /* سایه داخل */
    0 7px 15px -6px rgba(92,99,105,0.25); /* سایه بیرونی */
  backdrop-filter: none; /* بدون تار کردن محتوا */
  --tw-backdrop-blur: blur(2px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.lens-inner2 {
  background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
  /* جلوه گودی */
  box-shadow:
    inset 0 2px 15px rgba(0,0,0,0.15), /* سایه داخل */
    0 7px 15px -6px rgba(92,99,105,0.25); /* سایه بیرونی */
  backdrop-filter: none; /* بدون تار کردن محتوا */
  --tw-backdrop-blur: blur(2px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

</style>
