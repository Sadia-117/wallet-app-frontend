<template>
    <div>
      <h1 class="text-4xl mt-8 ml-5 mb-2 font-bold">Enter The Code</h1>
      <p class="ml-5 text-[#B9B9B9]">Confirm verification code</p>
    </div>
  
    <div>
      <form @submit.prevent="verifyCode" class="flex gap-5 ml-2">
        <input v-for="(input, index) in inputs" :key="index" type="text" class="border-gray-600 none bg-gray-100 px-[2rem] py-5 w-5 mt-20 ml-2.5" v-model="inputs[index]" required>
      </form>
  
      <p class="text-[#9595A2] text-center mt-10">
        You can resend code in <span id="countDown" class="text-orange-300">{{ countdown }}s</span>
      </p>
      <h1 class="font-bold text-xl text-center">Didn’t get the OTP? <span @click="resendCode" class="text-orange-400 hover:text-orange-600 mt-4">Resend</span></h1>
      <button @click="verifyCode" class="px-36 py-5 bg-orange-400 rounded-xl ml-7 mt-16 font-bold text-white">Verify</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "OTP",
    data() {
      return {
        inputs: ['', '', '', ''],
        countdown: 30,
        timer: null,
      };
    },
    methods: {
      startCountdown() {
        this.timer = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            clearInterval(this.timer);
          }
        }, 1000);
      },
      verifyCode() {
        // Your code to verify OTP
        console.log('Verifying OTP:', this.inputs.join(''));
      },
      resendCode() {
        // Your code to resend OTP
        console.log('Resending OTP');
        this.countdown = 30;
        this.startCountdown();
      },
    },
    mounted() {
      this.startCountdown();
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  