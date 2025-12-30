<template>
    <div
        class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
        <div class="w-full font-zain flex flex-col items-end gap-8">
            <SearchBoxOfDashboard />
            <div dir="rtl">
                <h2 class="font-extrabold text-3xl">{{ data?.data?.word }}</h2>
                <div>
                    <h3 class="text-xl font-medium my-4">تعریف:</h3>
                    <div class="bg-[#7FB77E33] flex items-center w-fit rounded-2xl p-4" >
                        {{ data?.data?.meaning }}
                        <div @click="openEditorModal('ویرایش تعریف', 'meaning', data?.data?.meaning)"
                            class="w-fit mr-3 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
                            <IconsPencil :width="17" :height="17" />
                        </div>
                    </div>
                </div>
                <div  >
                    <h3 class="text-xl font-medium my-4">مترادف‌ها (با کاما جدا کنید):</h3>
                    <input 
                        type="text" 
                        :value="data?.data?.synonyms?.join('، ')"
                        @input="e => updateListField('synonyms', e.target.value)"
                        class="w-full md:w-[600px] p-4 bg-[#7FB77E15] border border-[#7FB77E33] rounded-2xl outline-none focus:border-[#7FB77E] transition-all"
                        placeholder="مثلاً: کلمه اول، کلمه دوم"
                    />
                </div>
                <div class=" ">
                    <h3 class="text-xl font-medium my-4">هم‌خانواده (با کاما جدا کنید):</h3>
                    <input 
                        type="text" 
                        :value="data?.data?.related_words?.join('، ')"
                        @input="e => updateListField('related_words', e.target.value)"
                        class="w-full md:w-[600px] p-4 bg-[#7FB77E15] border border-[#7FB77E33] rounded-2xl outline-none focus:border-[#7FB77E] transition-all"
                        placeholder="مثلاً: کلمه اول، کلمه دوم"
                    />
                </div>
               <div>
                    <h3 class="text-xl font-medium my-4">متضادها (با کاما جدا کنید):</h3>
                    <input 
                        type="text" 
                        :value="data?.data?.antonyms?.join('، ')"
                        @input="e => updateListField('antonyms', e.target.value)"
                        class="w-full md:w-[600px] p-4 bg-[#7FB77E15] border border-[#7FB77E33] rounded-2xl outline-none focus:border-[#7FB77E] transition-all"
                        placeholder="مثلاً: کلمه اول، کلمه دوم"
                    />
                </div>
                <div>
                    <h3 class="text-xl font-medium my-4">توضیحات:</h3>
                    <div class="bg-[#7FB77E33] flex items-center w-fit rounded-2xl p-4">
                        {{ data?.data?.description }}
                        <div @click="openEditorModal('ویرایش توضیحات', 'description', data?.data?.description)"
                            class="w-fit p-2 bg-white rounded-full mr-3 shadow hover:bg-gray-100 transition-colors">
                            <IconsPencil :width="17" :height="17" />
                        </div>
                    </div>
                </div>
                <!-- <div class="mt-8 pt-3">
                    <h3 class="text-xl font-medium my-4 " >بارگزاری صوت:</h3>
                    <label class="bg-[#7FB77E]  text-white rounded-full p-4" for="audio">
                        بارگزاری صوت
                        <input type="file" name="audio" class="hidden" id="audio">
                    </label>
                </div> -->
                <div @click="submitChange" class="mt-10">
                    <button class="bg-[#7FB77E]  text-white rounded-full p-4">ثبت تغییرات</button>
                </div>
            </div>
            <div class="w-full h-px border border-[#DADDD8]"></div>
        </div>

        <transition name="modal-slide" appear>
            <div v-if="isEditorModalOpen" @click="isEditorModalOpen = false"
                class="fixed inset-0 z-[10000000] bottom-0 flex justify-center items-center w-full bg-black/70">
                <div @click.stop
                    class="modal-box absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-3xl bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[40px] flex flex-col items-center px-8 py-10 gap-8 font-zain"
                    dir="rtl">

                    <h3 class="text-xl font-bold">{{ editorTitle }}</h3>
                    <ClientOnly>
                        <RichTextEditor v-model="editorContent" />
                        <template #fallback>
                            <div class="p-4 text-center text-gray-500">در حال بارگذاری ویرایشگر...</div>
                        </template>
                    </ClientOnly>
                    <div class="w-full flex justify-end gap-3 mt-4">
                        <button type="button" @click="saveEditorContent(editorContent)"
                            class="px-7 py-3 bg-[#7FB77E] text-white rounded-full hover:bg-green-700 transition-colors">ذخیره</button>
                        <button type="button" @click="isEditorModalOpen = false"
                            class="px-7 py-3 bg-gray-200 text-[#2B2B2B] rounded-full hover:bg-gray-300 transition-colors">انصراف</button>
                    </div>
                </div>
            </div>
        </transition>
        <loadingAnimation v-if="loading" />
    </div>
