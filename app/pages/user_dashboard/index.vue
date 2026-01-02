<template>
    <div>
        <div
            class="bg-[#7FB77E1A] mb-16 border border-[#7FB77E] w-full  h-24 flex pr-10 pt-10 justify-end items-start  shadow-[0px_7px_15px_-6px_#5C636940]">
            <div class="bg-[#FFFFFF1A] shadow-[0px_7px_15px_-6px_#5C636940] w-40 h-40 rounded-full"></div>
        </div>
        <div class="mx-auto forms px-5 container">
            <div dir="rtl" class="w-full flex md:flex-row flex-col items-start justify-start gap-8 px-7">
                <TempChangeInfo v-if="responseData?.data" :lastName="data?.last_name" :firstName="data?.first_name" :gender="data?.gender"
                    :birthDate="data?.birth_date" :aboutMe="data?.about_me" />
                <TempChangeNumber v-if="responseData?.data" :phone_number="responseData?.data?.mobile"
                    :email="responseData?.data?.email" />
                <TempChangePass />
            </div>
        </div>
        <loadingAnimation v-if="loading" />
    </div>
</template>
<script setup>
import TempChangeInfo from '~/components/template/TempChangeInfo.vue';
import TempChangeNumber from '~/components/template/TempChangeNumber.vue';
import TempChangePass from '~/components/template/TempChangePass.vue';
import useFetchPersonalInfo from '~/composables/useFetchPersonalInfo'
import { useAuthToken } from '~/composables/useAuthCrypto'
import loadingAnimation from '~/components/loadingAnimation.vue';
const { loading, responseData, fetchPersonalInfo } = useFetchPersonalInfo()
const { token, isAdmin, isLoggedIn } = useAuthToken()
const data = ref()
const loadData = async () => {
    try {
        if (isLoggedIn.value && token.value) {
            await fetchPersonalInfo(token.value)
            data.value = responseData?.value?.data
        }
    } catch (error) {

    }
    console.log(responseData.value.data)
}
loadData()
// onMounted(() => {
//     setTimeout(() => {
//         document.querySelector(".forms").scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     }, 1000);
// })
</script>