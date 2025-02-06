import SplashScreen from '@/components/SplashScreen.vue';
import ChangePassword from '@/views/ChangePassword.vue';
import ForgetPassword from '@/views/ForgetPassword.vue';
import Homepage from '@/views/Homepage.vue';
import Login from '@/views/Login.vue';
import Onboarding1 from '@/views/Onboarding1.vue';
import Onboarding3 from '@/views/Onboarding3.vue';
import OTP from '@/views/OTP.vue';
import SignUp from '@/views/SignUp.vue';
import TopUp from '@/views/TopUp.vue';
import VerifyAccount from '@/views/VerifyAccount .vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your pages


// Define routes
const routes = [
  { path: '/', name: 'SplashScreen', component: SplashScreen },
  { path: '/onboarding-1', name: 'Onboarding1', component: Onboarding1 },
  { path: '/onboarding-2', name: 'Onboarding2', component: Onboarding2 },
  { path: '/onboarding-3', name: 'Onboarding3', component: Onboarding3 },
  { path: '/sign-up', name: 'SignUp', component: SignUp },
  { path: '/verify-account', name: 'VerifyAccount', component: VerifyAccount },
  { path: '/otp', name: 'OTP', component: OTP },
  { path: '/login', name: 'Login', component: Login },
  { path: '/forget-password', name: 'ForgetPassword', component: ForgetPassword },
  { path: '/change-password', name: 'ChangePassword', component: ChangePassword },
  { path: '/homepage', name: 'Homepage', component: Homepage },
  { path: '/top-up', name: 'TopUp', component: TopUp },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
