<template>
    <div :class="active == true ? 'active' : ''" class="w-auto p-2 rounded-2xl bg-[#7FB77E33]"><span class="text-[#8B968B] cursor-pointer">
            {{ name }} </span></div>
</template>
<script setup>
const props = defineProps({
    name: {
        required: true,
        type: String
    },
    active: {
        required: true,
        default: false,
        type: Boolean
    }
})
</script>
<style>
.active {
    box-shadow: 0px 4px 4px 0px #A7A7A740;
    border: 1px solid #7FB77E;
    background: #7FB77E33;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) ;
}
</style>