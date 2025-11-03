<template>
  <div class="w-full flex flex-row-reverse items-start justify-end gap-5 pr-7">
    <div class="w-[195px] font-zain flex flex-col items-end">
      <h2 class="text-[#7FB77E] w-[80%] text-right text-xl leading-[45px] font-normal py-[30px]">لغات</h2>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <span class="text-[#2B2B2B] w-[80%] text-right text-xl leading-[39px] py-[30px]">دیکشنری‌ها</span>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="w-[80%] flex flex-row items-center gap-[10px] py-[30px]">
        <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="#2B2B2B" stroke-width="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
        <span class="text-[#2B2B2B] text-right text-xl leading-[39px]">درخواست‌ها</span>
      </div>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="text-[#2B2B2B] w-[80%] text-right text-xl leading-[39px] py-[30px]">کاربران</div>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="text-[#2B2B2B] w-[80%] text-right text-xl leading-[39px] py-[30px]">دیدگاه گزارش شده</div>
      <div class="w-full border-t border-[#DADDD8]"></div>
      <div class="text-[#2B2B2B] w-[80%] text-right text-xl leading-[39px] py-[30px]">لغات گزارش شده</div>
    </div>

    <div class="w-full flex flex-col justify-center items-end gap-[35px] px-[43px] py-[40px] bg-white shadow-[7px_-4px_37.4px_-15px_rgba(92,99,105,0.25)] rounded-r-[100px] rounded-br-[100px]">
      <div class="w-full font-zain flex flex-col items-end gap-10">
        <div class="flex flex-row justify-between items-start gap-[10px] w-full h-[54px]">

          <button type="button" class="flex flex-row justify-center items-center gap-[5px] px-[20px] py-[13px] bg-[#7FB77E] rounded-[1000px] shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)]">
            <span class="text-white font-bold text-sm leading-[28px]">اضافه کردن لغت</span>
            <div class="w-5 h-5">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </div>
          </button>

          <div class="flex items-center justify-center gap-4">
            <!-- <div class="flex flex-row justify-center items-center gap-[15px]">
              <div class="flex flex-row items-center gap-[10px] w-[185px] h-[48px]">
                <button type="button" class="flex flex-row justify-center items-center gap-[5px] px-[20px] py-[13px] bg-[rgba(127,183,126,0.2)] rounded-[1000px] shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)]">
                  <span class="text-[#2B2B2B] font-normal text-sm leading-[22px]">دهخدا</span>
                </button>

                <button type="button" class="flex flex-row justify-center items-center gap-[5px] px-[20px] py-[13px] bg-[rgba(127,183,126,0.2)] rounded-[1000px] shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)]">
                  <span class="text-[#2B2B2B] font-normal text-sm leading-[22px]">سلام</span>
                  <svg class="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div> -->

            <div class="flex flex-row justify-between items-center px-[14px] py-[15px] gap-[41px] w-[411px] h-[54px] bg-[#F5F6F4] rounded-[1000px] shadow-[0px_7px_15px_-15px_rgba(92,99,105,0.25)]">
              <svg class="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke-width="2"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2"/>
              </svg>
              <span class="text-[#DADDD8] font-normal text-sm text-right leading-[22px]">لغت مورد نظر را وارد کنید</span>
            </div>
          </div>

        </div>
        
        <div class="w-full h-px border border-[#DADDD8]"></div>

        <div class="w-full flex flex-col items-start justify-center gap-10">
          <div class="w-full flex flex-col items-end gap-[15px] self-stretch">
            <div class="flex flex-col items-end gap-[15px]">
              <span class="font-zain font-bold text-2xl leading-[39px] text-[#2B2B2B]">
                :فارسی
              </span>
            </div>

            <div class="w-full flex flex-row flex-wrap justify-end items-center gap-[20px] self-stretch">
              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  فرهنگ موضوعی فارسی
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  فرهنگ جامع زبان فارسی
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  عمید
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  معین
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  دهخدا
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  فرهنگ اصطلاحات مالی و سرمایه‌گذاری
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  فرهنگ زبان‌آموز فارسی
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  لغت‌نامه بزرگ فارسی
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  فرهنگ سخن
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

            </div>
          </div>

          <div class="w-full flex flex-col items-end gap-[15px] self-stretch">
            <div class="flex flex-col items-end gap-[15px]">
              <span class="font-zain font-bold text-2xl leading-[39px] text-[#2B2B2B]">
                :انگلیسی
              </span>
            </div>

            <div class="w-full flex flex-row flex-wrap justify-end items-center gap-[20px] self-stretch">
              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  مک میلن
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  آکسفورد
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  لانگمن
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  کمبریج
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E]">
                  کالینز
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  گوگل ترنسلیت
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

              <div class="flex flex-row justify-end items-center py-[12px] px-[20px] gap-[10px] bg-[#F5F6F4] shadow-[0px_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[55px]">
                <span class="font-zain font-extrabold text-xl leading-[34px] text-[#7FB77E] text-right">
                  مریام-وبستر
                </span>
                <div class="flex items-center justify-center w-[44px] h-[44px] p-[10px] bg-white border border-[#7FB77E] rounded-full"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute left-[20px] top-[20px] w-[798px] bg-white shadow-[0_7px_15px_-6px_rgba(92,99,105,0.25)] rounded-[65px] flex flex-col items-center px-[35px] py-[45px] gap-[40px] font-zain">

    <div class="w-full flex flex-col items-end gap-[35px] mb-4">
      <div class="flex flex-col items-end gap-[15px]">
        <span class="text-lg leading-[28px] text-[#2B2B2B]">:لطفا دیکشنری مورد نظر را انتخاب کنید</span>
        <div class="flex flex-row-reverse justify-between items-center w-[328px] h-[58px] px-[20px] py-[18px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
          <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">انتخاب یا سرچ میان دیکشنری‌ها</span>
          <div class="relative w-[15px] h-[15px]">
            <span class="absolute left-[17%] right-[33%] top-[37%] bottom-[33%] border border-[rgba(92,99,105,0.25)]"></span>
            <span class="absolute left-[79%] right-[17%] top-[37%] bottom-[58%] border border-[rgba(92,99,105,0.25)]"></span>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center items-center gap-16">
        <div class="w-[50%] flex flex-col items-end gap-[15px]">
          <span class="text-xl leading-[34px] text-[#2B2B2B]">:تعریف</span>
          <div class="w-full flex justify-end items-center px-[20px] py-[18px] pl-[115px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
            <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">تعریف مورد نظر را وارد کنید</span>
          </div>
        </div>

        <div class="w-[50%] flex flex-col items-end gap-[15px]">
          <span class="text-xl leading-[34px] text-[#2B2B2B]">:نام لغت</span>
          <div class="w-full flex justify-end items-center px-[20px] py-[18px] pl-[102px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
            <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">نام لغت دلخواه را انتخاب کنید</span>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center gap-16">
        <div class="w-[50%] flex flex-col items-end gap-[15px]">
          <span class="text-xl leading-[34px] text-[#2B2B2B]">:متضاد</span>
          <div class="w-full flex justify-end items-center px-[20px] py-[18px] pl-[115px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
            <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">تعریف مورد نظر را وارد کنید</span>
          </div>
        </div>

        <div class="w-[50%] flex flex-col items-end gap-[15px]">
          <span class="text-xl leading-[34px] text-[#2B2B2B]">:مترادف</span>
          <div class="w-full flex justify-end items-center px-[20px] py-[18px] pl-[102px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
            <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">نام لغت دلخواه را انتخاب کنید</span>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center gap-16">
        <div class="w-[50%] flex flex-col items-end gap-[15px]">
          <span class="text-xl leading-[34px] text-[#2B2B2B]">:مثال ها</span>
          <div class="w-full flex justify-end items-center px-[20px] py-[18px] pl-[115px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
            <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">تعریف مورد نظر را وارد کنید</span>
          </div>
        </div>

        <div class="w-[50%] flex flex-col items-end gap-[15px]">
          <span class="text-xl leading-[34px] text-[#2B2B2B]">:هم خانواده</span>
          <div class="w-full flex justify-end items-center px-[20px] py-[18px] pl-[102px] bg-[rgba(127,183,126,0.2)] rounded-[15px]">
            <span class="text-sm leading-[22px] text-[rgba(92,99,105,0.25)]">نام لغت دلخواه را انتخاب کنید</span>
          </div>
        </div>
      </div>
    </div>

    <div class="relative w-full flex flex-col items-center">
      <div class="w-full h-[1px] bg-[#DADDD8]"></div>

      <button type="button" class="absolute top-1/2 -translate-y-1/2 flex justify-center items-center gap-[10px] px-[26px] py-[9px] bg-[#7FB77E] rounded-full">
        <div class="relative w-[15px] h-[15px] flex justify-center items-center">
          <span class="absolute w-[2px] h-[9px] bg-white"></span>
          <span class="absolute h-[2px] w-[9px] bg-white"></span>
        </div>
        <span class="text-white text-[16px] leading-[34px]">موارد بیشتر</span>
      </button>
    </div>
    

    <button type="button" class="w-full flex flex-col items-start gap-[50px] mt-4">
      <div class="flex justify-center items-center gap-[10px] px-[297.5px] py-[18px] bg-[#7FB77E] rounded-[1000px]">
        <span class="text-white font-extrabold text-2xl leading-[45px]">ساخت لغت</span>
      </div>
    </button>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>