<template>
  <div class="w-[195px] hidden font-zain md:flex flex-col items-end pr-6">
    <template v-for="(menu) in menuItems" :key="menu.id">
      <NuxtLink :to="menu.to" class="w-full" v-slot="{ isActive }">
        <div :class="[
          'text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px] cursor-pointer transition-colors duration-200',
          isActive ? 'text-[#7FB77E]' : 'hover:text-[#7FB77E]'
        ]">
          {{ menu.title }}
        </div>
      </NuxtLink>
      <div v-if="menu.id != 6" class="w-full border-t border-[#DADDD8]"></div>
    </template>

  </div>
  <div dir="rtl" class="md:hidden px-4 w-full overflow-x-auto flex gap-4 whitespace-nowrap py-2">
    <NuxtLink v-for="item in menuItems" :key="item.id" :to="item.to" active-class="!bg-[#7FB77E] !text-white"
      class="px-4 text-[#7FB77E] py-2 bg-[#DDE8D6] shadow-[0px_2px_7px_0px_#A7A7A740] rounded-full inline-block border border-[#7FB77E]">
      {{ item.title }}
    </NuxtLink>  
  </div>

</template>

<script setup>
const menuItems = [
  { id: 1, title: 'لغات', to: '/words' },
  { id: 2, title: 'دیکشنری ها', to: '/dashboard/dictionaries' },
  { id: 3, title: 'پرسش ها و پیشنهاد ها', to: '/requests' },
  { id: 4, title: 'دیدگاه ها', to: '/manage_comments' },
  { id: 5, title: 'دیدگاه گزارش شده', to: '/reported_comments' },
  { id: 6, title: 'لغات گزارش شده', to: '/reported_words' }
]
</script>