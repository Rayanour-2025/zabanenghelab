<template>
    <div class="px-8 mx-auto container" dir="rtl">
        <h2 class="text-[#7FB77E] font-bold md:font-extrabold md:text-4xl text-2xl mb-8">پرسش ها</h2>

        <div class="flex gap-x-4">
            <base-button @click="navigateTo('/submit_questions')">ثبت پرسش</base-button>
            <base-button active>پرسش های من</base-button>
        </div>

        <div v-if="questions?.data" class="mt-10 flex flex-col gap-4">
            <single-question v-for="(q, index) in questions.data" :key="q.id" :question="q"
                :bg-color="index % 2 === 0 ? 'bg-[#F0F1EE]' : ''" />
        </div>

        <div v-else-if="loading" class="mt-10 text-center text-gray-500">
            در حال دریافت سوالات...
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import BaseButton from "~/components/ui/BaseButton.vue";
import singleQuestion from "~/components/singleQuestion.vue";
import useFetchQuestions from '~/composables/useFetchQuestions';
import { useAuthToken } from '~/composables/useAuthCrypto';

const { token: AUTH_TOKEN } = useAuthToken();
const { loading, responseData: questions, fetchQuestions } = useFetchQuestions();
const router = useRouter();

const navigateTo = (path) => {
    router.push(path);
};

const loadData = async () => {
    try {
        if (AUTH_TOKEN.value) {
            await fetchQuestions(AUTH_TOKEN.value);
        }
    } catch (error) {
        console.error("خطا در دریافت سوالات:", error);
    }
};

onMounted(() => {
    loadData();
});
</script>