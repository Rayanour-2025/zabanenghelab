<template>
    <div
        class="w-full flex flex-col justify-center items-end gap-[30px] px-[20px] py-[35px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[90px] rounded-br-[90px]">
        <search-box-of-dictionary />
        <div dir="rtl" class="w-full p-5">
            <div class="w-full">
                <h2 class="text-3xl mb-6">فارسی:</h2>
                <div class="flex w-full gap-y-4 gap-x-8 flex-wrap">
                    <template v-if="responeDictionay?.data">
                        <temp-dictionary v-for="dictionary in responeDictionay.data" :key="dictionary.id" :data="dictionary" />
                    </template>
                </div>
            </div>
        </div>
        <loading-animation v-if="loading" />
    </div>
</template>
<script setup>
import searchBoxOfDictionary from '~/components/dictionary/searchBoxOfDictionary.vue';
import TempDictionary from '~/components/template/TempDictionary.vue';
import useFetchDictionaries from '~/composables/useFetchDictionaries';
import { useAuthToken } from '~/composables/useAuthCrypto'
import loadingAnimation from '~/components/loadingAnimation.vue';
definePageMeta({
    layout: "dashboard-admin"
})
const { isLoggedIn, token: AUTH_TOKEN } = useAuthToken()
const { loading, responseData: responeDictionay, fetchDictionaries } = useFetchDictionaries()
const loadData = async () => {
    if (AUTH_TOKEN.value, isLoggedIn.value) {
        await fetchDictionaries(AUTH_TOKEN.value)
        console.log(responeDictionay.value)
    }
}
loadData()
</script>