import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    meta: {
      keepAlive: false,
    }
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
