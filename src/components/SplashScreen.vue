<template>
  <div>
    <!-- Background Image -->
    <img class="h-[590px] w-full" :src="backgroundImage" alt="Pattern">

    <div class="p-4 ml-1">
      <h1 class="text-4xl font-bold">
        Track and Save your<br>
        <span class="mt-3 mb-4">Money Easily</span>.
      </h1>
      <p class="text-[#B9B9B9]">
        Carry your favourite cards on your device<br>
        so you can control your money usage.
      </p>

      <div class="mt-5 flex items-center">
        <img class="ml-2 w-[3.9rem] h-[1rem] mt-10" :src="indicatorImage" alt="Indicator">
        
        <!-- Button with ArrowRightCircleIcon -->
        <button class="ml-[270px] bg-[#262736] hover:bg-orange-600 text-white p-3 rounded-full flex items-center justify-center">
          <ArrowRightCircleIcon class="w-8 h-8" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowRightCircleIcon } from "@heroicons/vue/24/solid"; // Correct import

export default {
  name: "SplashScreen",
  components: {
    ArrowRightCircleIcon,
  },
  data() {
    return {
      backgroundImage: "Images/Pattern.png",
      indicatorImage: "Images/IndicatorStep.png",
    };
  },
};
</script>
