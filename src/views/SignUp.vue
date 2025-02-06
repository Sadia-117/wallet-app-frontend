<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-5xl p-8 font-bold">Sign Up</h1>
      <p class="text-2xl text-gray-500 text-center">Fast, secure, and easy money management at your fingertips.</p>
      
      <form @submit.prevent="handleSubmit" class="mt-5 w-96">
        <div class="relative">
          <i class='bx bx-user absolute left-4 top-4 text-orange-300 text-2xl'></i>
          <input v-model="name" type="text" placeholder="Your name" class="w-full p-4 pl-12 border border-gray-400 rounded-lg" required>
        </div>
  
        <div class="relative mt-4">
          <i class='bx bx-envelope absolute left-4 top-4 text-orange-300 text-2xl'></i>
          <input v-model="email" type="email" placeholder="Your email" class="w-full p-4 pl-12 border border-gray-400 rounded-lg" required>
        </div>
  
        <div class="relative mt-4">
          <i class='bx bx-lock-alt absolute left-4 top-4 text-orange-300 text-2xl'></i>
          <i @click="togglePassword" :class="passwordIcon" class='absolute right-4 top-4 cursor-pointer text-xl'></i>
          <input :type="passwordFieldType" v-model="password" placeholder="Password" class="w-full p-4 pl-12 border border-gray-400 rounded-lg" required>
        </div>
  
        <div class="flex items-center mt-4">
          <input type="checkbox" v-model="terms" class="mr-2"> Agree with <span class="text-orange-500">Terms & Conditions</span>
        </div>
  
        <button type="submit" class="mt-6 w-full bg-orange-600 py-3 rounded-lg text-white hover:bg-orange-700 font-bold">Sign Up</button>
      </form>
      
      <p class="text-center mt-2 text-gray-500">or join with</p>
      <div class="flex justify-center mt-2 gap-2">
        <img class="w-16" src="images/Frame 1597883993.png" alt="Google">
        <img class="w-16" src="images/Frame 1597884036.png" alt="Facebook">
        <img class="w-16" src="images/Frame 1597884035.png" alt="Apple">
      </div>
      
      <p class="text-center mt-4 text-gray-500">Have an account? <span class="font-bold text-orange-500 cursor-pointer">Login</span></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        terms: false,
        passwordFieldType: 'password',
      };
    },
    computed: {
      passwordIcon() {
        return this.passwordFieldType === 'password' ? 'bx bx-low-vision' : 'bx bx-show';
      }
    },
    methods: {
      togglePassword() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
      },
      handleSubmit() {
        if (!this.terms) {
          alert('Please agree to the terms and conditions.');
          return;
        }
        alert(`Welcome, ${this.name}! Your account has been created.`);
      }
    }
  };
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
  }
  </style>
  