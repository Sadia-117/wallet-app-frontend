<template>
  <div class="p-4">
    <!-- Back Button & Title -->
    <div class="flex items-center">
      <img class="w-10 h-10 cursor-pointer" :src="backButton" alt="Back">
      <h1 class="text-xl font-extrabold ml-4">Verify Your Account</h1>
    </div>

    <!-- Placeholder Image -->
    <div class="flex justify-center">
      <img class="w-80 mt-5" :src="placeHolder" alt="Placeholder">
    </div>

    <!-- Verification Mail Section -->
    <div class="p-4 text-center">
      <h1 class="text-4xl font-bold text-black mt-4 mb-1">Verification Mail</h1>
      <p class="text-[#B9B9B9]">We will send you a confirmation code.</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="sendCode" class="text-center">
      <div class="relative w-80 mx-auto">
        <i class="bx bx-envelope absolute left-3 top-4 text-orange-300 text-2xl"></i>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Your email" 
          class="w-full p-4 pl-10 border border-gray-400 rounded-xl focus:outline-none hover:border-orange-300"
          required
        >
      </div>

      <!-- Submit Button -->
      <button 
        type="submit" 
        class="bg-orange-400 px-32 py-4 mt-5 rounded-xl text-white font-bold hover:bg-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
        :disabled="!email"
      >
        Send Code
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "VerifyAccount",
  data() {
    return {
      email: '',
      backButton: new URL('@/assets/images/BackButton.png', import.meta.url).href,
      placeHolder: new URL('@/assets/images/PlaceHolder.png', import.meta.url).href
    };
  },
  methods: {
    sendCode() {
      alert(`Verification code sent to ${this.email}`);
    }
  }
};


</script>


