<template>
    <div class="bg-[#F57C51] pt-[44px]">
      <div class="flex items-center">
        <button class="rounded-[50px] ml-5 bg-[#FBFBFB]">
          <i class='text-5xl bx bx-chevron-left'></i>
        </button>
        <h2 class="ml-[65px] text-[24px] font-[700] text-white">Notification</h2>
      </div>
    </div>
    
    <div>
      <img src="/public/Images/Line25.png" class="pl-[10.5rem] pt-[1rem]" alt="">
    </div>
    
    <div class="flex pt-[1rem] pl-5 pb-5 font-[500] text-[16px]">
      <h2 class="text-[#9595A2]">Today</h2>
      <button class="text-[#F57C51] pl-[13rem]">Mark as read</button>
    </div>
    
    <div class="bg-[#FCBC58]/20 mx-[20px] flex py-2 pl-4 rounded-[16px]">
      <div class="pt-[1rem] text-4xl text-white">
        <i class='bx bxs-discount p-[0.6rem] rounded-[16px] bg-orange-400'></i>
      </div>
      <div class="pl-5">
        <h2 class="text-[#262736] font-[700]">Cashback 50%</h2>
        <p class="text-[#9595A2] text-sm mt-1 mb-2 text-[12px]">Get 50% cashback for the next top up</p>
        <div class="flex">
          <h2 class="text-[#F57C51] text-[16px] font-[700]">Top up now</h2>
          <i class='text-[#F57C51] text-xl bx bx-chevron-right'></i>
        </div>
      </div>
    </div>
    
    <div>
      <h2 class="pl-5 mt-2 text-[#9595A2]">Yesterday</h2>
      <div class="ml-5 mb-2">
        <div v-for="(notification, index) in notifications" :key="index" class="flex mt-2.5">
          <div class="bg-[#F2F2F2] p-[13px] rounded-[50px]">
            <i :class="notification.icon" :style="{ color: notification.color }" class="text-[22px]"></i>
          </div>
          <div class="pl-1.5 pt-3">
            <h2 class="font-[500]">{{ notification.title }}</h2>
            <p class="text-[#9595A2]">{{ notification.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
          { title: "Withdraw Request Accepted", time: "8:00 AM", icon: "bx bx-money", color: "#F57C51" },
          { title: "Payment Received !", time: "3:40 PM", icon: "bx bx-coin", color: "#03A721" },
          { title: "$100 Received", time: "10:39 AM", icon: "bx bx-coin", color: "#03A721" },
          { title: "Security Alert !", time: "6:14 AM", icon: "bx bx-alarm-exclamation", color: "black" },
          { title: "Alert !", time: "6:14 AM", icon: "bx bx-alarm-exclamation", color: "black" },
          { title: "Exchange Done !", time: "6:14 AM", icon: "bx bx-revision", color: "black" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&family=Plus+Jakarta+Sans:wght@200..800&display=swap');
  </style>
  