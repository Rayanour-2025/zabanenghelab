<template>
    <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="radio" @change="sendToParent" class="peer hidden" name="index" :value="index" />
        <div class="w-4 h-4 border border-black rounded-full flex items-center justify-center
           peer-checked:bg-green-600 peer-checked:border-green-600 transition-all">
            <svg class="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-all" fill="none"
                stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <span class="text-gray-700 text-xs ">{{ label }}</span>
    </label>
</template>
<script setup>
const props = defineProps({
    label: {
        required: true,
        type: String,
        default: "گزینه"
    },
    index: {
        required: true,
        type: Number,
    }
})
const emit = defineEmits(['update:selectedValue'])
const sendToParent = (event) => {
    const selectedValue = event.target.value
    emit('update:selectedValue', selectedValue)
}
</script>
