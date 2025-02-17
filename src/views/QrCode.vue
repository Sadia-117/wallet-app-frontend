<template>
    <div class="p-4">
      <div class="flex mt-6 items-center">
        <button class="rounded-full ml-5 bg-[#FBFBFB]">
          <i class='text-5xl bx bx-chevron-left'></i>
        </button>
        <h2 class="flex-1 text-center text-3xl font-bold">Top-Up</h2>
      </div>
      
      <div class="flex gap-6 pl-7 mt-5">
        <div class="bg-[#F57C51] text-white flex px-8 py-4 rounded-2xl gap-2 items-center">
          <i class='bx bx-qr text-xl'></i>
          <h2 class="font-bold">QR Code</h2>
        </div>
        <div class="flex bg-[#F2F2F2] px-8 py-4 rounded-2xl gap-2 items-center">
          <button><i class='bx bxs-down-arrow-alt text-xl'></i></button>
          <h2 class="font-bold">Top-Up</h2>
        </div>
      </div>
      
      <h2 class="text-center text-xl mt-6 font-bold">Scan Me</h2>
      
      <div class="relative text-center mt-4">
        <img class="w-96 mx-auto" src="/public/Images/Group1171274835.png" alt="QR Code">
        <div class="absolute top-[37rem] left-1/3 text-5xl">
          <i class='bx bxs-bookmark bg-[#F2F2F2] p-2 rounded-full'></i>
        </div>
        <div class="absolute top-[37rem] right-1/3 text-5xl">
          <i class='bx bx-paper-plane bg-[#F57C51] p-2 rounded-full'></i>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <p class="text-xl text-[#BDBDBD] mt-2">My QR Code</p>
        <p class="text-xl text-[#BDBDBD] mt-2">Scan this To Pay</p>
        <p class="text-xl text-[#BDBDBD] mt-2 mb-5">Debts To You More Easily</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "qr-code"
  };
  </script>
  
  <style scoped>
  </style>
  