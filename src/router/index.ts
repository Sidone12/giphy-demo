import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiphyViewVue from '@/views/GiphyView.vue'
import AuthorVue from '@/views/AuthorVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/giphy/:id",
      name: "GiphyViewVue",
      component: GiphyViewVue,
    },
    {
      path: "/author/:id",
      name: "AuthorVue",
      component: AuthorVue,
    }
  ]
})

export default router
