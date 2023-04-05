import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  // 路由导航拦截引导登录
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
