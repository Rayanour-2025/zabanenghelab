<template>
    <div @click="goToTranslate(result)"
        class="bg-[#F5F6F4] md:p-8 p-4 rounded-[50px] cursor-pointer shadow-[0px_7px_15px_-6px_#5C636940]">
        <div class="mb-1"><span class="md:text-base text-xs text-[#5C636980]">{{ result.dictionary.name }}</span>
        </div>
        <div class="mb-2 flex justify-between">
            <p class="md:text-4xl text-xl">{{ result.word }}</p> <span class="text-sm">/salAm/</span>
        </div>
        <template v-if="result.synonyms.length > 0">
            <div class="bg-[#F0F1EE] md:text-base text-[10px] rounded-2xl p-4">
                <span v-for="(syn, index) in result.synonyms" :key="index">{{ syn }},</span>
            </div>
        </template>
    </div>
</template>
<script setup>
const props = defineProps({
    result: {
        type: Object
    }
})
const store = useWordStore()
const goToTranslate = (item) => {
    store.selectedWord = item
    navigateTo('/translate')
}
</script>
