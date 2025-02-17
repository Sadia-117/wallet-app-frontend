<template>
  <div class="p-6">
    <div class="flex mt-6">
      <button class="rounded-full ml-5 bg-[#FBFBFB]">
        <i class='text-5xl bx bx-chevron-left'></i>
      </button>
      <h2 class="pl-[4.6rem] text-3xl font-bold">Top-Up</h2>
    </div>
    <div class="flex gap-6 pl-7 mt-5">
      <div class="bg-[#F2F2F2] text-black flex px-8 py-4 rounded-2xl gap-2">
        <i class='bx bx-qr text-xl'></i>
        <h2 class="font-bold">QR Code</h2>
      </div>
      <div class="flex bg-[#F57C51] px-8 py-4 rounded-2xl gap-2 text-white">
        <button><i class='bx bxs-down-arrow-alt text-xl'></i></button>
        <h2 class="font-bold">Top-Up</h2>
      </div>
    </div>
    <form @submit.prevent="submitForm" class="ml-5 mt-5 text-[16px]">
      <div v-for="(field, key) in formFields" :key="key" class="mt-3">
        <label :for="key" class="block font-semibold">{{ field.label }}</label>
        <input 
          v-model="formData[key]"
          :type="field.type"
          :placeholder="field.placeholder"
          class="border-[1.5px] border-[#F2F2F2] py-[12px] px-[16px] w-full rounded-[12px] mt-1"
          required
        />
      </div>
      <button 
        type="submit"
        class="bg-[#F57C51] px-4 py-3 w-full mt-6 rounded-[12px] text-white font-bold"
      >
        Confirm
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "top-up",
  data() {
    return {
      formData: {
        name: '',
        cardNumber: '',
        cvv: '',
        email: '',
        amount: '',
        note: ''
      },
      formFields: {
        name: { label: "Cardholder Name", type: "text", placeholder: "Skylar White" },
        cardNumber: { label: "Card Number", type: "text", placeholder: "345273654652" },
        cvv: { label: "CVV", type: "text", placeholder: "CVV" },
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        amount: { label: "Add Amount", type: "text", placeholder: "$100.00" },
        note: { label: "Note", type: "text", placeholder: "Add Note" }
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted", this.formData);
      alert("Payment details submitted!");
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>