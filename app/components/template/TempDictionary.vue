<template>
    <div
        class="bg-[#F5F6F4] p-4 border-[#DADDD8] border rounded-3xl md:w-[22%] w-full shadow-[0px_7px_15px_-6px_#5C636940] ">
        <div class="border border-[#DADDD8] rounded-3xl bg-[#FFFFFF1A] h-24 w-full">
        </div>
        <div class="mt-6 text-sm">
            <p v-if="data?.authors">{{ data.authors }}</p>
            <p class="mt-2">{{ data?.name }}</p>
        </div>
        <button @click="sendData" class="bg-[#7FB77E] mt-5 text-[#F5F6F4] px-6 py-2 rounded-full">ویرایش</button>
    </div>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['isOpenForm'])
const sendData = () => {
    emit('isOpenForm', {form: true, dicEdit: props.data})
}
</script>