<script setup>
const model = defineModel()
</script>
<template>
  <input v-model="model" type="text" placeholder="هر چی میخوای وارد کن" style="box-shadow: 0px 7px 15px -6px #5C636940;"
    class="
      border border-[#7FB77E]
      bg-[#F5F6F433]
      rounded-[500px]
      outline-none
      placeholder:text-[#7FB77E]

      w-full
      p-3

      sm:w-[90%] sm:p-4
      md:w-[70%]
      lg:w-[50%] lg:p-5
    " />
</template>
