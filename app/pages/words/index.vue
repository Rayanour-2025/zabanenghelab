<template>
  <div class="w-full flex flex-row-reverse items-start justify-end gap-5 pr-7">
    <div class="w-[195px] font-zain flex flex-col items-end pr-6">
      <h2 class="text-[#7FB77E] w-[80%] text-right text-lg leading-[38px] font-normal py-[25px]">لغات</h2>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <span class="text-[#2B2B2B] w-[80%] text-right text-base leading-[32px] py-[25px]">دیکشنری‌ها</span>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="w-full flex flex-row items-center justify-end gap-[10px] py-[25px]">
        <icons-pop-up-flash class="w-[18px] h-[18px]" />
        <span class="text-[#2B2B2B] text-right text-base leading-[30px]">درخواست‌ها</span>
      </div>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px]">کاربران</div>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px]">دیدگاه گزارش شده</div>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="text-[#2B2B2B] w-[80%] text-right text-base leading-[30px] py-[25px]">لغات گزارش شده</div>
    </div>
    
    <div class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
      <div class="w-full font-zain flex flex-col items-end gap-8">
        <div class="flex flex-row justify-between items-center w-full h-[50px]">
          <button @click="openCreateWordModal" type="button" class="flex flex-row justify-center items-center gap-[5px] px-[18px] py-[11px] bg-[#7FB77E] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)]">
            <span class="text-white font-bold text-[13px] leading-[24px]">اضافه کردن لغت</span>
            <icons-add-or-create class="w-5 h-5" />
          </button>
          <div class="flex items-center justify-center gap-4">
            <div class="relative w-[400px]">
              <input v-model="searchQuery" type="text" placeholder="لغت مورد نظر را وارد کنید" class="w-full h-[50px] pl-[14px] pr-[50px] text-right text-[13px] leading-[22px] text-[#2B2B2B] font-normal placeholder:text-[#DADDD8] bg-[#F5F6F4] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] focus:outline-none" />
              <icons-search class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-[#2B2B2B] pointer-events-none" />
              
              <ul v-if="searchQuery.length >= 2 && searchResults.length" class="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto z-10" >
                <li v-for="word in searchResults" :key="word.id" class="px-4 py-2 flex justify-between items-center hover:bg-gray-100 text-right text-sm" >
                  <button @click="editWord(word)" class="text-white bg-[#7FB77E] px-2 py-1 rounded-md text-xs hover:bg-green-700 transition-colors duration-200">
                    ویرایش
                  </button>
                  <span class="text-[#2B2B2B]">{{ word.word }}<span class="text-gray-500 text-xs truncate max-w-[200px] inline-block">{{ word.meaning }}</span></span>
                </li>
              </ul>
               <div v-if="searchingWord" class="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg px-4 py-2 text-center text-sm text-gray-500">
                ...درحال جستجو
              </div>
              <div v-if="searchQuery.length >= 2 && !searchingWord && searchResults.length === 0" class="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg px-4 py-2 text-center text-sm text-gray-500">
                .نتیجه ای یافت نشد
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-px border border-[#DADDD8]"></div>
        <div class="w-full flex flex-col items-start justify-center gap-10">
          <div class="w-full flex flex-col items-end gap-[12px]">
            <span class="font-zain font-bold text-lg leading-[30px] text-[#2B2B2B]">:فارسی</span>
            <div class="w-full flex flex-row flex-wrap justify-end items-center gap-[16px]">
              <DictionaryTag title="فرهنگ موضوعی فارسی" />
              <DictionaryTag title="فرهنگ جامع زبان فارسی" />
              <DictionaryTag title="عمید" />
              <DictionaryTag title="معین" />
              <DictionaryTag title="دهخدا" />
              <DictionaryTag title="فرهنگ اصطلاحات مالی و سرمایه‌گذاری" />
              <DictionaryTag title="فرهنگ زبان‌آموز فارسی" />
              <DictionaryTag title="لغت‌نامه بزرگ فارسی" />
              <DictionaryTag title="فرهنگ سخن" />
            </div>
          </div>
          <div class="w-full flex flex-col items-end gap-[12px]">
            <span class="font-zain font-bold text-lg leading-[30px] text-[#2B2B2B]">:انگلیسی</span>
            <div class="w-full flex flex-row flex-wrap justify-end items-center gap-[16px]">
              <DictionaryTag title="مک میلن" />
              <DictionaryTag title="آکسفورد" />
              <DictionaryTag title="لانگمن" />
              <DictionaryTag title="کمبریج" />
              <DictionaryTag title="کالینز" />
              <DictionaryTag title="گوگل ترنسلیت" />
              <DictionaryTag title="مریام-وبستر" />
            </div>
          </div>
        </div>
      </div>
    </div>

<transition name="modal-slide" appear>
  <div v-if="OpenModalStudentList" @click="OpenModalStudentList = false" class="fixed inset-0 z-[1000000] bottom-0 flex justify-center items-center w-full bg-black/50" >
    <div @click.stop class="absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-lg bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[45px] flex flex-col items-center px-[28px] py-[35px] gap-[32px] font-zain" >
      
      <!-- <h2 class="text-xl font-bold text-[#7FB77E] mb-4">{{ isEditMode ? 'ویرایش لغت' : 'اضافه کردن لغت جدید' }}</h2> -->
      
      <div :class="['w-full','overflow-hidden','flex','flex-col','items-end','gap-5','mb-3','transition-all','duration-500','ease-in-out',isExpanded ? 'max-h-[2000px]' : 'max-h-52',]" >
        <div class="flex flex-col items-end gap-[10px] w-full">
          <span class="text-base leading-[24px] text-[#2B2B2B]">:لطفا دیکشنری مورد نظر را انتخاب کنید</span>
          <div class="relative w-full sm:w-[300px]">
            <div v-if="loadingDictionaries" class="p-3 text-xs text-gray-500">در حال بارگذاری دیکشنری‌ها...</div>
            <select v-else v-model="selectedDictionary" :disabled="isEditMode" class="appearance-none w-full h-[50px] px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-right text-xs text-[#2B2B2B] focus:outline-none cursor-pointer truncate" >
              <option :value="null" disabled>انتخاب یا سرچ میان دیکشنری‌ها</option>
              <option v-for="dict in dictionaries" :key="dict.id" :value="dict.id">{{ dict.name }}</option>
            </select>
            <icons-down-arrow v-if="!loadingDictionaries" class="absolute left-[16px] top-1/2 -translate-y-1/2 w-[13px] h-[13px] pointer-events-none" />
            <p v-if="isEditMode" class="text-xs text-red-500 mt-1">دیکشنری لغت ویرایشی قابل تغییر نیست.</p>
          </div>
        </div>

        <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-12">
          <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
            <label class="text-lg leading-[28px] text-[#2B2B2B]">:تعریف</label>
            <textarea v-model="definition" placeholder="تعریف مورد نظر را وارد کنید" class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none" ></textarea>
          </div>
          <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
            <label class="text-lg leading-[28px] text-[#2B2B2B]">:نام لغت</label>
            <input type="text" v-model="wordName" placeholder="نام لغت دلخواه را وارد کنید" class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] text-right truncate focus:outline-none" />
          </div>
        </div>

        <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-12">
          <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
            <label class="text-lg leading-[28px] text-[#2B2B2B]">:متضاد</label>
            <textarea
              v-model="opposite"
              placeholder="متضادها را با کاما یا خط جدید جدا کنید"
              class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
            ></textarea>
          </div>
          <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
            <label class="text-lg leading-[28px] text-[#2B2B2B]">:مترادف</label>
            <textarea
              v-model="synonym"
              placeholder="مترادف‌ها را با کاما یا خط جدید جدا کنید"
              class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
            ></textarea>
          </div>
        </div>

        <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-12">
          <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
            <label class="text-lg leading-[28px] text-[#2B2B2B]">:مثال‌ها</label>
            <textarea
              v-model="examples"
              placeholder="مثال‌های مرتبط را بنویسید (به عنوان توضیحات/Description ارسال می‌شود)"
              class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
            ></textarea>
          </div>
          <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
            <label class="text-lg leading-[28px] text-[#2B2B2B]">:هم‌خانواده</label>
            <textarea
              v-model="relatedWords"
              placeholder="لغات هم‌خانواده را با کاما یا خط جدید جدا کنید"
              class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="relative w-full flex flex-col items-center">
        <div class="w-full h-[1px] bg-[#DADDD8]"></div>
        <button type="button" @click="toggleExpansion" class="absolute top-1/2 -translate-y-1/2 flex justify-center items-center gap-[8px] px-[22px] py-[6px] bg-[#7FB77E] rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md" >
          <icons-down-arrow :class="['w-[13px]','h-[13px]','text-white','transition-transform','duration-500',isExpanded ? 'rotate-180' : 'rotate-0',]" />
          <span class="text-white text-sm leading-[28px]">{{isExpanded ? 'موارد کمتر' : 'موارد بیشتر'}}</span>
        </button>
      </div>

      <button type="button" @click="saveWordHandler" :disabled="creatingWord || updatingWord" class="w-full flex justify-center items-start mt-3" >
        <div :class="['w-full','flex','justify-center','items-center','gap-[8px]','px-12','py-[14px]','bg-[#7FB77E]','rounded-[1000px]','transition-colors','duration-300','shadow-lg', (creatingWord || updatingWord) ? 'opacity-60 cursor-not-allowed' : 'hover:bg-green-700',]" >
          <span class="text-white font-bold text-xl text-center leading-[38px]">{{ (creatingWord || updatingWord) ? 'در حال پردازش...' : (isEditMode ? 'ذخیره ویرایش' : 'ساخت لغت') }}</span>
        </div>
      </button>
    </div>
  </div>
</transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useToast } from 'vue-toastification/dist/index.mjs';
import { useRouter } from 'vue-router';
// import { useAuthToken } from '@/composables/useAuthCrypto';
// import useSearchWords from '@/composables/useSearchWords'; 
// import useUpdateWord from '@/composables/useUpdateWord'; 
// import useCreateWord from '@/composables/useCreateWord'; 
// import useFetchDictionaries from '@/composables/useFetchDictionaries'; 

