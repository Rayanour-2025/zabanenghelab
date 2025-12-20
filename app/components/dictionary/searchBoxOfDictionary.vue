<template>
    <div class="w-full font-zain flex flex-col items-end gap-8">
        <div class="flex flex-row justify-between items-center w-full h-[50px]">
            <button   type="button"
                class="flex flex-row justify-center items-center gap-[5px] px-[18px] py-[11px] bg-[#7FB77E] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] hover:bg-green-700 transition-colors duration-300">
                <span class="text-white font-bold text-[13px] leading-[24px]">اضافه کردن لغت</span>
                <icons-add-or-create class="w-5 h-5" />
            </button>

            <div class="flex items-center justify-center gap-4">
                <div class="relative w-[400px]">
                    <input   type="text"
                        placeholder="جستجوی لغت مورد نظر..."
                        class="w-full h-[50px] pl-[14px] pr-[50px] text-right text-[13px] leading-[22px] text-[#2B2B2B] font-normal placeholder:text-[#DADDD8] bg-[#F5F6F4] rounded-full shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)] focus:outline-none" />
                    <icons-search
                        class="absolute right-[14px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] text-[#2B2B2B] pointer-events-none" />
                </div>
            </div>
        </div>
        <div class="w-full h-px border border-[#DADDD8]"></div>
    </div>

</template>

<script setup> 
 
</script>

<style scoped> 
.modal-slide-enter-from,
.modal-slide-leave-to {
    opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
    transition: opacity 0.4s ease;
}
</style>