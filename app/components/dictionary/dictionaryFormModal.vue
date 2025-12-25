<template>
  <transition name="modal-slide" appear>
    <div v-if="isOpen" class="fixed inset-0 z-[1000000] flex justify-center items-center w-full bg-black/50"
      @click="$emit('update:isOpen', false)">
      <div @click.stop
        class="modal-box absolute left-1/2 top-5 -translate-x-1/2 w-full max-w-[550px] bg-white shadow-[0_5px_12px_-5px_rgba(92,99,105,0.25)] rounded-[40px] flex flex-col items-center px-8 py-10 gap-8 font-zain max-h-[90vh] overflow-y-auto custom-offcanvas3"
        dir="rtl">

        <button @click="$emit('update:isOpen', false)"
          class="absolute top-5 left-5 p-2 rounded-full hover:bg-gray-100 transition duration-150">
          <icons-circle-x width="35" height="35" color="#7FB77E" />
        </button>
        <div class="flex items-center gap-4">
          <h3>{{ dictionary.name }}</h3>
          <red-trash class="cursor-pointer" v-if="!deleteLoading" @click="deleteDic(dictionary?.id)" width="22" height="22" />
          <div dir="rtl" v-if="deleteLoading" class="flex items-center justify-center gap-2">
            <svg class="animate-spin h-4 w-4 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
              </circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            <span>...درحال حذف</span>
          </div>
        </div>
        <form class="w-full flex flex-col items-end gap-5">
          <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
            <div class="w-full flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">نام لغت نامه: <span
                  class="text-red-500">*</span></label>
              <div class="relative w-full">
                <input type="text" v-model="dictionary.name" placeholder="نام لغت نامه را وارد کنید"
                  class="w-full px-4 py-3 h-11 text-sm text-[#2B2B2B] leading-5 text-right bg-[rgba(127,183,126,0.2)] rounded-xl focus:outline-none" />
              </div>
            </div>
            <div class="w-full flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">توضیح:</label>
              <input type="text" placeholder="توضیح لغت نامه" v-model="dictionary.description"
                class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-sm text-[#2B2B2B] leading-5 text-right focus:outline-none" />
            </div>
          </div>
          <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
            <div class="w-full flex flex-col items-start gap-3">
              <div class="relative w-full">
                <custom-select :required="true" :options="lang" v-model="dictionary.source_language.id"
                  label="زبان مبدا" />
              </div>
            </div>
            <div class="w-full flex flex-col items-start gap-3">
              <div class="relative w-full">
                <custom-select :required="true" :options="lang" v-model="dictionary.target_language.id"
                  label="زبان مقصد" />
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
            <div class="w-full flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">نویسنده: </label>
              <div class="relative w-full">
                <input type="text" placeholder="نویسنده را وارد کنید" v-model="dictionary.authors"
                  class="w-full px-4 py-3 h-11 text-sm text-[#2B2B2B] leading-5 text-right bg-[rgba(127,183,126,0.2)] rounded-xl focus:outline-none" />
              </div>
            </div>
            <div class="w-full flex flex-col items-start gap-3">
              <label class="text-base leading-6 text-[#2B2B2B]">ناشر:</label>
              <input type="text" placeholder="ناشر را بنویسبد"
                class="w-full px-4 py-3 h-11 bg-[rgba(127,183,126,0.2)] rounded-xl text-sm text-[#2B2B2B] leading-5 text-right focus:outline-none" />
            </div>
          </div>
          <div class="w-full flex flex-col sm:flex-row justify-center items-start gap-5 sm:gap-8">
            <div class="w-full flex flex-col items-start gap-3">
              <label for="pic"
                class="rounded-xl w-full text-[#7FB77E] py-4 flex items-center justify-center border-[#7FB77E] border-2 border-dashed text-base leading-6  ">بارگزاری
                تصویر</label>
              <input @change="onImageChange" id="pic" type="file" class=" hidden " />
            </div>
          </div>
          <div class="w-full mt-6">
            <button type="button" @click="sendData()"
              class="w-full py-4 bg-[#7FB77E] text-white font-bold text-xl rounded-full shadow-lg hover:bg-green-700 transition-colors">
              <div v-if="!loading">
                ذخیره تغییرات
              </div>
              <div dir="rtl" v-if="loading" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-4 w-4 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                  </circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                <span>...درحال ارسال</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>

  <transition name="modal-slide">
    <div v-if="isEditorModalOpen" class="fixed inset-0 z-[10000000] flex justify-center items-center bg-black/70"
      @click="isEditorModalOpen = false">
      <div @click.stop class="bg-white w-full max-w-3xl rounded-[40px] p-8 flex flex-col gap-6 font-zain" dir="rtl">
        <h3 class="text-xl font-bold text-center">ویرایشگر متن</h3>
        <div
          class="w-full min-h-[200px] border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
          <ClientOnly>
            <rich-text-editor v-model="text" />
          </ClientOnly>
        </div>
        <div class="flex justify-end gap-3">
          <button @click="isEditorModalOpen = false"
            class="px-8 py-2 bg-[#7FB77E] text-white rounded-full">تایید</button>
          <button @click="isEditorModalOpen = false" class="px-8 py-2 bg-gray-200 rounded-full">انصراف</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import redTrash from '~/components/icons/redTrash.vue';
import customSelect from '~/components/customSelect.vue';
import { useAuthToken } from '~/composables/useAuthCrypto'
import { useToast } from 'vue-toastification'
import RichTextEditor from '~/components/dictionary/RichTextEditor.vue';
import loadingAnimation from '~/components/loadingAnimation.vue';
import useDeleteDictionary from '~/composables/useDeleteDictionary';
import useUpdateDictionary from '~/composables/useUpdateDictionary';
const props = defineProps({
  isOpen: Boolean,
  dictionary: {
    type: [Array, Object]
  },
  lang: {
    required: true
  }
});
const text = ref('')
const toast = useToast()
const { isLoggedIn, token: AUTH_TOKEN, isAdmin } = useAuthToken()
const emit = defineEmits(['update:isOpen', 'save']);
const isExpanded = ref(false);
const isEditorModalOpen = ref(false);
const { loading: deleteLoading, deleteDictionary } = useDeleteDictionary()
const { loading, updateDictionary } = useUpdateDictionary()


const editForm = ref({
  _method: 'PUT',
  name: '',
  target_language_id: '',
  source_language_id: '',
  description: '',
  image: null,
  authors: ''
})
const onImageChange = (e) => {
  editForm.value.image = e.target.files[0]
}

const sendData = async () => {
  const formData = new FormData()
  formData.append('_method', 'PUT')
  formData.append('name', props.dictionary.name)
  formData.append('source_language_id', props.dictionary.source_language.id);
  formData.append('target_language_id', props.dictionary.target_language.id);
  formData.append('description', props.dictionary.description || '');
  formData.append('authors', props.dictionary.authors || '');
  if (editForm.value.image) {
    formData.append('image', editForm.value.image);
  }
  await updateDictionary(AUTH_TOKEN.value, props.dictionary.id, formData)
}
const deleteDic = async (id) => {
  if (isAdmin.value, AUTH_TOKEN.value) {
    await deleteDictionary(AUTH_TOKEN.value, id)
  }
}
</script>

<style scoped>
/* استایل‌های اسکرول و انیمیشن مودال */
.custom-offcanvas3::-webkit-scrollbar {
  width: 5px;
}

.custom-offcanvas3::-webkit-scrollbar-thumb {
  background: #7FB77E;
  border-radius: 10px;
}

.modal-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.modal-slide-enter-active {
  transition: all 0.4s ease-out;
}

.modal-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
