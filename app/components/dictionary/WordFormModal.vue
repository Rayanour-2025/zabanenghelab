<template>
  <transition name="modal-slide" appear>
    <div v-if="isOpen" @click="$emit('update:isOpen', false)" class="fixed inset-0 z-[1000000] bottom-0 flex justify-center items-center w-full bg-black/50" >
      <div @click.stop class="modal-box absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-lg bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[40px] flex flex-col items-center px-8 py-10 gap-8 font-zain" dir="rtl" >
        <button @click="$emit('update:isOpen', false)" class="absolute top-5 left-5 p-2 rounded-full hover:bg-gray-100 transition duration-150" >
          <icons-circle-x width="35" height="35" color="#7FB77E" />
        </button>

        <form @submit.prevent="submitForm" class="w-full flex flex-col items-end gap-5" >
          <div class="flex flex-col items-start gap-3 w-full">
            <label class="text-sm leading-6 text-[#2B2B2B]">لطفا دیکشنری مورد نظر را انتخاب کنید: <span class="text-red-500">*</span></label>
            <div class="relative w-full md:w-[50%]">
              <div v-if="loadingDictionaries" class="p-3 text-xs text-gray-500">در حال بارگذاری دیکشنری‌ها...</div>
              <select v-else v-model="formData.selectedDictionary" :disabled="isEditMode" required class="appearance-none w-full h-11 px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-right text-xs text-[#2B2B2B] focus:outline-none cursor-pointer truncate disabled:opacity-70" >
                <option :value="null" disabled>انتخاب یا سرچ میان دیکشنری‌ها</option>
                <option  class="border-none" v-for="dict in dictionaries" :key="dict.id" :value="dict.id" >{{ dict.name }}</option>
              </select>
              <icons-down-arrow v-if="!loadingDictionaries" class="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
            </div>
          </div>

          <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8" >
            <div class="w-full flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">نام لغت: <span class="text-red-500">*</span></label>
              <div class="relative w-full">
                <input v-if="!hasHTML(formData.wordName)" type="text" v-model="formData.wordName" placeholder="نام لغت دلخواه را وارد کنید" required class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 text-right truncate focus:outline-none" />
                <div v-else v-html="formData.wordName" class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 text-right truncate focus:outline-none" ></div>
                <button v-if="formData.wordName" @click="openEditorModal('wordName', 'ویرایش لغت')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                  <IconsPencil width="13" height="13" color="#7FB77E" />
                </button>
              </div>
            </div>
            <div class="w-full flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">تلفظ:</label>
              <div class="relative w-full">
                <input v-if="!hasHTML(formData.pronunciation)" type="text" v-model="formData.pronunciation" placeholder="تلفظ یا آوانگاری لغت" class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 text-right truncate focus:outline-none" />
                <div v-else v-html="formData.pronunciation" class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 text-right truncate focus:outline-none"></div>
                <button v-if="formData.pronunciation" @click="openEditorModal('pronunciation', 'ویرایش تلفظ')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                  <IconsPencil width="13" height="13" color="#7FB77E" />
                </button>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8" >
            <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">تعریف: <span class="text-red-500">*</span></label>
                <div class="relative w-full">
                  <textarea v-if="!hasHTML(formData.definition)" v-model="formData.definition" placeholder="تعریف مورد نظر را وارد کنید" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></textarea>
                  <div v-else v-html="formData.definition" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]"></div>
                  <button v-if="formData.definition" @click="openEditorModal('definition', 'ویرایش تعریف')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                        <IconsPencil width="13" height="13" color="#7FB77E" />
                  </button>
                </div>
            </div>
            <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">مترادف:</label>
              <div class="relative w-full">
                <textarea v-if="!hasHTML(formData.synonym)"  v-model="formData.synonym" placeholder="مترادف‌ها را با کاما یا خط جدید جدا کنید" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></textarea>
                <div v-else v-html="formData.synonym" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]"></div>
                <button v-if="formData.synonym" @click="openEditorModal('synonym', 'ویرایش مترادف')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                  <IconsPencil width="13" height="13" color="#7FB77E" />
                </button>
              </div>
            </div>
          </div>

          <div :class="[ 'w-full', 'overflow-hidden', 'flex', 'flex-col', 'items-end', 'gap-5', 'transition-all', 'duration-500', 'ease-in-out', isExpanded ? 'max-h-[2000px]' : 'max-h-0',]" >
            <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8" >
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">متضاد:</label>
                <div class="relative w-full">
                  <textarea v-if="!hasHTML(formData.opposite)" v-model="formData.opposite" placeholder="متضادها را با کاما یا خط جدید جدا کنید" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></textarea>
                  <div v-else v-html="formData.opposite" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></div>
                  <button v-if="formData.opposite" @click="openEditorModal('opposite', 'ویرایش متضاد')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                    <IconsPencil width="13" height="13" color="#7FB77E" />
                  </button>
                </div>
              </div>
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">هم‌خانواده:</label>
                <div class="relative w-full">
                  <textarea v-if="!hasHTML(formData.relatedWords)" v-model="formData.relatedWords" placeholder="لغات هم‌خانواده را با کاما یا خط جدید جدا کنید" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></textarea>
                  <div v-else v-html="formData.relatedWords" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></div>
                  <button v-if="formData.relatedWords" @click="openEditorModal('relatedWords', 'ویرایش متضاد')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                    <IconsPencil width="13" height="13" color="#7FB77E" />
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8" >
              <div class="w-full sm:w-[50%] flex flex-col items-start gap-3">
                <label class="text-base leading-6 text-[#2B2B2B]">توضیحات:</label>
                <div class="relative w-full">
                  <textarea v-if="!hasHTML(formData.examples)" v-model="formData.examples" placeholder="توضیحات لازم را وارد کنید" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></textarea>
                  <div v-else v-html="formData.examples" class="w-full px-4 py-3 bg-[rgba(127,183,126,0.2)] rounded-xl text-xs text-[#2B2B2B] leading-5 resize-none overflow-auto break-words text-right focus:outline-none custom-offcanvas2 max-h-36 min-h-[5rem]" ></div>
                  <button v-if="formData.examples" @click="openEditorModal('examples', 'ویرایش توضیحات')" type="button" class="absolute top-1 left-1 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors" >
                    <IconsPencil width="13" height="13" color="#7FB77E" />
                  </button>
                </div>
              </div>
              <div class="w-full sm:w-[50%]"></div>
            </div>
          </div>

          <div class="relative w-full flex flex-col items-center mt-3">
            <div class="w-full h-[1px] bg-[#DADDD8]"></div>
            <button type="button" @click="toggleExpansion" class="absolute top-1/2 -translate-y-1/2 flex justify-center items-center gap-2 px-5 py-2 bg-[#7FB77E] rounded-full hover:bg-green-700 transition-colors duration-300 shadow-md" >
              <span class="text-white text-sm leading-6">{{isExpanded ? 'موارد کمتر' : 'موارد بیشتر'}}</span>
              <IconsDownArrowWhite :class="[ 'w-[13px]', 'h-[13px]', 'text-white', 'transition-transform', 'duration-500', isExpanded ? 'rotate-180' : 'rotate-0', ]" />
            </button>
          </div>

          <div class="w-full flex justify-center items-start mt-3">
            <button type="submit" :disabled="isProcessing" :class="[ 'w-full', 'flex', 'justify-center', 'items-center', 'gap-2', 'px-10', 'py-3.5', 'bg-[#7FB77E]', 'rounded-[1000px]', 'transition-colors', 'duration-300', 'shadow-lg', isProcessing ? 'opacity-60 cursor-not-allowed' : 'hover:bg-green-700', ]" >
              <span class="text-white font-bold text-xl text-center leading-9">{{isProcessing? 'در حال پردازش...': isEditMode? 'ذخیره ویرایش': 'ساخت لغت'}}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
  
  <transition name="modal-slide" appear>
    <div v-if="isEditorModalOpen" @click="isEditorModalOpen = false" class="fixed inset-0 z-[10000000] bottom-0 flex justify-center items-center w-full bg-black/70" >
      <div @click.stop class="modal-box absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-3xl bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[40px] flex flex-col items-center px-8 py-10 gap-8 font-zain" dir="rtl" >
        
        <h3 class="text-xl font-bold">{{ editorTitle }}</h3>
        <ClientOnly>
          <RichTextEditor v-model="editorContent" />
          <template #fallback>
              <div class="p-4 text-center text-gray-500">در حال بارگذاری ویرایشگر...</div>
          </template>
        </ClientOnly>
        <div class="w-full flex justify-end gap-3 mt-4">
          <button type="button" @click="saveEditorContent(editorContent)" class="px-7 py-3 bg-[#7FB77E] text-white rounded-full hover:bg-green-700 transition-colors">ذخیره</button>
          <button type="button" @click="isEditorModalOpen = false" class="px-7 py-3 bg-gray-200 text-[#2B2B2B] rounded-full hover:bg-gray-300 transition-colors">انصراف</button>
        </div>
      </div>
    </div>
  </transition>

