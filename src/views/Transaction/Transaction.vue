<template>
    <div id="font-change">
      <div class="flex pt-[20px]">
        <div class="mb-[30px]">
          <div>
            <button class="rounded-[50px] ml-5 bg-[#FBFBFB]">
              <i class='text-[40px] bx bx-chevron-left'></i>
            </button>
          </div>
        </div>
        <h2 class="text-[20px] ml-[80px] font-[700]">Transaction</h2>
      </div>
      
      <div>
        <i class='bx bx-search absolute text-[24px] text-[#F57C51] left-[2.5rem] top-[7rem]'></i>
        <input type="text" class="ml-[25px] w-[335px] px-[44px] py-[16px] bg-[#F2F2F2] rounded-[10px] focus:outline-none focus:border-gray-500" placeholder="Search Transaction">
      </div>
      
      <div class="flex justify-center gap-[12px] mt-6">
        <button class="text-white bg-[#F57C51] w-[86px] py-[14px] px-[10px] rounded-[12px]">All</button>
        <button class="text-[#9595A2] border-2 w-[117px] border-[#F2F2F2] rounded-[12px]">Outcome</button>
        <button class="text-[#9595A2] border-2 w-[117px] border-[#F2F2F2] rounded-[12px]">Income</button>
      </div>
      
      <div class="flex justify-center mt-6">
        <img src="/public/Images/Group 1171274817.png" alt="">
      </div>
      
      <div class="flex justify-center gap-[5rem]">
        <div class="flex">
          <img class="w-[18px] h-[18px] mt-1" src="/public/Images/Ellipse 3614.png" alt="">
          <h2 class="ml-2 text-[#9595A2]">Receive</h2>
        </div>
        <div class="flex">
          <img class="w-[18px] h-[18px] mt-1" src="/public/Images/Ellipse 3614 (1).png" alt="">
          <h2 class="ml-2 text-[#9595A2]">Sent</h2>
        </div>
      </div>
      
      <div class="flex justify-center gap-[50px] font-[500] text-[16px] pt-2">
        <p class="pl-[2.5rem]">$170,000</p>
        <p class="pr-[1rem]">$580,000</p>
      </div>
      
      <div class="flex bg-[#F2F2F2] mr-[11rem] ml-[7rem] text-[16px] gap-2.5 rounded-[4px] font-[500] mt-5">
        <h2 class="bg-[#F57C51] text-white px-1.5 rounded-[4px]">D</h2>
        <h2 class="">M</h2>
        <h2 class="">Y</h2>
        <h2 class="">W</h2>
        <div class="bg-white pl-[20px]">
          <i class='bx bx-move-vertical bg-[#F57C51] text-white p-1.5 rounded-[3px]'></i>
        </div>
      </div>
      
      <h2 class="ml-[20px] text-[16px] font-[500] text-[#9595A2] mt-5">Today, May 21</h2>
      
      <div v-for="(transaction, index) in transactions.today" :key="index" class="mt-2 flex border-[1px] border-[#F2F2F2] w-[335px] px-[20px] ml-[20px] rounded-[12px]">
        <i :class="transaction.iconClass" class="bg-[#F2F2F2] p-[10px] my-[6px] mr-[20px] rounded-full h-[42px] text-[20px]"></i>
        <div>
          <div class="pt-[4px] pb-[8px]">
            <h2 class="font-[500] text-[16px]">{{ transaction.title }}</h2>
            <p class="font-[400] text-[#9595A2] text-[12px] pt-1">{{ transaction.time }}</p>
          </div>
        </div>
        <p :class="transaction.amountClass" class="font-[500] text-[16px] pl-[62px] mt-[15px]">{{ transaction.amount }}</p>
      </div>
      
      <h2 class="ml-[20px] text-[16px] font-[500] text-[#9595A2] mt-5">Yesterday</h2>
      
      <div v-for="(transaction, index) in transactions.yesterday" :key="index" class="mt-2 flex border-[1px] border-[#F2F2F2] w-[335px] px-[20px] ml-[20px] rounded-[12px]">
        <i :class="transaction.iconClass" class="bg-[#F2F2F2] p-[10px] my-[6px] mr-[20px] rounded-full h-[42px] text-[20px]"></i>
        <div>
          <div class="pt-[4px] pb-[8px]">
            <h2 class="font-[500] text-[16px]">{{ transaction.title }}</h2>
            <p class="font-[400] text-[#9595A2] text-[12px] pt-1">{{ transaction.time }}</p>
          </div>
        </div>
        <p :class="transaction.amountClass" class="font-[500] text-[16px] pl-[62px] mt-[15px]">{{ transaction.amount }}</p>
      </div>
      
      <div>
        <h2 class="text-[#9595A2] mx-[20px] mt-7">Choose Your Option</h2>
        <div class="flex justify-center gap-[8px] mt-5 mb-3">
          <button class="w-[140px] border-2 border-[#F2F2F2] py-[18px] px-[10px] rounded-[12px]">Exchange</button>
          <button class="w-[140px] border-2 border-[#F2F2F2] py-[18px] px-[10px] rounded-[12px]">Transfer</button>
        </div>
      </div>
      
      <div class="mb-[2.5rem] bg-[#F57C51] ml-[35px] w-[320px] rounded-[12px] py-[18px] px-[10px]">
        <button class="text-white pl-[7.5rem] font-[700]"><p>Confirm</p></button>
      </div>
      
      <div class="flex ml-[1.5rem] gap-2.5 border-2 border-gray-200 mr-[1.5rem] px-4 rounded-[16px]">
        <div>
          <i class='bx bx-home-alt pl-2 text-[#B9B9B9] text-3xl'></i>
          <p class="text-[#B9B9B9]">Home</p>
        </div>
        <div>
          <i class='bx bx-bar-chart-alt-2 pl-3 text-3xl text-[#B9B9B9]'></i>
          <p class="text-[#B9B9B9]">Analysis</p>
        </div>
        <div>
          <img class="relative top-[-1rem] w-16" src="/public/Images/Exchange.png" alt="">
        </div>
        <div>
          <i class='bx bx-transfer-alt pl-3 text-3xl text-[#F57C51]'></i>
          <p class="text-[#F57C51]">Transfer</p>
        </div>
        <div>
          <i class='bx bx-user text-3xl text-[#B9B9B9]'></i>
          <p class="text-[#B9B9B9]">User</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        transactions: {
          today: [
            {
              title: 'Sent To ACzone',
              time: '6:25 pm',
              amount: '-$8.27',
              amountClass: 'text-[#FCBC58]',
              iconClass: 'text-[#FCBC58] bx bx-money',
            },
            {
              title: 'Received From Emi',
              time: '6:25 pm',
              amount: '+$8.27',
              amountClass: 'text-[#F57C51]',
              iconClass: 'text-[#F57C51] bx bx-money',
            },
            {
              title: 'Top-Up Mobile',
              time: '6:25 pm',
              amount: '$8.27',
              amountClass: 'text-[#03A721]',
              iconClass: 'text-[#03A721] bx bx-wallet',
            },
          ],
          yesterday: [
            {
              title: 'Sent To ACzone',
              time: '6:25 pm',
              amount: '-$8.27',
              amountClass: 'text-[#FCBC58]',
              iconClass: 'text-[#FCBC58] bx bx-money',
            },
            {
              title: 'Received From Emi',
              time: '6:25 pm',
              amount: '+$8.27',
              amountClass: 'text-[#F57C51]',
              iconClass: 'text-[#F57C51] bx bx-money',
            },
          ]
        }
      }
    }
  }
  </script>
  
  <style scoped>
    /* Add any specific styles you need */
  </style>
  