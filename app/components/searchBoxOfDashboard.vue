<template>
    <div class="w-full font-zain flex flex-col items-end gap-8">
        <div class="flex flex-row justify-between items-center w-full h-[50px]">
            <button @click="openCreateWordModal" type="button"
                class="flex flex-row justify-center items-center gap-[5px] px-[18px] py-[11px] bg-[#7FB77E] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] hover:bg-green-700 transition-colors duration-300">
                <span class="text-white font-bold text-[13px] leading-[24px]">اضافه کردن لغت</span>
                <icons-add-or-create class="w-5 h-5" />
            </button>

            <UiSearchInput v-model:query="searchQuery" :search-results="searchResults" :searching="searchingWord"
                @delete-word="confirmDeleteWord" @edit-word="editWord" />
        </div>

        <div class="w-full h-px border border-[#DADDD8]"></div>

    </div>

    <DictionaryWordFormModal v-model:is-open="isModalOpen" :dictionaries="dictionaries"
        :loading-dictionaries="loadingDictionaries" :initial-data="initialWordData" :is-edit-mode="isEditMode"
        :is-processing="creatingWord || updatingWord" @save="saveWordHandler" />

</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
// فرض بر این است که این دو از Nuxt/Vue می‌آیند
import { useToast } from 'vue-toastification/dist/index.mjs';
import { useRouter } from 'vue-router';
// استفاده از کامپوزبل‌ها (باید در مسیر `composables` ایجاد شوند)
import { useAuthToken } from '@/composables/useAuthCrypto';
import useSearchWords from '@/composables/useSearchWords';
import useUpdateWord from '@/composables/useUpdateWord';
import useCreateWord from '@/composables/useCreateWord';
import useFetchDictionaries from '@/composables/useFetchDictionaries';
import useDeleteWord from '@/composables/useDeleteWord';
// تابع کمکی
import { arrayToFormattedString, parseToArray } from '@/utils/formatters';

// --- مدیریت حالت‌های عمومی ---
const { token: AUTH_TOKEN } = useAuthToken();
const toast = useToast();
const router = useRouter();

// حالت‌های مدال
const isModalOpen = ref(false);
const isEditMode = ref(false);
const currentWordId = ref(null);
const initialWordData = ref({}); // داده‌های اولیه برای مدال (پر شدن فرم در حالت ویرایش)

// حالت‌های جستجو
const searchQuery = ref('');
const searchResults = ref([]);
const dictionaryIdForSearch = 1; // فرض بر این است که جستجو در یک دیکشنری خاص انجام می‌شود

// --- فراخوانی کامپوزبل‌ها ---
const {
    fetchDictionaries,
    responseData: dictionariesResponse,
    loading: loadingDictionaries,
    errMessage: dictionariesErrorMsg,
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
}
    = useUpdateWord();

const {
    deleteWord,
    loading: deletingWord,
    errMessage: deleteErrorMsg,
} = useDeleteWord();

// --- متغیرهای واکشی شده ---
const dictionaries = ref([]);

// --- توابع کمکی ---

const handleAuthError = () => {
    toast.error('مشکلی در شناسایی شما پیش آمده. لطفاً دوباره وارد شوید.');
    // مطمئن شوید که مسیر `login` درست است
    router.push('/login');
};

/**
 * پاک کردن فیلدهای فرم و تنظیم مجدد حالت.
 */
const clearWordFields = () => {
    isEditMode.value = false;
    currentWordId.value = null;
    initialWordData.value = {};
    // تنظیم دیکشنری پیش فرض (اگر لیست وجود داشته باشد)
    if (dictionaries.value.length > 0) {
        initialWordData.value.selectedDictionary = dictionaries.value[0].id;
    } else {
        initialWordData.value.selectedDictionary = null;
    }
};

/**
 * باز کردن مدال برای ایجاد لغت جدید.
 */
const openCreateWordModal = () => {
    clearWordFields();
    isModalOpen.value = true;
};

/**
 * تنظیم داده‌های اولیه برای ویرایش و باز کردن مدال.
 * @param {Object} word - شیء لغت برای ویرایش.
 */
const editWord = (word) => {
    // پاکسازی و تنظیم حالت ویرایش
    clearWordFields();
    isEditMode.value = true;
    currentWordId.value = word.id;

    // پر کردن initialWordData برای کامپوننت مدال
    initialWordData.value = {
        selectedDictionary: word.dictionary_id,
        wordName: word.word || '',
        pronunciation: word.pronunciation || '',
        definition: word.meaning || '',
        synonym: arrayToFormattedString(word.synonyms),
        opposite: arrayToFormattedString(word.antonyms),
        relatedWords: arrayToFormattedString(word.related_words),
        examples: word.description || '',
    };

    isModalOpen.value = true;
    searchQuery.value = '';
};


// --- توابع Handler ---

