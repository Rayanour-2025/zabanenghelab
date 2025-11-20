<template>
    <div
        class="bg-[#F0F1EE] rounded-[35px] shadow-[0px_7px_15px_-6px_#5C636940] w-[23%] flex items-center flex-col h-96 justify-center p-4 ">
        <h2 class="text-2xl mb-6">لغت نامه های فارسی :</h2>
        <div class="flex flex-wrap items-center gap-4 justify-center">
            <dictionary-item v-for="(name, index) in dicListName" :key="index" :name="name"
                @click="selectedDic = index" :active="index == selectedDic" />
        </div>
    </div>
</template>
<script setup>
const selectedDic = ref(0)
const props = defineProps({
    dicListName: {
        required: true
    }
})
</script>