const { token: AUTH_TOKEN, user: currentUser } = useAuthToken();
const toast = useToast(); 
const router = useRouter();
const isExpanded = ref(false);

const OpenModalStudentList = ref(false); 

const selectedDictionary = ref(null);
const wordName = ref("");
const definition = ref(""); 
const synonym = ref("");    
const opposite = ref("");   
const relatedWords = ref(""); 
const examples = ref("");   

const isEditMode = ref(false); 
const currentWordId = ref(null); 

const searchResults = ref([]); 
const dictionaryIdForSearch = 1;

const handleAuthError = () => {
    toast.error("مشکلی در شناسایی شما پیش آمده. لطفاً دوباره وارد شوید.");
    router.push('/login');
};

const { 
  fetchDictionaries, 
  responseData: dictionariesResponse, 
  loading: loadingDictionaries, 
  errMessage: dictionariesErrorMsg 
} = useFetchDictionaries(); 

const { 
  createWord,
  loading: creatingWord,
  errMessage: createWordErrorMsg,
} = useCreateWord();

const { 
  searchWords,
  loading: searchingWord,
  errMessage: searchErrorMsg,
} = useSearchWords(); 

const { 
  updateWord,
  loading: updatingWord,
  errMessage: updateWordErrorMsg,
} = useUpdateWord(); 

