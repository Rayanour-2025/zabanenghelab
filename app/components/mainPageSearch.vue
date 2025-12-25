<template>
    <div class="relative w-[1000px] mx-auto group">
        <div dir="rtl"
            class="w-full h-[65px] flex flex-row justify-between items-center p-[10px_20px] bg-[rgba(245,246,244,0.2)] border border-[#7FB77E] shadow-[0_5px_12px_-5px_rgba(92,99,105,0.2)] rounded-[500px] box-border lens-inner2">
            <input v-model="searchQuery" @keydown.down.prevent="moveDown" @keydown.up.prevent="moveUp"
                @keydown.enter.prevent="selectCurrentItem" type="text" placeholder="هرچی میخوای اینجا بنویس"
                class="w-full h-full font-zain font-normal text-base bg-transparent leading-7 text-[#7FB77E] placeholder:text-[#7FB77E] text-center outline-none">
        </div>

        <transition name="fade">
            <div v-if="(searchQuery.length >= 2 && (loading || searchResults.length > 0))"
                class="absolute top-[75px] left-0 right-0 bg-white border border-[#7FB77E] rounded-[20px] shadow-lg z-50 overflow-hidden">

                <div v-if="loading" class="w-full px-4 py-6 text-center text-sm text-[#7FB77E]">
                    <div class="flex items-center justify-center gap-2">
                        <svg class="animate-spin h-5 w-5 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <span>...درحال جستجو</span>
                    </div>
                </div>

                <ul v-else-if="searchResults.length" id="suggestion-list"
                    class="custom-scrollbar max-h-[280px] overflow-y-auto py-2">
                    <li v-for="(item, index) in searchResults" :key="index" @mouseover="activeIndex = index"
                        @click="selectItem(item)" :class="['px-6 py-3 cursor-pointer text-right text-gray-700 transition-colors',
                            { 'bg-[#7FB77E33] text-[#7FB77E]': index === activeIndex }]">
                        {{ item.word }}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script setup>
import useSearchWordsWithoutToken from '~/composables/useSearchWordsWithoutToken';
import { useAuthToken } from '~/composables/useAuthCrypto'; 
const prop = defineProps({
    source_language: {
        default: 1,
        type: [String, Number]
    },
    target_language: {
        default: 2,
        type: [String, Number]
    }
})
const { loading, searchWords } = useSearchWordsWithoutToken();
const { token: AUTH_TOKEN } = useAuthToken();

const searchQuery = ref('');
const searchResults = ref([]); // منبع اصلی نمایش در لیست
const activeIndex = ref(-1);
let searchTimer = null; // اصلاح تعریف متغیر

const scrollToActive = () => {
    const container = document.getElementById('suggestion-list');
    const activeElement = container?.querySelectorAll('li')[activeIndex.value];
    if (activeElement) {
        activeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
};

const moveDown = () => {
    if (activeIndex.value < searchResults.value.length - 1) {
        activeIndex.value++;
        nextTick(scrollToActive);
    }
};

const moveUp = () => {
    if (activeIndex.value > 0) {
        activeIndex.value--;
        nextTick(scrollToActive);
    }
};

const selectItem = (item) => {
    searchQuery.value = item.word;
    searchResults.value = [];
    activeIndex.value = -1;
    navigateTo({ path: '/translate', query: { word: item.id } });
};

const selectCurrentItem = () => {
    if (activeIndex.value >= 0 && activeIndex.value < searchResults.value.length) {
        selectItem(searchResults.value[activeIndex.value]);
    }
    else if (searchQuery.value.trim()) {
        navigateTo({
            path: '/translate',
            query: { word: searchQuery.value.trim() }
        });
    }
};

// واچ برای جستجوی لایو از API
watch(searchQuery, (newQuery) => {
    if (searchTimer) clearTimeout(searchTimer);

    if (newQuery.trim().length < 2) {
        searchResults.value = [];
        return;
    }

    searchTimer = setTimeout(async () => {
        try {
            const response = await searchWords(AUTH_TOKEN.value, newQuery.trim(), prop.source_language, prop.target_language); 
            searchResults.value = response?.data || response || [];
            activeIndex.value = -1;
        } catch (error) {
            console.log(error)
            searchResults.value = [];
        }
    }, 500);
});

if (process.client) {
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.group')) searchResults.value = [];
    });
}
</script>
<style scoped>
/* شخصی‌سازی نوار اسکرول لیست */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #7FB77E;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

/* انیمیشن لیست */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s, transform 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>