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
          <button  @click="OpenModalStudentList = true" type="button" class="flex flex-row justify-center items-center gap-[5px] px-[18px] py-[11px] bg-[#7FB77E] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)]">
            <span class="text-white font-bold text-[13px] leading-[24px]">اضافه کردن لغت</span>
            <icons-add-or-create class="w-5 h-5" />
          </button>

<div class="flex items-center justify-center gap-4">
    <div class="relative w-[400px]">
      <!-- فیلد واقعی -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="لغت مورد نظر را وارد کنید"
        class="w-full h-[50px] pl-[14px] pr-[50px] text-right text-[13px] leading-[22px] text-[#2B2B2B] font-normal placeholder:text-[#DADDD8] bg-[#F5F6F4] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] focus:outline-none"
      />

      <!-- آیکون جستجو -->
      <icons-search
        class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-[#2B2B2B] pointer-events-none"
      />

      <!-- لیست پیشنهادات (اختیاری) -->
      <ul
        v-if="filteredSuggestions.length"
        class="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg max-h-40 overflow-auto z-10"
      >
        <li
          v-for="(item, index) in filteredSuggestions"
          :key="index"
          @click="selectSuggestion(item)"
          class="px-4 py-2 cursor-pointer hover:bg-gray-100 text-right text-sm"
        >
          {{ item }}
        </li>
      </ul>
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
  </div>

  <transition name="modal-slide" appear>
    <div
      v-if="OpenModalStudentList"
      @click="OpenModalStudentList = false"
      class="fixed inset-0 z-[1000000] bottom-0 flex justify-center items-center w-full bg-black/50"
    >
      <div
        @click.stop
        class="absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-xl bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[45px] flex flex-col items-center px-[28px] py-[35px] gap-[32px] font-zain"
      >
        <div
          :class="[
            'w-full',
            'overflow-hidden',
            'flex',
            'flex-col',
            'items-end',
            'gap-[28px]',
            'mb-3',
            'transition-all',
            'duration-500',
            'ease-in-out',
            isExpanded ? 'max-h-[2000px]' : 'max-h-52',
          ]"
        >
          <div class="flex flex-col items-end gap-[10px] w-full">
            <span class="text-base leading-[24px] text-[#2B2B2B]"
              >:لطفا دیکشنری مورد نظر را انتخاب کنید</span
            >
            <div class="relative w-full sm:w-[300px]">
              <div v-if="loadingDictionaries" class="p-3 text-xs text-gray-500">در حال بارگذاری دیکشنری‌ها...</div>
              <select
                v-else
                v-model="selectedDictionary"
                class="appearance-none w-full h-[50px] px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-right text-xs text-[#2B2B2B] focus:outline-none cursor-pointer truncate"
              >
                <option :value="null" disabled>انتخاب یا سرچ میان دیکشنری‌ها</option>
                <option v-for="dict in dictionaries" :key="dict.id" :value="dict.id">
                  {{ dict.name }}
                </option>
              </select>
              <icons-down-arrow
                v-if="!loadingDictionaries"
                class="absolute left-[16px] top-1/2 -translate-y-1/2 w-[13px] h-[13px] pointer-events-none"
              />
            </div>
          </div>

          <div
            class="w-full flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-12"
          >
            <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
              <label class="text-lg leading-[28px] text-[#2B2B2B]">:تعریف</label>
              <textarea
                v-model="definition"
                placeholder="تعریف مورد نظر را وارد کنید"
                dir="rtl"
                class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
              ></textarea>
            </div>

            <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
              <label class="text-lg leading-[28px] text-[#2B2B2B]">:نام لغت</label>
              <input
                type="text"
                v-model="wordName"
                placeholder="نام لغت دلخواه را وارد کنید"
                dir="rtl"
                class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] text-right truncate focus:outline-none"
              />
            </div>
          </div>

          <div
            class="w-full flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-12"
          >
            <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
              <label class="text-lg leading-[28px] text-[#2B2B2B]">:متضاد</label>
              <textarea
                v-model="opposite"
                placeholder="متضادها را با کاما یا خط جدید جدا کنید"
                dir="rtl"
                class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
              ></textarea>
            </div>

            <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
              <label class="text-lg leading-[28px] text-[#2B2B2B]">:مترادف</label>
              <textarea
                v-model="synonym"
                placeholder="مترادف‌ها را با کاما یا خط جدید جدا کنید"
                dir="rtl"
                class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div
            class="w-full flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-12"
          >
            <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
              <label class="text-lg leading-[28px] text-[#2B2B2B]">:مثال‌ها</label>
              <textarea
                v-model="examples"
                placeholder="مثال‌های مرتبط را بنویسید (به عنوان توضیحات/Description ارسال می‌شود)"
                dir="rtl"
                class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
              ></textarea>
            </div>

            <div class="w-full sm:w-[50%] flex flex-col items-end gap-[10px]">
              <label class="text-lg leading-[28px] text-[#2B2B2B]">:هم‌خانواده</label>
              <textarea
                v-model="relatedWords"
                placeholder="لغات هم‌خانواده را با کاما یا خط جدید جدا کنید"
                dir="rtl"
                class="w-full px-[16px] py-[14px] bg-[rgba(127,183,126,0.2)] rounded-[12px] text-xs text-[#2B2B2B] leading-[20px] resize-none overflow-auto break-words text-right focus:outline-none"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="relative w-full flex flex-col items-center">
          <div class="w-full h-[1px] bg-[#DADDD8]"></div>
          <button
            type="button"
            @click="toggleExpansion"
            class="absolute top-1/2 -translate-y-1/2 flex justify-center items-center gap-[8px] px-[22px] py-[6px] bg-[#7FB77E] rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md"
          >
            <icons-down-arrow
              :class="[
                'w-[13px]',
                'h-[13px]',
                'text-white',
                'transition-transform',
                'duration-500',
                isExpanded ? 'rotate-180' : 'rotate-0',
              ]"
            />
            <span class="text-white text-sm leading-[28px]">{{
              isExpanded ? 'موارد کمتر' : 'موارد بیشتر'
            }}</span>
          </button>
        </div>

        <button
          type="button"
          @click="createWordHandler"
          :disabled="creatingWord"
          class="w-full flex justify-center items-start mt-3"
        >
          <div
            :class="[
              'w-full',
              'flex',
              'justify-center',
              'items-center',
              'gap-[8px]',
              'px-12',
              'py-[14px]',
              'bg-[#7FB77E]',
              'rounded-[1000px]',
              'transition-colors',
              'duration-300',
              'shadow-lg',
              creatingWord ? 'opacity-60 cursor-not-allowed' : 'hover:bg-green-700',
            ]"
          >
            <span class="text-white font-bold text-xl text-center leading-[38px]">{{
              creatingWord ? 'در حال ساخت...' : 'ساخت لغت'
            }}</span>
          </div>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import pkg from 'vue-toastification';

