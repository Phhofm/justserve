import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/cleanup', name: 'cleanup', component: () => import('../views/CleanUpView.vue') },
    { path: '/kispi', name: 'kispi', component: () => import('../kispi/views/HomeView.vue') },
    {
      path: '/kispi/admin',
      name: 'kispi-admin',
      component: () => import('../kispi/views/AdminView.vue'),
    },
  ],
})