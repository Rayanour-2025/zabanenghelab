<template>
    <div :class="bgColor" class=" shadow-[0px_5px_10px_-6px_#8B968B40] py-6 px-6 rounded-3xl flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-x-4">
                <img class="rounded-full w-10 h-10" :src="photo" alt="profile" />
                <h4 class="text-xs md:text-sm">{{ question?.user?.first_name }} {{ question?.user?.last_name }}</h4>
            </div>
            <div>
                <p class="text-[#5C636980] text-xs md:text-sm">{{ question?.created_at }}</p>
            </div>
        </div>
        <div>
            <p class="md:text-sm text-xs font-normal">
               {{question?.description}}
            </p>
        </div>
    </div>
</template>
<script setup>
import photo from "~/assets/images/edd4b661b231cb76d474e6223e74a43f88aab978.png"; 
const prop = defineProps({
    bgColor: {
        default: '',
        type: [String],
        required: false
    },
    question: {
        required: true,
        type: [Object, Array]
    }
})
console.log(prop.question)
</script>