// با این کار useToast به درستی استخراج می‌شود
const { useToast } = pkg;

// توکن احراز هویت - **حتماً این مقدار را با توکن واقعی کاربر جایگزین کنید.**
const AUTH_TOKEN = "11|VYO9WhoeovtDEWa1rizPYMeeIIw9hPHTympAmXZ3dcc0df85"; 

const toast = useToast();
const isExpanded = ref(false);

// این متغیر باید از بیرون (کامپوننت والد) به عنوان prop دریافت شود یا در همین‌جا تعریف گردد
const OpenModalStudentList = ref(false); 

// --- وضعیت فرم ---
const selectedDictionary = ref(null);
const wordName = ref("");
const definition = ref(""); 
const synonym = ref("");    
const opposite = ref("");   
const relatedWords = ref(""); 
const examples = ref("");   

// --- منطق واکشی دیکشنری‌ها ---
const { 
  fetchDictionaries,
  responseData: dictionariesResponse, 
  loading: loadingDictionaries, 
  errMessage: dictionariesErrorMsg 
} = useFetchDictionaries();

const dictionaries = ref([]);
const fetchDictionariesList = async () => {
    try {
        await fetchDictionaries(AUTH_TOKEN);
        if (dictionariesResponse.value && Array.isArray(dictionariesResponse.value.data)) {
            dictionaries.value = dictionariesResponse.value.data;
            // انتخاب اولین دیکشنری به عنوان پیش‌فرض در صورت وجود
            if (dictionaries.value.length > 0) {
                selectedDictionary.value = dictionaries.value[0].id;
            }
        }
    } catch (error) {
        console.error("خطا در واکشی دیکشنری‌ها:", dictionariesErrorMsg.value);
        toast.error(`خطا در بارگذاری دیکشنری‌ها: ${dictionariesErrorMsg.value}`);
    }
};