/**
 * واکشی لیست دیکشنری‌ها.
 */
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
            // تنظیم دیکشنری پیش فرض برای حالت ایجاد
            if (dictionaries.value.length > 0 && initialWordData.value.selectedDictionary === null) {
                initialWordData.value.selectedDictionary = dictionaries.value[0].id;
            }
        } else {
            console.warn(
                'ساختار پاسخ API برای دیکشنری‌ها صحیح نیست:',
                dictionariesResponse.value
            );
        }
    } catch (error) {
        console.error('خطا در واکشی دیکشنری‌ها:', error);
        toast.error(
            `خطا در بارگذاری دیکشنری‌ها: ${dictionariesErrorMsg.value || 'خطای شبکه'}`
        );
    }
};

/**
 * مدیریت ایجاد یا ویرایش لغت از طریق مدال.
 * @param {Object} data - داده‌های فرم ارسال شده از مدال.
 */
const saveWordHandler = async (data) => {
    // ساختاردهی payload
    const payload = {
        word: data.wordName.trim(),
        meaning: data.definition.trim(),
        pronunciation: data.pronunciation.trim() || null,
        // استفاده از تابع کمکی
        synonyms: parseToArray(data.synonym),
        antonyms: parseToArray(data.opposite),
        related_words: parseToArray(data.relatedWords),
        description: data.examples.trim() || null,
    };

    if (!isEditMode.value) {
        payload.dictionary_id = data.selectedDictionary;
    }

    try {
        if (!AUTH_TOKEN.value) {
            handleAuthError();
            return;
        }

        if (isEditMode.value && currentWordId.value) {
            await updateWord(AUTH_TOKEN.value, currentWordId.value, payload);
            toast.success('لغت با موفقیت ویرایش شد.');
            // به‌روزرسانی نتایج جستجو اگر لغت ویرایش شده در آن باشد (اختیاری)
            const index = searchResults.value.findIndex(w => w.id === currentWordId.value);
            if (index !== -1) {
                // به‌روزرسانی تقریبی لغت در لیست جستجو
                searchResults.value[index] = { ...searchResults.value[index], ...payload };
            }
        } else {
            await createWord(AUTH_TOKEN.value, payload);
            toast.success('لغت جدید با موفقیت ایجاد شد.');
        }

        clearWordFields();
        isModalOpen.value = false;
    } catch (error) {
        console.error(
            `خطا در ${isEditMode.value ? 'ویرایش' : 'ایجاد'} لغت:`,
            error
        );
        const errorMsg = isEditMode.value
            ? updateWordErrorMsg.value
            : createWordErrorMsg.value;
        const displayMessage = errorMsg || 'خطای ناشناخته در پردازش لغت';
        toast.error(`خطا: ${displayMessage}`);
    }
};


/**
 * تایید و حذف لغت.
 * @param {number} wordId - شناسه لغت.
 * @param {string} wordName - نام لغت برای نمایش در پیام تایید.
 */
const confirmDeleteWord = async (wordId, wordName) => {
    if (deletingWord.value) return;

    const confirmed = window.confirm(`آیا مطمئن هستید که می‌خواهید لغت "${wordName}" را حذف کنید؟`);

    if (!confirmed) return;

    try {
        if (!AUTH_TOKEN.value) {
            handleAuthError();
            return;
        }

        await deleteWord(AUTH_TOKEN.value, wordId);
        toast.success(`لغت "${wordName}" با موفقیت حذف شد.`);

        // حذف لغت از لیست نتایج جستجو
        searchResults.value = searchResults.value.filter((word) => word.id !== wordId);

        // اگر لغت حذف شده در حال ویرایش بود، مدال را ببند.
        if (isEditMode.value && currentWordId.value === wordId) {
            clearWordFields();
            isModalOpen.value = false;
        }

    } catch (error) {
        console.error('خطا در حذف لغت:', error);
        const displayMessage = deleteErrorMsg.value || 'خطای ناشناخته در حذف لغت';
        toast.error(`خطا در حذف: ${displayMessage}`);
    }
};

// --- منطق جستجو با Debounce ---
let searchTimer = null;

watch(searchQuery, (newQuery) => {
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
            if (!AUTH_TOKEN.value) {
                handleAuthError();
                return;
            }

            const response = await searchWords(
                AUTH_TOKEN.value,
                dictionaryIdForSearch,
                newQuery.trim()
            );

            // در اینجا فرض می‌کنیم پاسخ به صورت { data: [ { word } ] } است.
            searchResults.value = response.data || [];

        } catch (error) {
            console.error('خطا در جستجوی لغت:', error);
            searchResults.value = [];
            if (searchErrorMsg.value) {
                // نمایش خطا در صورت لزوم، اما برای جستجو بهتر است کاربر را با پیام‌های پی در پی آزار ندهیم
                // toast.error(`خطا در جستجو: ${searchErrorMsg.value}`);
            }
        }
    }, 500); // زمان Debounce
});

// --- Lifecycle Hook ---
onMounted(() => {
    fetchDictionariesList();
});
</script>

<style scoped>
/* استایل‌های مربوط به انتقال (Transition) بهتر است به صورت کلی در کامپوننت مدال یا فایل style جداگانه قرار گیرند */
/* اما اگر می‌خواهید در همین فایل بماند، فقط بخش‌های مربوط به مدال را نگه دارید */

/* Transition for the Modal (moved to WordFormModal.vue) */
.modal-slide-enter-from,
.modal-slide-leave-to {
    opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
    transition: opacity 0.4s ease;
}
</style>