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
              <input v-model="searchQuery" type="text" placeholder="جستجوی لغت مورد نظر..." class="w-full h-[50px] pl-[14px] pr-[50px] text-right text-[13px] leading-[22px] text-[#2B2B2B] font-normal placeholder:text-[#DADDD8] bg-[#F5F6F4] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] focus:outline-none" />
              <icons-search class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-[#2B2B2B] pointer-events-none" />
              
              <div v-if="searchQuery.length >= 2 && !searchingWord && searchResults.length" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-xl rounded-xl max-h-80 overflow-y-auto z-10 p-2 custom-offcanvas2">
                <ul class="divide-y divide-gray-100">
                  <li v-for="word in searchResults" :key="word.id" class="flex justify-between items-center py-3 px-2 transition-all duration-200" >
                    <!-- Actions Group (Left Side) -->
                    <div class="flex items-center gap-2 flex-shrink-0">
                        <!-- NEW: Delete Button -->
                        <button @click.stop="confirmDelete(word)" class="flex-shrink-0 p-2 text-white bg-red-500 rounded-full hover:bg-red-700 transition-colors duration-200 shadow-md tooltip" title="حذف لغت">
                            <!-- Trash Icon SVG (Lucide: trash-2) -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
                            </svg>
                        </button>
                        <!-- Existing: Edit Button -->
                        <button @click.stop="editWord(word)" class="flex-shrink-0 p-2 text-white bg-[#7FB77E] rounded-full hover:bg-green-700 transition-colors duration-200 shadow-md tooltip" title="ویرایش لغت">
                            <!-- Pencil Icon SVG (Lucide: pencil) -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Word Details (Right Side) -->
                    <div class="flex flex-col items-end justify-center flex-grow min-w-0 pr-2 text-right">
                        <div class="flex items-center justify-end w-full gap-2">
                            <span v-if="word.pronunciation" class="text-xs text-gray-400 font-normal italic">[{{ word.pronunciation }}]</span>
                            <span class="font-bold text-sm text-[#2B2B2B] truncate text-right">{{ word.word }}</span>
                        </div>
                        <span class="text-gray-500 text-xs mt-1 truncate w-full inline-block text-right">{{ word.meaning }}</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div v-if="searchingWord" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-xl rounded-xl px-4 py-3 text-center text-sm text-[#7FB77E] z-10">
                <div class="flex items-center justify-center gap-2">
                   <svg class="animate-spin h-4 w-4 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                   <span>...درحال جستجو</span>
                </div>
              </div>

              <div v-if="searchQuery.length >= 2 && !searchingWord && searchResults.length === 0" class="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-xl rounded-xl px-4 py-3 text-center text-sm text-gray-500 z-10">
                نتیجه‌ای برای "{{ searchQuery }}" یافت نشد
              </div>
            </div>
          </div>
        </div>
        <div class="w-full h-px border border-[#DADDD8]"></div>
        <!-- Dictionary Selection Block -->
        <div class="w-full flex flex-col items-start justify-center gap-10">
          <div class="w-full flex flex-col items-end gap-[12px]">
            <span class="font-zain font-bold text-lg leading-[30px] text-[#2B2B2B]">:فارسی</span>
            <div class="w-full flex flex-row flex-wrap justify-end items-center gap-[16px]">
              <DictionaryTag title="فرهنگ موضوعی فارسی" />
              <DictionaryTag title="فرهنگ جامع زبان فارسی" />
              <DictionaryTag title="عمید" />
              <DictionaryTag title="معین" />
              <DictionaryTag title="دهخدا" />
              <DictionaryTag title="زبان انقلاب" />
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

    <!-- Word Creation/Editing Modal (Existing) -->
    <transition name="modal-slide" appear>
      <div v-if="OpenModalStudentList" @click="OpenModalStudentList = false" class="fixed inset-0 z-[1000000] bottom-0 flex justify-center items-center w-full bg-black/50" >
        <div @click.stop class="absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-lg bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[40px] flex flex-col items-center px-8 py-10 gap-8 font-zain" dir="rtl">
          <button @click="OpenModalStudentList = false" class="absolute top-5 left-5 p-2 rounded-full hover:bg-gray-100 transition duration-150">
            <icons-circle-x width="35" height="35" color="#7FB77E" />
          </button>
          
          <div :class="['w-full','overflow-hidden','flex','flex-col','items-end','gap-5','mb-3','transition-all','duration-500','ease-in-out',isExpanded ? 'max-h-[2000px]' : 'max-h-48',]" >
            <div class="flex flex-col items-start gap-3 w-full">
              <span class="text-sm leading-6 text-[#2B2B2B]">لطفا دیکشنری مورد نظر را انتخاب کنید:</span>
              <div class="relative w-full md:w-[50%]">
                <div v-if="loadingDictionaries" class="p-3 text-xs text-gray-500">در حال بارگذاری دیکشنری‌ها...</div>
                <select v-else v-model="selectedDictionary" :disabled="isEditMode" class="appearance-none w-full h-11 px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-right text-xs text-[#2B2B2B] focus:outline-none cursor-pointer truncate" >
                  <option :value="null" disabled>انتخاب یا سرچ میان دیکشنری‌ها</option>
                  <option v-for="dict in dictionaries" :key="dict.id" :value="dict.id">{{ dict.name }}</option>
                </select>
                <icons-down-arrow v-if="!loadingDictionaries" class="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
              </div>
            </div>

            <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
              <div class="w-full flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">نام لغت:</label>
                <input type="text" v-model="wordName" placeholder="نام لغت دلخواه را وارد کنید" class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 text-right truncate focus:outline-none" />
              </div>
              <div class="w-full flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">تلفظ:</label>
                <input type="text" v-model="pronunciation" placeholder="تلفظ یا آوانگاری لغت" class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 text-right truncate focus:outline-none" />
              </div>
            </div>

            <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">تعریف:</label>
                <textarea v-model="definition" placeholder="تعریف مورد نظر را وارد کنید" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36" ></textarea>
              </div>
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">مترادف:</label>
                <textarea
                  v-model="synonym"
                  placeholder="مترادف‌ها را با کاما یا خط جدید جدا کنید"
                  class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36"
                ></textarea>
              </div>
            </div>

            <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">متضاد:</label>
                <textarea
                  v-model="opposite"
                  placeholder="متضادها را با کاما یا خط جدید جدا کنید"
                  class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36"
                ></textarea>
              </div>
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">هم‌خانواده:</label>
                <textarea
                  v-model="relatedWords"
                  placeholder="لغات هم‌خانواده را با کاما یا خط جدید جدا کنید"
                  class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36"
                ></textarea>
              </div>
            </div>

            <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">توضیحات:</label>
                <textarea
                  v-model="examples"
                  placeholder="توضیحات لازم را وارد کنید"
                  class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36"
                ></textarea>
              </div>
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
              </div>
            </div>
          </div>

          <div class="relative w-full flex flex-col items-center">
            <div class="w-full h-[1px] bg-[#DADDD8]"></div>
            <button type="button" @click="toggleExpansion" class="absolute top-1/2 -translate-y-1/2 flex justify-center items-center gap-2 px-5 py-2 bg-[#7FB77E] rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md" >
              <span class="text-white text-sm leading-6">{{isExpanded ? 'موارد کمتر' : 'موارد بیشتر'}}</span>
              <icons-down-arrow :class="['w-[13px]','h-[13px]','text-white','transition-transform','duration-500',isExpanded ? 'rotate-180' : 'rotate-0',]" />
            </button>
          </div>

          <button type="button" @click="saveWordHandler" :disabled="creatingWord || updatingWord" class="w-full flex justify-center items-start mt-3" >
            <div :class="['w-full','flex','justify-center','items-center','gap-2','px-10','py-3.5','bg-[#7FB77E]','rounded-[1000px]','transition-colors','duration-300','shadow-lg', (creatingWord || updatingWord) ? 'opacity-60 cursor-not-allowed' : 'hover:bg-green-700',]" >
              <span class="text-white font-bold text-xl text-center leading-9">{{ (creatingWord || updatingWord) ? 'در حال پردازش...' : (isEditMode ? 'ذخیره ویرایش' : 'ساخت لغت') }}</span>
            </div>
          </button>
        </div>
      </div>
    </transition>
    
    <!-- NEW: Word Deletion Confirmation Modal -->
    <transition name="modal-fade" appear>
        <div v-if="isDeleteConfirmModalOpen" @click="isDeleteConfirmModalOpen = false" class="fixed inset-0 z-[1000000] bottom-0 flex justify-center items-center w-full bg-black/50 p-4" >
            <div @click.stop class="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full font-zain flex flex-col items-center gap-6" dir="rtl">
                <icons-circle-x width="50" height="50" color="#EF4444" class="opacity-80" />
                <h3 class="text-xl font-bold text-gray-800 text-center">تأیید حذف لغت</h3>
                <p v-if="wordToDelete" class="text-center text-gray-600 leading-7">
                    آیا مطمئن هستید که می‌خواهید لغت
                    <span class="font-extrabold text-[#7FB77E] px-1">"{{ wordToDelete.word }}"</span>
                    را برای همیشه حذف کنید؟ این عمل <span class="text-red-600 font-bold">قابل بازگشت نیست</span>.
                </p>
                
                <div class="w-full flex justify-between gap-4 mt-2">
                    <button 
                        @click="executeDelete" 
                        :disabled="deletingWord"
                        :class="['flex-1','py-3','rounded-full','text-white','font-bold','transition-colors','duration-200', deletingWord ? 'bg-red-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700']"
                    >
                        <span v-if="deletingWord">در حال حذف...</span>
                        <span v-else>حذف کن</span>
                    </button>
                    <button 
                        @click="isDeleteConfirmModalOpen = false" 
                        :disabled="deletingWord"
                        class="flex-1 py-3 rounded-full bg-gray-200 text-gray-700 font-bold hover:bg-gray-300 transition-colors duration-200"
                    >
                        لغو
                    </button>
                </div>
            </div>
        </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useToast } from 'vue-toastification/dist/index.mjs';
import { useRouter } from 'vue-router';
// IMPORT NEW COMPOSABLE
import useDeleteWord from '@/composable/useDeleteWord'; 

// ** Start: Icon Component Stubs (Assuming the following imports are available) **
const DictionaryTag = defineComponent({
    props: ['title'],
    template: `<div class="bg-[#F5F6F4] text-[#2B2B2B] text-xs px-[18px] py-[10px] rounded-[1000px] border border-[#DADDD8]">{{ title }}</div>`
});
const iconsPopUpFlash = defineComponent({
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
});
const iconsAddOrCreate = defineComponent({
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`
});
const iconsSearch = defineComponent({
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`
});
const iconsDownArrow = defineComponent({
    template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`
});
const iconsCircleX = defineComponent({
    props: ['width', 'height', 'color'],
    template: `<svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x" :style="{ color: color || 'currentColor' }"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`
});
// ** End: Icon Component Stubs **

// فرض بر این است که کامپوزبل‌ها در دسترس هستند
// NOTE: These are placeholders. You MUST ensure real imports are used in your environment.
const useAuthToken = () => ({ token: ref('FAKE_AUTH_TOKEN'), user: ref({}) });
const useSearchWords = () => ({ searchWords: async () => ({ data: [] }), loading: ref(false), errMessage: ref('') });
const useUpdateWord = () => ({ updateWord: async () => {}, loading: ref(false), errMessage: ref('') });
const useCreateWord = () => ({ createWord: async () => {}, loading: ref(false), errMessage: ref('') });
const useFetchDictionaries = () => ({ fetchDictionaries: async () => {}, responseData: ref({ data: [] }), loading: ref(false), errMessage: ref('') });

const { token: AUTH_TOKEN, user: currentUser } = useAuthToken();
const toast = useToast(); 
const router = useRouter();
const isExpanded = ref(false);

const OpenModalStudentList = ref(false); 

// NEW: Delete State
const isDeleteConfirmModalOpen = ref(false);
const wordToDelete = ref(null); // {id: number, word: string}

const selectedDictionary = ref(null);
const wordName = ref("");
const pronunciation = ref(""); 
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

// Existing Composables usage
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

// NEW: Delete Composables usage
const { 
  deleteWord: deleteWordApi, 
  loading: deletingWord,
  errMessage: deleteWordErrorMsg,
} = useDeleteWord();


const dictionaries = ref([]); 

const fetchDictionariesList = async () => {
    try {
        if (!AUTH_TOKEN.value) {
            handleAuthError();
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
    pronunciation.value = "";
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
    return arr.join(', '); 
};

const editWord = (word) => {
    clearWordFields(); 
    isEditMode.value = true;
    currentWordId.value = word.id;
    selectedDictionary.value = word.dictionary_id; 
    wordName.value = word.word || "";
    pronunciation.value = word.pronunciation || "";
    definition.value = word.meaning || "";
    synonym.value = arrayToFormattedString(word.synonyms); 
    opposite.value = arrayToFormattedString(word.antonyms); 
    relatedWords.value = arrayToFormattedString(word.related_words); 
    examples.value = word.description || "";
    
    OpenModalStudentList.value = true; 
    searchQuery.value = "";
}

// NEW: Function to open the delete confirmation modal
const confirmDelete = (word) => {
    wordToDelete.value = word;
    isDeleteConfirmModalOpen.value = true;
}

// NEW: Function to execute the deletion
const executeDelete = async () => {
    if (!wordToDelete.value || !AUTH_TOKEN.value) return;

    const { id, word } = wordToDelete.value;
    
    try {
        if (!AUTH_TOKEN.value) {
            handleAuthError();
            return;
        }

        await deleteWordApi(AUTH_TOKEN.value, id);
        
        toast.success(`لغت "${word}" با موفقیت حذف شد.`);
        
        // حذف لغت از نتایج جستجوی فعال
        searchResults.value = searchResults.value.filter(w => w.id !== id);
        
    } catch (error) {
        console.error("خطا در اجرای حذف لغت:", error);
        toast.error(`خطا در حذف لغت: ${deleteWordErrorMsg.value || 'خطای شبکه'}`);
    } finally {
        wordToDelete.value = null;
        isDeleteConfirmModalOpen.value = false;
    }
}


const searchQuery = ref("");
let searchTimer = null;

watch(searchQuery, (newQuery) => {
    if (searchTimer) {
        clearTimeout(searchTimer);
    }
    
    searchResults.value = []; 
    
    if (newQuery.length < 2) {
        return; 
    }

    searchTimer = setTimeout(async () => {
        try {
            if (!AUTH_TOKEN.value) {
                handleAuthError();
                return;
            }
            
            const response = await searchWords(AUTH_TOKEN.value, dictionaryIdForSearch, newQuery.trim());
            
            searchResults.value = response.data || [];
        } catch (error) {
            console.error("خطا در جستجوی لغت:", error);
            searchResults.value = []; 
        }
    }, 500); 
});

const parseToArray = (text) => {
    if (!text) return [];
    return text.split(/[\n,]/) 
               .map(s => s.trim())
               .filter(s => s.length > 0);
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
        pronunciation: pronunciation.value.trim() || null, 
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
        
    } catch (error) {
        console.error(`خطا در ${isEditMode.value ? 'ویرایش' : 'ایجاد'} لغت:`, error);
        const errorMsg = isEditMode.value ? updateWordErrorMsg.value : createWordErrorMsg.value;
        const displayMessage = errorMsg || "خطای ناشناخته در پردازش لغت";
        toast.error(`خطا: ${displayMessage}`);
    }
};


onMounted(() => {
  fetchDictionariesList();
});

const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
<style scoped>
/* Custom Scrollbar for better aesthetics */
.custom-offcanvas2::-webkit-scrollbar {
    width: 8px;
}
.custom-offcanvas2::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}
.custom-offcanvas2::-webkit-scrollbar-thumb {
    background: #7FB77E;
    border-radius: 10px;
}
.custom-offcanvas2::-webkit-scrollbar-thumb:hover {
    background: #6aa86a;
}

/* Modal Transition Styles */
.modal-slide-enter-active, .modal-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
}

.modal-slide-enter-from, .modal-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
</style>