const dictionaries = ref([]); 

const fetchDictionariesList = async () => {
    try {
        if (!AUTH_TOKEN.value) {
            handleAuthError();
            //  toast.error("خطا: توکن احراز هویت یافت نشد. لطفا مجددا وارد شوید.");
            return;
        }

        await fetchDictionaries(AUTH_TOKEN.value);
        
        const data = dictionariesResponse.value?.data;

        if (Array.isArray(data)) {
            dictionaries.value = data;
            if (dictionaries.value.length > 0 && selectedDictionary.value === null) {
                selectedDictionary.value = dictionaries.value[0].id;
            }
        } else {
            console.warn("ساختار پاسخ API برای دیکشنری‌ها صحیح نیست:", dictionariesResponse.value);
        }
    } catch (error) {
        console.error("خطا در واکشی دیکشنری‌ها:", error);
        toast.error(`خطا در بارگذاری دیکشنری‌ها: ${dictionariesErrorMsg.value || 'خطای شبکه'}`);
    }
};


const clearWordFields = () => {
    isEditMode.value = false;
    currentWordId.value = null;
    wordName.value = "";
    definition.value = "";
    synonym.value = "";
    opposite.value = "";
    relatedWords.value = "";
    examples.value = "";
    isExpanded.value = false; 
    if (dictionaries.value.length > 0) {
        selectedDictionary.value = dictionaries.value[0].id; 
    } else {
        selectedDictionary.value = null;
    }
}

const openCreateWordModal = () => {
  clearWordFields();
  OpenModalStudentList.value = true;
}

const arrayToFormattedString = (arr) => {
    if (!arr || arr.length === 0) return "";
    return arr.join('-');
};

const editWord = (word) => {
    clearWordFields(); 
    isEditMode.value = true;
    currentWordId.value = word.id;
    selectedDictionary.value = word.dictionary_id; 
    wordName.value = word.word || "";
    definition.value = word.meaning || "";
    synonym.value = arrayToFormattedString(word.synonyms);
    opposite.value = arrayToFormattedString(word.antonyms);
    relatedWords.value = arrayToFormattedString(word.related_words);
    examples.value = word.description || "";
    
    OpenModalStudentList.value = true; 
    searchQuery.value = "";
}

