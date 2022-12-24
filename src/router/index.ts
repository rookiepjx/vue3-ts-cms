import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/MyHome.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/MyProfile.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
