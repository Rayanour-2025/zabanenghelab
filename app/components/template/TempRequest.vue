<template>
    <div dir="rtl" class="bg-[#F5F6F4] w-full p-8 rounded-[55px]">
        <div class="flex items-center justify-between  gap-3">
            <div class="flex items-center gap-3">
                <img :src="photo" class="md:w-12 w-8 md:h-12 h-8 rounded-full" alt="profile" />
                <p class="text-xs md:text-base">
                    {{ item?.user?.username }}
                </p>
            </div>
            <div>
                <span class="text-[#5C636980]"> {{ item?.created_at }}</span>
            </div>
        </div>
        <div class="md:mt-5 mt-2">
            <p class="md:text-base text-xs" v-if="item?.word">لغت درخواستی: <span class="text-[#7FB77E]">{{ item?.word
            }}</span></p>
        </div>
        <div class="mt-2 text-xs md:text-base" v-if="!item?.word">نوع: <span class="text-[#7FB77E]">{{
            questionFilters.find(q => q.id === item?.type)?.title }}
            </span></div>
        <div class="mt-2 text-xs md:text-base" v-if="item?.language">زبان: <span class="text-[#7FB77E]">{{
            item?.language?.name }}</span></div>
        <div class="mt-5 text-sm md:text-base">
            <h3 v-if="item?.description">توضیحات:</h3>
            <p class="mt-3 md:text-sm text-xs">{{ item?.description }}</p>
        </div>
        <div v-if="item?.answer" class="mt-5 text-sm md:text-base">
            <h3>پاسخ:</h3>
            <p class="mt-3 md:text-sm text-xs">{{ item?.answer?.body }}
            </p>
        </div>
        <div class="mt-3" v-if="filterId != 3 && filterId != 2">
            <button @click="sendAnswer(item?.word ? 1 : 2, item.id)"
                class="flex items-center gap-2 bg-[#7FB77E33] p-2 md:p-3 rounded-full">
                <plus width="12" height="12" />
                <span class="text-[#7FB77E] text-xs md:text-base">{{ item?.word ? 'افزودن لغت' : 'ارسال پاسخ' }}</span>
            </button>
        </div>
        <reportcard @click="isOpenAnswerBox = false" v-if="isOpenAnswerBox">
            <div @click.stop class="bg-white p-4 w-[80%] md:w-1/4 rounded-2xl h-1/3">
                <div class='w-full h-full'>
                    <textarea v-model="answerObj.body" name="answer" id="answer" rows="12"
                        class="outline-none border rounded-2xl h-2/3 p-3 w-full border-[#b2b2b2]"
                        placeholder="پاسخ خود را وارد کنید">
                    </textarea>
                    <div class="flex gap-3">
                        <base-buttom @click="submitAnswer(item.id)">
                            <span v-if="!loading" class="text-white">ارسال پاسخ</span>
                            <div v-if="loading" class="flex items-center justify-center gap-2">
                                <svg class="animate-spin h-5 w-5 text-[#7FB77E]" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4">
                                    </circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <span class="text-white">...درحال ارسال</span>
                            </div>
                        </base-buttom>
                        <base-buttom @click="isOpenAnswerBox = false; answerObj.body = ''">انصراف</base-buttom>
                    </div>
                </div>
            </div>
        </reportcard>
    </div>
</template>
<script setup>
import baseButtom from '~/components/ui/BaseButton.vue'
import photo from '~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png'
import plus from '~/components/icons/plus.vue'
import reportcard from '~/components/reportcard.vue'
import { useSendAnswer, useApproveSuggest } from '#imports'
import { useAuthToken } from '~/composables/useAuthCrypto'
import { useToast } from 'vue-toastification'
const prop = defineProps({
    item: {
        required: true,
        type: [Object, Array]
    },
    filterId: {
        required: true,
    }
})
const answerObj = ref({
    body: ''
})
const { approveSuggest, loading: sugestLoading } = useApproveSuggest()
const {
    loading,
    sendAnswer: sendAnswerfunc,
} = useSendAnswer()
const toast = useToast()
const {
    isAdmin,
    token: AUTH_TOKEN
} = useAuthToken()
const questionFilters = [
    { id: 4, title: 'سایر' },
    { id: 2, title: 'مشکل فنی' },
    { id: 1, title: 'گزارش مشکل' },
    { id: 3, title: 'حساب کاربری' },
    { id: 5, title: 'پیشنهاد لغت' },
]
const isOpenAnswerBox = ref(false)
const sendAnswer = async (id, QId) => {
    if (id == 1) {
        try {
            await approveSuggest(AUTH_TOKEN.value, QId)
            await navigateTo('/words')
        } catch (error) {
            toast.error('دوباره امتحان کنید.')
        }
    }
    if (id == 2) {
        isOpenAnswerBox.value = true
    }
}
const submitAnswer = async (QId) => {
    if (answerObj.value.body == null) {
        toast.error('لطفا پاسخ را وارد کنید.')
        return
    }
    try {
        if (AUTH_TOKEN.value && isAdmin.value) {
            console.log(QId)
            await sendAnswerfunc(AUTH_TOKEN.value, QId, answerObj.value)
            answerObj.value.body = ''
            isOpenAnswerBox.value = false
        }
        refresh()
    } catch (error) {
        console.log(error)
        refresh()
    }
}
</script>