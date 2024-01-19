import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/Clavier',
      name: 'clavier',
      component: ClavierView
    }
  ]
})

export default router