</template>

<script setup>
import RichTextEditor from '~/components/dictionary/RichTextEditor.vue';
import { useFetchSingleWord } from '#imports';
import { useRoute } from 'vue-router'
import loadingAnimation from '~/components/loadingAnimation.vue';
import { useAuthToken } from '~/composables/useAuthCrypto'
import useUpdateWord from '~/composables/useUpdateWord';
definePageMeta({ layout: 'dashboard-admin' })
const { loading: updateLoading, updateWord } = useUpdateWord()
const isEditorModalOpen = ref(false)
const editorContent = ref('')
const route = useRoute()
const editorTitle = ref(null)
const currentFieldToEdit = ref('')
const openEditorModal = (title, fieldKey, initialContent) => {
    editorTitle.value = title;
    currentFieldToEdit.value = fieldKey; // ذخیره نام فیلد برای زمان ذخیره‌سازی
    editorContent.value = initialContent; // ریختن مقدار فعلی در ادیتور
    isEditorModalOpen.value = true;
};
const { fetchSingleWord, responseData: data, loading } = useFetchSingleWord()
const { token: AUTH_TOKEN, isAdmin } = useAuthToken()
const loadData = async () => {
    try {
        if (isAdmin.value && AUTH_TOKEN.value) {
            await fetchSingleWord(AUTH_TOKEN.value, route.params.id)
        }
        console.log(data.value.data)
    } catch (error) {
    }
}
loadData()
const updateListField = (field, value) => {
    // تبدیل متن اینپوت به آرایه (جدا کردن با کامای فارسی یا انگلیسی)
    data.value.data[field] = value.split(/[،,]/).map(item => item.trim()).filter(item => item !== "");
};
const saveEditorContent = () => {
    if (currentFieldToEdit.value) {
        data.value.data[currentFieldToEdit.value] = editorContent.value;
    }
    isEditorModalOpen.value = false;
};
const submitChange = async () => {
    let wordId = ''
    delete data?.value?.data?.dictionary
    delete data?.value?.data?.dictionary_id
    wordId = data?.value?.data?.id
    delete data?.value?.data?.id
    console.log(data?.value.data)
    try {
        await updateWord(AUTH_TOKEN.value, wordId, data?.value?.data)
    } catch (error) {

    }
}
</script>

<style scoped>
.custom-offcanvas3 {
    overflow-y: auto;
    max-height: calc(100vh - 60px);
    padding-top: 30px;
    padding-bottom: 30px;
}

.custom-offcanvas3::-webkit-scrollbar {
    width: 8px;
}

.custom-offcanvas3::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
}

.custom-offcanvas2 {
    overflow-y: auto;
}

.custom-offcanvas2::-webkit-scrollbar {
    width: 8px;
}

.custom-offcanvas2::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.2);
}

.modal-slide-enter-from .modal-box {
    transform: translate(-50%, 100px);
    opacity: 0;
}

.modal-slide-enter-to .modal-box {
    transform: translate(-50%, 0);
    opacity: 1;
}

.modal-slide-leave-to .modal-box {
    transform: translate(-50%, -100px);
    opacity: 0;
}

.modal-slide-enter-active .modal-box,
.modal-slide-leave-active .modal-box {
    transition: transform 0.5s cubic-bezier(0.22, 0.9, 0.33, 1),
        opacity 0.4s ease;
}

.modal-slide-enter-from,
.modal-slide-leave-to {
    opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
    transition: opacity 0.4s ease;
}
</style>