onMounted(fetchDictionariesList);

// --- منطق ایجاد لغت ---
const {
  createWord,
  loading: creatingWord,
  errMessage: createWordErrorMsg,
} = useCreateWord();

const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value;
};

/**
 * تابع کمکی برای تبدیل ورودی‌های متنی جدا شده با کاما یا خط جدید به آرایه
 * @param {string} text - متن ورودی از فیلدهای textarea
 * @returns {string[]} آرایه‌ای از رشته‌های تمیز شده
 */
const parseToArray = (text) => {
    if (!text) return [];
    // تقسیم بر اساس کاما یا خط جدید، حذف فضاهای خالی اطراف و فیلتر کردن رشته‌های خالی
    return text.split(/[\n,]/)
               .map(s => s.trim())
               .filter(s => s.length > 0);
};

const createWordHandler = async () => {
    // 1. اعتبارسنجی
    if (!selectedDictionary.value) {
        toast.error("لطفاً یک دیکشنری انتخاب کنید.");
        return;
    }
    if (!wordName.value || !definition.value) {
        toast.error("فیلدهای نام لغت و تعریف اجباری هستند.");
        return;
    }

    // 2. ساخت Payload مطابق با API
    const payload = {
        dictionary_id: selectedDictionary.value,
        word: wordName.value,
        meaning: definition.value, // (تعریف)
        synonyms: parseToArray(synonym.value), // (مترادف)
        antonyms: parseToArray(opposite.value), // (متضاد)
        related_words: parseToArray(relatedWords.value), // (هم‌خانواده)
        description: examples.value, // (مثال‌ها به عنوان توضیحات/Description ارسال می‌شود)
    };

    try {
        // 3. فراخوانی API
        await createWord(AUTH_TOKEN, payload);
        
        // 4. نمایش پیام موفقیت
        toast.success("لغت جدید با موفقیت ایجاد شد.");

        // 5. پاک کردن فرم
        wordName.value = "";
        definition.value = "";
        synonym.value = "";
        opposite.value = "";
        relatedWords.value = "";
        examples.value = "";
        
    } catch (error) {
        // 6. نمایش پیام خطا از کامپوسیبل
        console.error("خطا در ایجاد لغت:", error.message);
        toast.error(`خطا در ایجاد لغت: ${createWordErrorMsg.value}`);
    }
};

const searchQuery = ref("");
const suggestions = ref([
  "کتاب",
  "مدرسه",
  "کامپیوتر",
  "لغت",
  "یادگیری",
  "برنامه‌نویسی",
]);

// فیلتر کردن پیشنهادها بر اساس ورودی
const filteredSuggestions = computed(() =>
  suggestions.value.filter((item) =>
    item.includes(searchQuery.value)
  )
);

function selectSuggestion(item) {
  searchQuery.value = item;
}
</script>

<style scoped>
textarea {
  height: auto; /* ارتفاع اولیه صفر */
  /* min-height: 48px;  */
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

/* ==== انیمیشن نمایش مودال ==== */
/* شروع ورود از پایین */
.modal-slide-enter-from .modal-box {
  transform: translateY(100px);
  opacity: 0;
}

/* هنگام ورود کامل */
.modal-slide-enter-to .modal-box {
  transform: translateY(0);
  opacity: 1;
}

/* شروع خروج به پایین (از بالا بیاد پایین) */
.modal-slide-leave-to .modal-box {
  transform: translateY(-100px);
  opacity: 0;
}

/* انیمیشن نرم */
.modal-slide-enter-active .modal-box,
.modal-slide-leave-active .modal-box {
  transition: transform 0.5s cubic-bezier(0.22, 0.9, 0.33, 1),
              opacity 0.4s ease;
}

/* ==== افکت پس‌زمینه تاریک ==== */
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