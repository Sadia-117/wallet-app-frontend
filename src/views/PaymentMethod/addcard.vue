<template>
    <div class="flex pt-[20px]">
      <div class="mb-[16px]">
        <button class="rounded-[50px] ml-5 bg-[#FBFBFB]">
          <i class='text-[40px] bx bx-chevron-left'></i>
        </button>
      </div>
      <div>
        <h2 class="text-[20px] ml-[110px] font-[700] pt-1.5">Card</h2>
      </div>
    </div>
    <div class="ml-[26px] flex w-[335px] px-[20px] rounded-[12px] border-[1px] border-gray-400/30 mb-4">
      <img class='p-[0.5px] my-[6px] mr-[12px] w-[60px]' src="/images/card.png" alt="Card">
      <div class="pt-[20px] pb-[8px] flex">
        <h2 class="font-[500] text-[16px]">**********Mastercard</h2>
        <i class='bx bx-chevron-down text-[24px] ml-8 text-[#9595A2]'></i>
      </div>
    </div>
    <form class="ml-[20px] mt-[20px] text-[16px]">
      <label>Cardholder Name</label>
      <input class="border-[1.5px] border-[#F2F2F2] py-[18px] px-[16px] w-full rounded-[12px]" placeholder="Skylar White" type="text">
      <label class="mt-[10px]">Card Number</label>
      <input class="border-[1.5px] border-[#F2F2F2] py-[18px] px-[16px] w-full rounded-[12px]" placeholder="345273654652" type="text">
      <div class="flex justify-between w-[250px] mt-[10px]">
        <label>CVV/CVC</label>
        <label>Exp. Date</label>
      </div>
      <div class="flex gap-2">
        <input class="border-[1.5px] border-[#F2F2F2] py-[18px] px-[16px] w-[159px] rounded-[12px]" placeholder="..." type="text">
        <input class="border-[1.5px] border-[#F2F2F2] py-[18px] px-[16px] w-[159px] rounded-[12px]" placeholder="DD/MM" type="text">
      </div>
    </form>
    <button class="bg-[#F57C51] px-[16px] py-[18px] ml-[35px] w-[320px] h-[56px] mt-[40px] rounded-[12px] text-white">
      Confirm
    </button>
  </template>
  
  <script>
  export default {
    name: 'CardForm'
  };
  </script>
  
  <style scoped>
  @import url('https://cdn.tailwindcss.com');
  @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  </style>