</template>

<script setup>
import { ref, watch, reactive } from 'vue';
import RichTextEditor from './RichTextEditor.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  dictionaries: {
    type: Array,
    default: () => [],
  },
  loadingDictionaries: {
    type: Boolean,
    default: false,
  },
  initialData: {
    type: Object,
    default: () => ({}),
  },
  isEditMode: {
    type: Boolean,
    default: false,
  },
  isProcessing: {
    type: Boolean,
    default: false,
  },
});

const hasHTML = (value) => /<\/?[a-z][\s\S]*>/i.test(value);



const isEditorModalOpen = ref(false);
const editorTitle = ref(''); 
const currentFieldToEdit = ref(null);

const editorContent = ref(''); 


const openEditorModal = (fieldKey, title) => {
    currentFieldToEdit.value = fieldKey;
    editorTitle.value = title;
    editorContent.value = formData[fieldKey] || ''; 
    isEditorModalOpen.value = true;
};

const saveEditorContent = (content) => {
    if (currentFieldToEdit.value) {
        formData[currentFieldToEdit.value] = content; 
        isEditorModalOpen.value = false;
    }
};

const emit = defineEmits(['update:isOpen', 'save']);

const isExpanded = ref(false);

const formData = reactive({
  selectedDictionary: null,
  wordName: '',
  pronunciation: '',
  definition: '',
  synonym: '',
  opposite: '',
  relatedWords: '',
  examples: '',
});

const fillForm = (data) => {
  formData.selectedDictionary = data.selectedDictionary || (props.dictionaries.length > 0 ? props.dictionaries[0].id : null);
  formData.wordName = data.wordName || '';
  formData.pronunciation = data.pronunciation || '';
  formData.definition = data.definition || '';
  formData.synonym = data.synonym || '';
  formData.opposite = data.opposite || '';
  formData.relatedWords = data.relatedWords || '';
  formData.examples = data.examples || '';
  isExpanded.value = false; 
};

watch(
  () => props.initialData,
  (newData) => {
    fillForm(newData);
  },
  { immediate: true, deep: true }
);

watch(
    () => props.isOpen,
    (newVal) => {
        if (newVal) {
            fillForm(props.initialData);
        }
    }
);


const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value;
};

const submitForm = () => {
  if (!formData.selectedDictionary || !formData.wordName.trim() || !formData.definition.trim()) {
    return;
  }
  emit('save', { ...formData });
};
</script>

<style scoped>
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