// 路由
import Vue from 'vue'
import Router from 'vue-router'
import app from '@/App'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },
    {
      path: '/first/demo',
      name: 'demo',
      component: () => import('@/pages/first/demo.vue')
    },
    {
      path: '/first/form',
      name: 'form',
      component: () => import('@/pages/first/form.vue')
    },
    {
      path: '/second/index',
      name: 'index',
      component: () => import('@/pages/second/index.vue')
    }
  ]
})
