<template>
  <div class="w-full flex flex-col items-center justify-center gap-10">
    <div class="flex flex-col items-center justify-center gap-[5px]">
      <div class="font-zain font-black text-5xl leading-[90px] text-[#7FB77E]">
        دنبال واژه نباش، دنبال معنا باش
      </div>

      <div class="font-zain font-normal text-[28px] leading-[50px] text-[#5A6E5A]">
      .با جستجوی هر واژه، می‌توانید معنای دقیق، تلفظ و کاربرد آن را ببینید
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-6">
      <div class="w-[1124px] h-[79px] flex flex-row justify-between items-center p-[11.5px_22px] bg-[rgba(245,246,244,0.2)] border border-[#7FB77E] shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[500px] box-border lens-inner2">
        <div class="flex flex-row items-center p-0 gap-[20px]">
          <div class="w-[56px] h-[56px] bg-[#7FB77E] rounded-full flex items-center justify-center">
            <icons-left-arrow class="w-7 h-7" />
          </div>

          <div class="flex flex-row items-center gap-[13px]">
            <button type="button">
              <icons-add-word class="w-7 h-7"/>
            </button>

            <button type="button">
              <icons-microphone class="w-6 h-6"/>
            </button>
          </div>
        </div>

        <div class="font-zain font-normal text-lg leading-[28px] text-[#7FB77E] text-center">
          هرچی میخوای اینجا بنویس
        </div>

      </div>

      <div class="flex flex-row items-center justify-between p-[15px_30px] gap-[22px] bg-[rgba(245,246,244,0.2)] border border-[#7FB77E] shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[50px] box-border">
        <div class="flex flex-row items-center justify-center p-[5px_10px] gap-[5px] border border-[#DADDD8] rounded-full">
          <icons-flash-without-tail-down class="w-3 h-3"/>

          <div class="font-zain font-normal text-lg p-0.5 leading-[28px] text-[#7FB77E]">
            انگلیسی
          </div>
        </div>
        <icons-displacement class="w-5 h-5"/>

        <div class="flex flex-row items-center p-[5px_10px] justify-center gap-[5px] border border-[#DADDD8] rounded-full">
          <icons-flash-without-tail-down class="w-3 h-3"/>

          <div class="font-zain font-normal text-lg p-0.5 leading-[28px] text-[#7FB77E]">
            فارسی
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative w-full max-w-[calc(100%-50px)] h-[599px] bg-[#7FB77E] shadow-[7px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[0_40px_40px_0] flex flex-col items-end justify-center p-[55px_50px] box-border overflow-visible">
    <h2 class="font-zain font-black text-4xl leading-[67px] text-white text-right max-w-[655px]">
      جایی که کلمات فقط معنی نمی‌گیرن، بلکه معنا می‌سازن.
    </h2>

    <p class="mt-[50px] flex flex-col items-end justify-center font-zain font-normal text-[28px] text-nowrap leading-[45px] text-white text-right max-w-[690px]">
      <span>ما یک دیکشنری آنلاین هستیم</span>
      <span>که تلاش می‌کنیم هر واژه را نه‌فقط ترجمه، بلکه با معن،</span>
      <span>کاربرد و درک واقعی آن به شما ارائه دهیم. </span>
      <span>هدف ما این است که جستجوی یک کلمه، به فهم عمیق‌تری</span>
      <span> از زبان تبدیل شود.</span>
      <span>اینجا می‌توانید معانی، مترادف‌ها، تلفظ و مثال‌های کاربردی</span>
      <span>را به‌سادگی و در کوتاه‌ترین زمان پیدا کنید.</span>
    </p>
    
    <div class="absolute top-[76px] left-[50px] w-[489px] h-[700px] bg-white/10 backdrop-blur-sm shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[300px] border border-white/20 lens-inner">

    </div>
  </div>

  <div class="w-full flex flex-row justify-end items-center gap-[55px] px-[102px] py-[42px]">
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center gap-2 font-zain font-black text-[70px] text-nowrap leading-[98px] text-[#7FB77E] text-center">
        <span>هزار</span>
        <span>32+</span>
      </div>
      <div class="font-zain font-black text-[32px] text-nowrap leading-[45px] text-[#7FB77E] text-center">
        واژگان
      </div>
    </div>
    <div class="w-[2px] h-[114.5px] border border-[#DADDD8]"></div>
    <div class="flex flex-col items-center justify-center">
      <div class="font-zain font-black text-[70px] text-nowrap leading-[98px] text-[#7FB77E] text-center">
        324+
      </div>
      <div class="font-zain font-black text-[32px] text-nowrap leading-[45px] text-[#7FB77E] text-center">
        بازدید
      </div>
    </div>
    <div class="w-[2px] h-[114.5px] border border-[#DADDD8]"></div>
    <div class="flex flex-col justify-center items-center">
      <div class="font-zain font-black text-[70px] text-nowrap leading-[98px] text-[#7FB77E] text-center">
        12+
      </div>
      <div class="font-zain font-black text-[32px] text-nowrap leading-[45px] text-[#7FB77E] text-center">
        زبان‌ها
      </div>
    </div>
  </div>

  <div class="w-full flex flex-col items-center justify-center gap-2">
    <div class="flex flex-row justify-between">
      <icons-left-quote class="w-[33px] h-[27px]"/>

      <h2 class="font-zain font-black text-[48px] leading-[67px] text-[#7FB77E] text-bottom">
        دیکشنری‌ای ساخته‌شده برای ذهن امروز
      </h2>

      <icons-right-quote class="w-[33px] h-[27px]"/>
    </div>

    <p class="mt-[20px] font-zain font-normal text-[32px] leading-[45px] text-[#5A6E5A] text-center">
      ما ترجمه را ساده کردیم تا تمرکزت روی یادگیری بماند، نه جست‌وجو.
    </p>
  </div>

  <div class="w-full flex flex-row justify-around items-start gap-[75px] mt-[50px]">
    <div class="flex flex-col items-end gap-[25px]">
      <icons-advanced-search class="w-[50px] h-[50px]"/>

      <div class="flex flex-col items-end gap-[15px]">
        <h3 class="font-zain font-extrabold text-[32px] leading-[45px] text-[#7FB77E] text-right">
          جست‌وجوی هوشمند
        </h3>
        <p class="font-zain font-normal text-[22px] leading-[31px] text-[#5A6E5A] text-right w-[398px]">
          با چند حرف اول، پیشنهادهای دقیق و مرتبط بگیر؛ چون وقتت باارزش‌تر از تایپ کامل کلمه است.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-end gap-[25px]">
      <icons-notebook class="w-[50px] h-[50px]"/>

      <div class="flex flex-col items-end gap-[15px]">
        <h3 class="font-zain font-extrabold text-[32px] leading-[45px] text-[#7FB77E] text-right">
          یادگیری در کنار ترجمه
        </h3>
        <p class="font-zain font-normal text-[22px] leading-[31px] text-[#5A6E5A] text-right w-[404px]">
          با هر جست‌وجو، نه‌تنها معنی بلکه مترادف، توضیح و کاربرد واقعی واژه رو یاد می‌گیری.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-end gap-[25px]">
      <icons-lightning class="w-[50px] h-[50px]"/>

      <div class="flex flex-col items-end gap-[15px]">
        <h3 class="font-zain font-extrabold text-[32px] leading-[45px] text-[#7FB77E] text-right">
          رابط کاربری سریع و ساده
        </h3>
        <p class="font-zain font-normal text-[22px] leading-[31px] text-[#5A6E5A] text-right w-[356px]">
          طوری طراحی شده که بدون حواس‌پرتی فقط دنبال معنی باشی — سریع، سبک و تمیز.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
