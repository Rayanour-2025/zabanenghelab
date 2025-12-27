<template>

    <div
        class="w-full flex flex-col justify-center items-end gap-[30px] px-[40px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
        <div class="w-full font-zain flex flex-col items-end gap-8">
            <SearchBoxOfDashboard />
            <div dir="rtl">
                <h2 class="font-extrabold text-3xl">سلام</h2>
                <div>
                    <h3 class="text-xl font-medium my-4">تعریف:</h3>
                    <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                        سلام و احوالپرسی که هنگام ملاقات با کسی استفاده می‌شود.
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-medium my-4">مترادف:</h3>
                    <div class="bg-[#7FB77E33] relative w-fit rounded-2xl p-4">
                        <span>ذکر</span> ، <span>سلامت</span> ، <span>تعظیم</span> ،
                        <span>تهنیت</span> ، <span>احترام نظامی</span> ،
                        <span>درود گویی</span> ، <span>مراسم عیاد</span> ،
                        <span>تندرستی</span>
                        <div @click="openEditorModal('ویرایش توضیحات')"
                            class="absolute top-3 left-3 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
                            <IconsPencil :width="17" :height="17" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-medium my-4">متضاد:</h3>
                    <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                        <span>خداحافظ</span>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-medium my-4">هم خانواده:</h3>
                    <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                        <span>سلم</span> ،
                        <span>سلیم</span> ،
                        <span>سالم</span> ،
                        <span>اسلام</span> ،
                        <span>سلامت</span> ،
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-medium my-4">توضیحات:</h3>
                    <div class="bg-[#7FB77E33] w-fit rounded-2xl p-4">
                        فقط برای اینکه بگم، سلام، من برگشتم به محله.
                    </div>
                </div>
                <div class="mt-8 pt-3">
                    <!-- <h3 class="text-xl font-medium my-4 " >بارگزاری صوت:</h3> -->
                    <label class="bg-[#7FB77E]  text-white rounded-full p-4" for="audio">
                        بارگزاری صوت
                        <input type="file" name="audio" class="hidden" id="audio">
                    </label>
                </div>
                <div class="mt-10">
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
    </div>
</template>

<script setup>
import RichTextEditor from '~/components/dictionary/RichTextEditor.vue';
definePageMeta({ layout: 'dashboard-admin' })
const isEditorModalOpen = ref(false)
const editorContent = ref('')
const editorTitle = ref(null)
const currentFieldToEdit = ref('')
const openEditorModal = (title) => {
    // currentFieldToEdit.value = fieldKey;
    editorTitle.value = title;
    isEditorModalOpen.value = true;
};
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