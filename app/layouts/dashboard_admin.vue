<template>
  <div dir="ltr" class="bg-[white] min-h-screen flex flex-col justify-between">
    <header class="w-full flex flex-row items-center justify-between px-12 max-md:px-8 py-6">
      <div class="flex flex-row items-center gap-4">
        <button type="button"
          class="w-[110px] max-md:hidden h-[50px] flex justify-center items-center px-5 bg-[#7FB77E] border border-[#7FB77E] shadow-[0_4px_8px_-5px_rgba(139,150,139,0.25)] rounded-2xl">
          <span class="font-zain font-normal text-lg text-[#FFFFFF]">حمایت</span>
        </button>

        <div class="max-md:block hidden" @click="isMenuOpen = true">
          <menu-icon width="22" height="22" />
        </div>
        <button v-if="isLoggedIn" @click="handleLogout" type="button"
          class="w-[90px] max-md:w-[70px] max-md:h-[30px] h-[50px] flex justify-center items-center px-5 bg-red-500 border border-red-500 shadow-[0_4px_8px_-5px_rgba(239,68,68,0.25)] rounded-2xl">
          <span class="font-zain font-normal text-lg max-md:text-sm text-[#FFFFFF]">خروج</span>
        </button>
        <button v-else @click="handleLogin" type="button"
          class="w-[90px] h-[50px] flex justify-center items-center px-5 bg-[#7FB77E] border border-[#7FB77E] shadow-[0_4px_8px_-5px_rgba(139,150,139,0.25)] rounded-2xl">
          <span class="font-zain font-normal text-lg text-[#FFFFFF]">ورود</span>
        </button>
      </div>
      <div class="flex flex-row items-center gap-10">
        <nav class="flex max-md:hidden flex-row items-center gap-8">
          <span
            class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">درباره
            ما</span>
          <span
            class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">قوانین</span>
          <span
            class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">راهنما</span>
          <span
            class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">دیکشنری</span>
        </nav>
        <div class="font-zain font-black text-2xl text-[#7FB77E]">
          لوگو
        </div>
      </div>

      <div v-if="isMenuOpen" @click="isMenuOpen = false" class="h-full w-full  fixed items-center flex justify-end bg-black/30 top-0 left-0">
        <transition name="menu">
          <div @click.stop class="h-full pr-3 w-1/2 bg-white">
            <nav class="flex flex-col items-end mt-4 gap-8">
              <span
                class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">درباره
                ما</span>
              <span
                class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">قوانین</span>
              <span
                class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">راهنما</span>
              <span
                class="font-zain font-normal text-base text-[#2B2B2B] cursor-pointer hover:text-[#5A6E5A] transition">دیکشنری</span>
            </nav>
          </div>
        </transition>
      </div>

    </header> 
    <main class="flex-grow ">
      <div class="w-full flex flex-col md:flex-row-reverse items-start justify-end gap-5 md:pr-7">
        <dictionary-sidebar />
        <slot />
      </div>
    </main>

    <footer class="w-full bg-[#5A6E5A] mt-12 flex flex-col items-center justify-end gap-3 py-8 font-['Zain']">
      <div class="text-white font-black text-3xl text-center">لوگو</div>
      <div class="text-white font-normal text-base">: ارتباط با ما</div>
      <div class="flex items-center gap-8">
        <icons-instagram class="w-[26px] h-[26px]" />
        <icons-telegram class="w-[25px] h-[20px]" />
        <icons-eitaa class="w-[24px] h-[24px]" />
        <icons-bale class="w-[25px] h-[25px]" />
        <icons-email class="w-[27px] h-[28px]" />
      </div>

      <div class="flex flex-row items-center gap-10 mt-4">
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">درباره ما</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">حمایت</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">قوانین</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">راهنما</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">دیکشنری</a>
      </div>

      <div class="text-white font-normal text-xs opacity-80 mt-3">
        © 2025 Website nickname. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useAuthToken } from '@/composables/useAuthCrypto';
import { useAuthStore } from '@/stores/auth';
import { useRoute } from 'vue-router';
import MenuIcon from '~/components/icons/menuIcon.vue';

const { isLoggedIn } = useAuthToken();
const authStore = useAuthStore();
const route = useRoute();
const isMenuOpen = ref(false)

const handleLogout = () => {
  authStore.logout();
  navigateTo(route.fullPath, { replace: true });
};

const handleLogin = () => {
  navigateTo('/login');
};

const sibebar = () => {
  console.log("e")
}
</script>

<style>
.menu-enter-active {
  animation: expand 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-leave-active {
  animation: collapse 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* باز شدن */
@keyframes expand {
  0% {
    max-height: 0;
    opacity: 0;
  }

  100% {
    max-height: 50%;
    /* یک مقدار کافی بالا بگذار */
    opacity: 1;
  }
}

/* بسته شدن */
@keyframes collapse {
  0% {
    max-height: 50%;
    opacity: 1;
  }

  100% {
    max-height: 0;
    opacity: 0;
  }
}
</style>