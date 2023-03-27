// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/*webpackChunkName: "about" */ '@/views/AboutView.vue'),
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: () => import(/*webpackChunkName: "pricing" */ '@/views/PricingView.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/*webpackChunkName: "contact" */ '@/views/ContactView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/*webpackChunkName: "login" */ '@/views/LoginView.vue')
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/*webpackChunkName: "login" */ '@/views/DashboardView.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
