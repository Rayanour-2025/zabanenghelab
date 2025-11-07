<template>
  <div dir="ltr" class="bg-[#F5F6F4] min-h-screen flex flex-col justify-between">
    <!-- Header -->
    <header class="w-full flex flex-row items-center justify-between px-12 py-6">
      <div class="flex flex-row items-center gap-4">
        <button
          type="button"
          class="w-[110px] h-[50px] flex justify-center items-center px-5 bg-[#7FB77E] border border-[#7FB77E] shadow-[0_4px_8px_-5px_rgba(139,150,139,0.25)] rounded-2xl"
        >
          <span class="font-zain font-normal text-lg text-[#FFFFFF]">حمایت</span>
        </button>

        <button
          v-if="isLoggedIn"
          @click="handleLogout"
          type="button"
          class="w-[90px] h-[50px] flex justify-center items-center px-5 bg-red-500 border border-red-500 shadow-[0_4px_8px_-5px_rgba(239,68,68,0.25)] rounded-2xl"
        >
          <span class="font-zain font-normal text-lg text-[#FFFFFF]">خروج</span>
        </button>

        <button
          v-else
          @click="handleLogin"
          type="button"
          class="w-[90px] h-[50px] flex justify-center items-center px-5 bg-[#7FB77E] border border-[#7FB77E] shadow-[0_4px_8px_-5px_rgba(139,150,139,0.25)] rounded-2xl"
        >
          <span class="font-zain font-normal text-lg text-[#FFFFFF]">ورود</span>
        </button>

      </div>
      </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-[#5A6E5A] mt-12 flex flex-col items-center justify-end gap-3 py-8 font-['Zain']">
      <!-- Logo -->
      <div class="text-white font-black text-3xl text-center">لوگو</div>

      <!-- Contact -->
      <div class="text-white font-normal text-base">: ارتباط با ما</div>

      <!-- Social icons -->
      <div class="flex items-center gap-8">
        <icons-instagram class="w-[26px] h-[26px]" />
        <icons-telegram class="w-[25px] h-[20px]" />
        <icons-eitaa class="w-[24px] h-[24px]" />
        <icons-bale class="w-[25px] h-[25px]" />
        <icons-email class="w-[27px] h-[28px]" />
      </div>

      <!-- Footer links -->
      <div class="flex flex-row items-center gap-10 mt-4">
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">درباره ما</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">حمایت</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">قوانین</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">راهنما</a>
        <a href="#" class="text-white font-normal text-sm hover:text-gray-200 transition">دیکشنری</a>
      </div>

      <!-- Copyright -->
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

const { isLoggedIn } = useAuthToken();
const authStore = useAuthStore();
const route = useRoute();

const handleLogout = () => {
  authStore.logout();

  navigateTo(route.fullPath, { replace: true });
};

const handleLogin = () => {
  navigateTo('/login');
};
</script>

<style>

</style>