<template>
  <div class="w-full md:items-center p-8 flex md:flex-row flex-col gap-3 bg-[#F5F6F4]">
    <base-input class="md:w-[40%] " v-model="model" />
    <div
      class="flex shadow-[0px_7px_15px_-6px_#5C636940] md:w-1/4 justify-center items-center rounded-[50px]  border border-[#7FB77E] md:p-4 p-2 gap-2 md:gap-5">
      <custom-select :options="options" v-model="sLang" />
      <div @click="swapLanguages()">
        <reverse />
      </div>
      <custom-select :options="options" v-model="tLang" /> 
    </div>
  </div>
</template>
<script setup>
import DownArrow from './icons/DownArrow.vue';
import reverse from './icons/reverse.vue';
import customSelect from './customSelect.vue';
import { useFetchLanguages } from '#imports';
import { useAuthToken } from '~/composables/useAuthCrypto'
const model = defineModel()
const sLang = defineModel('sLang', { default: 1 })
const tLang = defineModel('tLang', { default: 2 })
const options = ref([])
const { isAdmin, token: AUTH_TOKEN } = useAuthToken()
const { responseData: language, fetchLanguages, loading } = useFetchLanguages()
const loadData = async () => {
  await fetchLanguages(AUTH_TOKEN.value)
  language?.value.data.forEach((lang) => {
    const obg = {};
    obg.label = lang.name;
    obg.value = lang.id;
    options.value.push(obg);
  });
}
loadData()
const swapLanguages = () => {
  const temp = sLang.value;
  sLang.value = tLang.value;
  tLang.value = temp;
};
</script>
