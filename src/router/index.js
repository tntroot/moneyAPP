import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countmoney',
      component: () => import("../views/CountMoney.vue")
    },
    {
      path: '/sign',
      name: 'Sign',
      component: () => import("../views/Sign.vue")
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router 
