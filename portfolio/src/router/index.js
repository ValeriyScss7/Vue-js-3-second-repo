import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/views/MyPortfolio.vue') 
  },
  {
    path:'/about',
    component: () => import('@/views/AboutMe.vue')
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
