<template>
  <div class="p-4">
    <div class="text-center bg-gradient-to-r from-[#FCBC58] via-[#FE9463] to-[#FF622A] text-white rounded-xl p-5">
      <h2 class="text-2xl">Main Balance</h2>
      <h2 class="text-5xl font-bold">$14,235.<span class="text-2xl">34</span></h2>
    </div>
    
    <div class="mt-6">
      <h2 class="text-3xl font-bold">Exchange Rate</h2>
      <div class="bg-gray-100 p-4 rounded-lg mt-2">
        <p class="text-gray-500">I have:</p>
        <div class="flex items-center">
          <img src="/public/Images/CH.png" class="w-8 h-6" alt="CHF" />
          <span class="ml-2">CHF</span>
          <span class="ml-auto text-2xl font-bold">10</span>
        </div>
      </div>
      <div class="bg-gray-100 p-4 rounded-lg mt-4">
        <p class="text-gray-500">I want:</p>
        <div class="flex items-center">
          <img src="/public/Images/US.png" class="w-8 h-6" alt="USD" />
          <span class="ml-2">USD</span>
          <span class="ml-auto text-2xl font-bold">10.99</span>
        </div>
      </div>
    </div>
    
    <div class="mt-6">
      <h2 class="text-3xl font-bold">Insights</h2>
      <canvas id="chart"></canvas>
    </div>
    
    <div class="fixed bottom-0 left-0 w-full bg-white shadow-md py-2 flex justify-around items-center border-t">
      <button class="flex flex-col items-center text-orange-500">
        <span>🏠</span>
        <span class="text-sm">Home</span>
      </button>
      <button class="flex flex-col items-center text-gray-500">
        <span>📊</span>
        <span class="text-sm">Insights</span>
      </button>
      <button class="flex flex-col items-center text-gray-500">
        <span>💸</span>
        <span class="text-sm">Transfer</span>
      </button>
      <button class="flex flex-col items-center text-gray-500">
        <span>👤</span>
        <span class="text-sm">Account</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: "Homepage",
  mounted() {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Income',
            data: [500, 1200, 900, 1400, 1244, 1000],
            borderColor: '#FCBC58',
            backgroundColor: 'rgba(252, 188, 88, 0.2)',
            tension: 0.4,
          },
          {
            label: 'Expense',
            data: [700, 1000, 1100, 1300, 900, 800],
            borderColor: '#FF622A',
            backgroundColor: 'rgba(255, 98, 42, 0.2)',
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  },
};
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: 250px !important;
}
</style>

