<template>
  <div>
    <div class="  not-italic font-black text-[36px] leading-[52px] text-right text-[#7FB77E] px-12 py-7">
      داشبورد
    </div>

    <div class="min-h-screen title flex items-stretch justify-center py-10">
      <div class="max-w-screen-xl w-full mx-auto flex flex-row-reverse items-stretch justify-center gap-10">

        <div class="w-full flex flex-col items-center justify-start gap-10">
          <section class="w-full flex flex-row items-center justify-between">
            <div v-for="(item, index) in [
              { title: 'لغات درخواستی', value: '6', link: '/requests' },
              { title: 'دیکشنری‌ها', value: data?.dictionary_count, link: '/dashboard/dictionaries' },
              { title: 'لغات', value: data?.word_count, link: '/words' }
            ]" :key="index"
              class="relative w-[300px] h-[180px] bg-white rounded-[40px] shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] flex flex-col items-center justify-center gap-[6px]">
              <h3 class="font-zain font-bold text-[26px] leading-[38px] text-[#7FB77E] text-center">
                {{ item.title }}
              </h3>
              <p class="font-zain font-black text-[30px] leading-[42px] text-[#7FB77E] text-center">
                {{ item.value }}
              </p>
              <nuxt-link :to="item.link"
                class="flex justify-center items-center py-2 px-8 border border-[#7FB77E] rounded-[1000px]">
                <span class="text-[#7FB77E] font-bold text-[14px] text-center">نمایش</span>
              </nuxt-link>
            </div>
          </section>

          <div class="w-full flex flex-row-reverse items-stretch justify-center gap-12">

            <div
              class="w-[480px] flex flex-col bg-white rounded-[45px] shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] p-6 gap-6">
              <div class="w-full flex justify-between items-center">
                <nuxt-link to="/manage_comments" class="text-[#2B2B2B] text-[14px] font-bold font-zain">نمایش
                  همه</nuxt-link>
                <span class="text-[#7FB77E] text-[24px] font-bold font-zain">:دیدگاه</span>
              </div>

              <div class="flex flex-col gap-6">
                <div v-for="i in 2" :key="i"
                  class="w-full h-[160px] bg-[#F5F6F4] rounded-[50px] shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25),0_-4px_15px_-6px_rgba(92,99,105,0.25)] flex items-center justify-between">
                  <div class="flex flex-col justify-start mx-auto gap-4 mt-2">
                    <button type="button">
                      <icons-trash-can class="w-4 h-4" />
                    </button>
                    <button type="button">
                      <icons-confirmation class="w-4 h-4" />
                    </button>
                  </div>

                  <div
                    class="w-[90%] h-full bg-white rounded-[50px] shadow-[-5px_0px_9.7px_rgba(209,209,209,0.25)] px-6 py-4 flex flex-col justify-between">
                    <div class="flex items-center justify-end gap-2">
                      <span class="text-[#2B2B2B] text-[13px] font-bold font-zain">سعید علوی</span>
                      <img src="~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png"
                        class="w-[40px] h-[40px] rounded-full object-cover" alt="user" />
                    </div>

                    <p class="text-[#2B2B2B] text-[13px] leading-[22px] font-normal font-zain text-right">
                      محشره! 😍 خیلی وقت بود دنبال سایتی می‌گشتم که چند تا دیکشنری معتبر رو باهم داشته باشه، بدون اینکه
                      هی بین تب‌های مختلف برم. طراحی‌اش خیلی ساده و قشنگه و ترجمه‌ها هم دقیق و سریع هستن. دمتون گرم
                      واقعاً 🙌
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="w-[480px] flex flex-col bg-white rounded-[45px] shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] p-5 gap-[40px] isolate">
              <div class="w-full flex flex-row-reverse items-center justify-between">
                <div class="text-[#7FB77E] font-zain text-[24px] font-bold">
                  :بازدید
                </div>

                <div class="flex gap-3">
                  <div class="flex">
                    <div v-for="(label, idx) in ['روز', 'هفته', 'ماه', 'سال']" :key="idx" :class="[
                      'flex items-center px-[18px] py-[10px] border border-[rgba(92,99,105,0.25)] bg-white',
                      idx === 0
                        ? 'rounded-l-[10px] font-bold text-[#7FB77E]'
                        : idx === 3
                          ? 'rounded-r-[10px]'
                          : '',
                      'font-zain text-[14px]'
                    ]">
                      <span>{{ label }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-full h-[400px]">
                <div class="absolute inset-0 flex flex-col justify-between">
                  <div v-for="i in 7" :key="i" class="h-[1px] bg-[#DADDD8]"></div>
                </div>

                <div
                  class="absolute left-0 top-[10px] h-[360px] flex flex-col justify-between text-[#809FB8] text-[13px] font-semibold font-['Proxima_Nova']">
                  <span>60k</span>
                  <span>50k</span>
                  <span>40k</span>
                  <span>30k</span>
                  <span>20k</span>
                  <span>10k</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center justify-between font-zain min-h-full gap-6">
          <div dir="rtl"
            class="flex flex-col justify-center items-center py-6 px-10 w-[240px] h-[180px] bg-white shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[45px]">
            <div class="text-[#7FB77E] font-bold text-[24px] text-center">زبان‌ها:</div>
            <div class="text-[#7FB77E] font-black text-[28px] text-center">{{ data?.language_count }}</div>
          </div>

          <div dir="rtl"
            class="flex flex-col justify-center items-center py-6 px-10 gap-2 w-[240px] h-[230px] bg-white shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[45px]">
            <div class="text-[#7FB77E] font-bold text-[22px] text-center">دیدگاه گزارش شده:</div>
            <div class="text-[#7FB77E] font-black text-[26px] text-center">{{ data?.reported_comment_count }}</div>
            <nuxt-link to="/reported_comments"
              class="flex justify-center items-center py-2 px-8 border border-[#7FB77E] rounded-[1000px]">
              <span class="text-[#7FB77E] font-bold text-[14px] text-center">نمایش</span>
            </nuxt-link>
          </div>

          <div dir="rtl"
            class="flex flex-col justify-center items-center py-6 px-10 gap-2 w-[240px] h-[230px] bg-white shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[45px]">
            <div class="text-[#7FB77E] font-bold text-[22px] text-center">لغات گزارش شده:</div>
            <div class="text-[#7FB77E] font-black text-[26px] text-center">{{ data?.reported_word_count }}</div>
            <nuxt-link to="/reported_words"
              class="flex justify-center items-center py-2 px-8 border border-[#7FB77E] rounded-[1000px]">
              <span class="text-[#7FB77E] font-bold text-[14px] text-center">نمایش</span>
            </nuxt-link>
          </div>
        </div>

      </div>
      <loading-animation v-if="loading" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useFetchAllCount from '~/composables/useFetchAllCount'
import loadingAnimation from '~/components/loadingAnimation.vue'
import { useAuthToken } from '~/composables/useAuthCrypto'
const { loading, responseData, fetchAllCount } = useFetchAllCount()
const { isAdmin, token: AUTH_TOKEN } = useAuthToken()
const data = ref()
const loadData = async () => {
  try {
    if (AUTH_TOKEN.value && isAdmin.value) {
      await fetchAllCount(AUTH_TOKEN.value)
      data.value = responseData.value.data
      console.log(data.value)
    }
  } catch (err) {

  }
}
loadData()
onMounted(() => {
  document.querySelector('.title').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})
</script>

<style></style>