const searchQuery = ref("");
let searchTimer = null;

watch(searchQuery, (newQuery) => {
    if (searchTimer) {
        clearTimeout(searchTimer);
    }
    
    searchResults.value = []; 
    
    // if (newQuery.length < 2) {
    //     return; 
    // }

    searchTimer = setTimeout(async () => {
        try {
            if (!AUTH_TOKEN.value) {
                handleAuthError();
                // toast.error("خطا: توکن احراز هویت یافت نشد.");
                return;
            }
            
            const response = await searchWords(AUTH_TOKEN.value, dictionaryIdForSearch, newQuery.trim());
            
            searchResults.value = response.data || [];
        } catch (error) {
            console.error("خطا در جستجوی لغت:", error);
            // toast.error(`خطا در جستجو: ${searchErrorMsg.value || 'خطای شبکه'}`); // اختیاری
            searchResults.value = []; 
        }
    }, 500); 
});


const parseToArray = (text) => {
    if (!text) return [];
    return text.split(/[\n,-]/) 
               .map(s => s.trim())
               .filter(s => s.length > 0);
};

const setupWordFormatWatchers = () => {
  watch(synonym, (newValue) => {
    if (newValue.includes(' ')) {
      synonym.value = newValue.replace(/\s+/g, '-');
    }
  });

  watch(opposite, (newValue) => {
    if (newValue.includes(' ')) {
      opposite.value = newValue.replace(/\s+/g, '-');
    }
  });

  watch(relatedWords, (newValue) => {
    if (newValue.includes(' ')) {
      relatedWords.value = newValue.replace(/\s+/g, '-');
    }
  });
};

const saveWordHandler = async () => {
    if (!selectedDictionary.value) {
        toast.error("لطفاً یک دیکشنری انتخاب کنید.");
        return;
    }
    if (!wordName.value.trim() || !definition.value.trim()) {
        toast.error("فیلدهای نام لغت و تعریف اجباری هستند.");
        return;
    }
    
    if (creatingWord.value || updatingWord.value) return;

    const payload = {
        word: wordName.value.trim(),
        meaning: definition.value.trim(), 
        synonyms: parseToArray(synonym.value), 
        antonyms: parseToArray(opposite.value), 
        related_words: parseToArray(relatedWords.value), 
        description: examples.value.trim() || null, 
    };
    
    if (!isEditMode.value) {
      payload.dictionary_id = selectedDictionary.value;
    }

    try {
        if (!AUTH_TOKEN.value) {
            handleAuthError();
            //  toast.error("خطا: توکن احراز هویت یافت نشد. لطفا مجددا وارد شوید.");
            return;
        }

        if (isEditMode.value && currentWordId.value) {
            await updateWord(AUTH_TOKEN.value, currentWordId.value, payload);
            toast.success("لغت با موفقیت ویرایش شد.");
        } else {
            await createWord(AUTH_TOKEN.value, payload);
            toast.success("لغت جدید با موفقیت ایجاد شد.");
        }

        clearWordFields();
        OpenModalStudentList.value = false;
        
    } catch (error) {
        console.error(`خطا در ${isEditMode.value ? 'ویرایش' : 'ایجاد'} لغت:`, error);
        const errorMsg = isEditMode.value ? updateWordErrorMsg.value : createWordErrorMsg.value;
        const displayMessage = errorMsg || "خطای ناشناخته در پردازش لغت";
        toast.error(`خطا: ${displayMessage}`);
    }
};


onMounted(() => {
  fetchDictionariesList();
  setupWordFormatWatchers();
});

const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
textarea {
  height: auto; 
  max-height: 150px;
  overflow: hidden;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  
  scrollbar-width: none;    
}


.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-slide-enter-from .modal-box {
  transform: translateY(100px);
  opacity: 0;
}

.modal-slide-enter-to .modal-box {
  transform: translateY(0);
  opacity: 1;
}

.modal-slide-leave-to .modal-box {
  transform: translateY(-100px);
  opacity: 0;
}

.modal-slide-enter-active .modal-box,
.modal-slide-leave-active .modal-box {
  transition: transform 0.5s cubic-bezier(0.22, 0.9, 0.33, 1),
              opacity 0.4s ease;
}

.modal-slide-enter-from {
  opacity: 0;
}
.modal-slide-enter-to {
  opacity: 1;
}
.modal-slide-leave-from {
  opacity: 1;
}
.modal-slide-leave-to {
  opacity: 0;
}
.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: opacity 0.4s ease;
}
</style>