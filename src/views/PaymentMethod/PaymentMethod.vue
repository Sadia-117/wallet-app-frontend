<template>
    <div class="p-5">
      <div class="flex items-center pt-5">
        <button class="rounded-full bg-[#FBFBFB] p-2">
          <i class='text-4xl bx bx-chevron-left'></i>
        </button>
        <h2 class="text-2xl font-bold mx-auto">Payment<span>Method</span></h2>
        <i class='bx bx-plus border-2 border-[#F57C51] text-[#F57C51] text-2xl ml-10 rounded-md'></i>
      </div>
      
      <div v-for="(card, index) in paymentMethods" :key="index" 
           class="ml-6 mt-2 flex w-[335px] px-5 py-3 rounded-lg border border-gray-400/30 mb-4">
        <img class='p-1 my-1 mr-4 w-[60px]' :src="card.image" />
        <div>
          <h2 class="font-medium text-lg pt-3">{{ card.name }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentMethods: [
          { image: '/publicImages/Frame111.png', name: '**********Mastercard' },
          { image: '/publicImages/Frame112.png', name: '**********1147 Visa' },
          { image: '/publicImages/Frame113.png', name: 'Google Pay' },
          { image: '/publicImages/Frame110.png', name: 'aczone@gmail.com' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
    @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
  </style>