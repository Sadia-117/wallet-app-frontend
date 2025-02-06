<template>
    <div>
      <div>
        <h1 class="text-5xl p-8 font-bold">Log In</h1>
        <p class="text-2xl pl-8 text-[#9595A2]">
          Fast, secure, and easy money management<br> at your fingertips.
        </p>
      </div>
  
      <form @submit.prevent="handleLogin" class="mt-5">
        <div class="relative">
          <i class='bx bx-envelope absolute left-10 top-12 text-orange-300 text-2xl'></i>
          <input 
            type="email" 
            v-model="email" 
            placeholder="Your email"
            class="ml-8 w-80 p-4 m-2 border border-gray-400 rounded-lg"
            required
          >
        </div>
  
        <div class="relative">
          <i class='bx bx-lock-alt absolute left-10 top-12 text-orange-300 text-2xl'></i>
          <i 
            @click="togglePassword" 
            :class="showPassword ? 'bx bx-show' : 'bx bx-low-vision'"
            class='absolute right-10 top-12 text-xl cursor-pointer'
          ></i>
          <input 
            :type="showPassword ? 'text' : 'password'" 
            v-model="password" 
            placeholder="Password"
            class="ml-8 w-80 p-4 m-2 border border-gray-400 rounded-lg" 
            required
          >
          <router-link to="/forget-password" class="font-bold text-[#F57C51] hover:text-orange-600 pl-[14rem] cursor-pointer">
            Forgot Password
          </router-link>
        </div>
  
        <div class="ml-8 mt-5">
          <input type="checkbox" id="terms" v-model="agreed">
          <label for="terms" class="ml-2">Agree with <span class="text-[#F57C51]">Terms & Conditions</span></label>
        </div>
  
        <button type="submit"
          class="ml-[2.4rem] mt-10 bg-orange-600 px-36 py-4 rounded-xl text-white hover:bg-orange-700 font-bold">
          Log In
        </button>
      </form>
  
      <p class="ml-[10.5rem] mt-2 text-[#9595A2]">or join with</p>
      <div class="flex justify-center mt-2 gap-2">
        <img class="w-16" src="@/assets/google.png" alt="Google">
        <img class="w-16" src="@/assets/facebook.png" alt="Facebook">
        <img class="w-16" src="@/assets/apple.png" alt="Apple">
      </div>
  
      <p class="text-center mt-2 mb-5 text-[#9595A2]">
        Don't have an account?  
        <router-link to="/sign-up" class="font-bold text-[#F57C51] text-xl">Sign Up</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
        showPassword: false,
        agreed: false,
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      handleLogin() {
        if (!this.email || !this.password) {
          alert("Please enter your email and password.");
          return;
        }
        if (!this.agreed) {
          alert("You must agree to the Terms & Conditions.");
          return;
        }
        alert(`Logging in with ${this.email}`);
        // Implement API call here
      },
    },
  };
  </script>
  