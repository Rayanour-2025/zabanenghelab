<template>
  <div dir="rtl" class="container  bg-white mx-auto">
    <search-word-box dir="rtl" v-model="searchQuery" />
    <div class="flex md:flex-row flex-col-reverse items-start justify-between mt-6 px-2 md:px-8">
      <div
        class="bg-[#F0F1EE] flex result flex-col gap-y-6 md:p-8 p-3 rounded-[35px] overflow-y-scroll shadow-[0px_7px_15px_-6px_#5C636940] w-full md:w-[70%] max-h-[700px] h-auto">
        <template v-if="!searchingWord && searchResults.length > 0">
          <result-item v-for="(result, index) in searchResults" :result="result" :key="index" />
        </template>
        <div v-if="searchingWord" class=" mt-2 w-full   px-4 py-3 text-center text-sm text-[#7FB77E]  ">
          <div class="flex items-center justify-center gap-2">
            <svg class="animate-spin h-4 w-4 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            <span>...درحال جستجو</span>
          </div>
        </div>
      </div>
      <!-- <dictionary-list :dic-list-name="dictionaries" /> -->
    </div>
  </div>
</template>
<script setup>
import ResultItem from '~/components/ResultItem.vue';
import { useToast } from "vue-toastification"
import { useAuthToken } from '~/composables/useAuthCrypto';
import useSearchWords from '~/composables/useSearchWordsWithoutToken';
import { useRouter } from 'vue-router';
import { ref, watch } from "vue"
const { token: AUTH_TOKEN } = await useAuthToken()
const {
  searchWords,
  loading: searchingWord,
  errMessage: searchErrorMsg,
} = useSearchWords();
const toast = useToast() 
const router = useRouter()
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

const searchQuery = ref("")
const searchResults = ref([])
let searchTimer = null
watch(searchQuery, (newQuery) => {
  // console.log(newQuery)
  searchResults.value = []
  if (searchTimer) {
    clearTimeout(searchTimer);
  }
  searchResults.value = [];

  // اگر طول کوئری کمتر از 2 باشد، جستجو انجام نشود
  if (newQuery.length < 2) {
    return;
  }

  searchTimer = setTimeout(async () => {
    try {

      const response = await searchWords(
        AUTH_TOKEN.value,
        newQuery.trim(),
        1, 2
      );
      // در اینجا فرض می‌کنیم پاسخ به صورت { data: [ { word } ] } است.
      searchResults.value = response.data || [];
      console.log(searchResults.value)

    } catch (error) {
      console.error('خطا در جستجوی لغت:', error);
      searchResults.value = [];
      if (searchErrorMsg.value) {
        // نمایش خطا در صورت لزوم، اما برای جستجو بهتر است کاربر را با پیام‌های پی در پی آزار ندهیم
        // toast.error(`خطا در جستجو: ${searchErrorMsg.value}`);
      }
    }
  }, 500); // زمان De
})
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
