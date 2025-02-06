<template>
    <div>
      <img class="h-[590px] w-full" src="../assets//Images/Pattern.png" alt="Pattern">
      <div class="p-4 ml-1">
        <h1 class="text-4xl font-bold">
          Track and Save your<br>
          <span class="mt-3 mb-4"> Money Easily </span>.
        </h1>
        <p class="text-[#B9B9B9]">
          Carry your favourite cards on your device<br>
          so you can control your money usage.
        </p>
        <div class="mt-5 flex">
          <img class="ml-2 w-[3.9rem] h-[1rem] mt-10" src="/Images/Indicator Step 3.png">
          <router-link to="/onboarding1">
            <img class="ml-[270px]" src="/Images/Button.png" alt="Finish">
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Onboarding3",
  };
  </script>

