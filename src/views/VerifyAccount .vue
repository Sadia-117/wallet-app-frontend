<template>
    <div class="p-4">
      <div class="flex">
        <img class="w-10 h-10 mt-4 ml-3" src="images/Back Button.png" alt="Back">
        <h1 class="text-xl font-extrabold mt-5 ml-12">Verify Your Account</h1>
      </div>
      
      <div>
        <img class="w-[20rem] mt-5 ml-3 mb-2" src="images/Place Holder.png" alt="Placeholder">
      </div>
      
      <div class="p-4 ml-4">
        <h1 class="text-4xl font-bold text-black mt-4 mb-1">Verification Mail</h1>
        <p class="text-[#B9B9B9]">We will send you a confirmation code.</p>
      </div>
  
      <form @submit.prevent="sendCode">
        <div class="relative">
          <i class="bx bx-envelope absolute pl-11 pt-[1.4rem] text-orange-300 text-2xl"></i>
          <input 
            type="email" 
            v-model="email" 
            placeholder="        Your email" 
            class="ml-8 w-80 p-4 m-2 border border-gray-400 rounded-xl hover:border-orange-300"
            required
          >
        </div>
  
        <div>
          <button 
            type="submit" 
            class="bg-orange-400 px-32 py-5 ml-7 hover:bg-orange-500 mt-2 rounded-xl"
            :disabled="!email"
          >
            Send Code
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name:"VerifyAccount",
    data() {
      return {
        email: ''
      };
    },
    methods: {
      sendCode() {
        if (this.email) {
          alert(`Verification code sent to ${this.email}`);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  button:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
  </style>
  