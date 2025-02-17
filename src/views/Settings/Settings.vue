<template>
    <div class="p-5">
      <div class="flex pt-5 items-center">
        <button class="rounded-full bg-[#FBFBFB] p-2">
          <i class='text-4xl bx bx-chevron-left'></i>
        </button>
        <h2 class="text-2xl font-bold ml-20">Settings</h2>
      </div>
  
      <div class="mt-6 ml-6 font-bold">
        <h2>Language</h2>
      </div>
  
      <div class="mt-6 ml-6 font-bold">
        <h2>Password & Security</h2>
      </div>
      
      <div v-for="(item, index) in securityOptions" :key="index" class="mt-2 pb-2 flex border border-gray-200 w-80 px-5 ml-5 rounded-lg items-center justify-between">
        <div class="py-4">
          <h2 class="font-normal text-lg">{{ item.name }}</h2>
        </div>
        <i class="bx bx-chevron-right text-2xl text-gray-400"></i>
      </div>
      
      <div class="mt-6 ml-6 font-bold">
        <h2>Notification</h2>
      </div>
      
      <div class="mt-2 pb-2 flex border border-gray-200 w-80 px-5 ml-5 rounded-lg items-center justify-between">
        <div class="py-4">
          <h2 class="font-normal text-lg">Push Notification</h2>
        </div>
        <input type="checkbox" v-model="pushNotification" class="toggle toggle-error text-2xl text-gray-400">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pushNotification: true,
        securityOptions: [
          { name: "Change Password" },
          { name: "Account Verification" }
        ]
      };
    }
  };
  </script>
  
  <style>
  @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Manrope:wght@200..800&family=Plus+Jakarta+Sans:wght@200..800&display=swap');
  </style>