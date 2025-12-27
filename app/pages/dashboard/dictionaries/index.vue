<template>
    <div
        class="w-full flex flex-col justify-center items-end gap-[30px] px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
        <search-box-of-dictionary @open-form="openAddForm" v-model="searchQuery" />
        <div dir="rtl" class="w-full p-5">
            <div class="w-full">
                <!-- <h2 class="text-3xl mb-6">فارسی:</h2> -->
                <div class="flex w-full gap-y-4 gap-x-8 flex-wrap">
                    <div v-if="searchLoaing" class="w-full flex flex-col items-center py-12 gap-4">
                        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7FB77E]"></div>
                        <span class="text-[#7FB77E] text-lg font-bold">در حال جستجو در لغت‌نامه‌ها...</span>
                    </div>

                    <template v-else>
                        <template v-if="!searchQuery">
                            <temp-dictionary @is-open-form="fetchData" v-for="dictionary in dictionaries?.data"
                                :key="dictionary.id" :data="dictionary" />
                        </template>

                        <template v-else>
                            <template v-if="searchResults.length > 0">
                                <temp-dictionary @is-open-form="fetchData" v-for="dictionary in searchResults"
                                    :key="dictionary.id" :data="dictionary" />
                            </template>

                            <div v-else-if="searchQuery.length >= 2"
                                class="w-full flex flex-col items-center py-12 bg-gray-50 rounded-[30px] border-2 border-dashed border-gray-200">
                                <icons-circle-x width="50" height="50" color="#cbd5e1" />
                                <p class="text-gray-400 text-xl mt-4">لغت‌نامه‌ای با نام «{{ searchQuery }}» پیدا نشد.
                                </p>
                                <button @click="searchQuery = ''" class="mt-2 text-[#7FB77E] underline">نمایش همه
                                    لغت‌نامه‌ها</button>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
        <loading-animation v-if="loading" />
        <template v-if="isOpenForm">
            <dictionary-form-modal @reload="reloadData" :lang="options" v-model:is-open="isOpenForm"
                :dictionary="singleDic?.dicEdit" />
        </template>
        <template v-if="isOpenAddForm">
            <add-dictionary-form-modal :lang="options" @reload="reloadData" v-model:is-open="isOpenAddForm" />
        </template>
    </div>
</template>
<script setup>
import searchBoxOfDictionary from '~/components/dictionary/searchBoxOfDictionary.vue';
import TempDictionary from '~/components/template/TempDictionary.vue';
import useFetchDictionaries from '~/composables/useFetchDictionaries';
import { useAuthToken } from '~/composables/useAuthCrypto'
import loadingAnimation from '~/components/loadingAnimation.vue';
import useSearchDictionaries from '~/composables/useSearchDictionaries'
import useFetchLanguages from '~/composables/useFetchLanguages'
import addDictionaryFormModal from '~/components/dictionary/addDictionaryFormModal.vue';
import { useToast } from 'vue-toastification'
import dictionaryFormModal from '~/components/dictionary/dictionaryFormModal.vue';
definePageMeta({
    layout: "dashboard-admin"
})
const isOpenAddForm = ref(false)
const isOpenForm = ref(false)
const toast = useToast()
const { loading: searchLoaing, responseData: dictionaryResult, searchDictionary } = useSearchDictionaries()
const { isLoggedIn, token: AUTH_TOKEN, isAdmin } = useAuthToken()
const { loading, responseData: responeDictionay, fetchDictionaries } = useFetchDictionaries()
const dictionaries = ref()
const { fetchLanguages, responseData: languageData, } = useFetchLanguages()
const options = ref([])
let searchTimer = null;
const searchQuery = ref('')
const searchResults = ref([])
const handleAuthError = () => {
    toast.error('مشکلی در شناسایی شما پیش آمده. لطفاً دوباره وارد شوید.');
    router.push('/login');
};
const loadData = async () => {
    if (AUTH_TOKEN.value, isLoggedIn.value, isAdmin.value) {
        await fetchDictionaries(AUTH_TOKEN.value)
        dictionaries.value = responeDictionay.value
    }
}
loadData()
const reloadData = (flag) => {
    if (flag) {
        loadData()
    }
}
const loadLang = async () => {
    if (isLoggedIn.value, AUTH_TOKEN.value) {
        await fetchLanguages(AUTH_TOKEN.value)
        languageData?.value.data.forEach(lang => {
            const obg = {}
            obg.label = lang.name
            obg.value = lang.id
            options.value.push(obg)
        });
    } else {
        toast.error('ابتدا وارد حساب خود شوید.')
    }
}
loadLang()
watch(searchQuery, (newQuery) => {
    if (searchTimer) {
        clearTimeout(searchTimer);
    }

    // اگر فیلد خالی شد، نتایج قبلی را پاک کن
    if (!newQuery || newQuery.length === 0) {
        searchResults.value = [];
        return;
    }

    if (newQuery.length < 1) {
        return;
    }

    searchTimer = setTimeout(async () => {
        try {
            if (!AUTH_TOKEN.value) {
                handleAuthError();
                return;
            }

            const response = await searchDictionary(
                AUTH_TOKEN.value, newQuery.trim()
            );

            // مطمئن شویم که اگر دیتایی نبود، آرایه خالی ست شود
            searchResults.value = response?.data || [];

        } catch (error) {
            console.error('خطا در جستجوی لغت:', error);
            searchResults.value = [];
        }
    }, 500);
});
const singleDic = ref()
const fetchData = (data) => {
    singleDic.value = data
    isOpenForm.value = data.form
}
const openAddForm = (flag) => {
    isOpenAddForm.value = flag
}
</script>