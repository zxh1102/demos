import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 配置路由
    {
      path: '/first/demo1',
      name: 'demo1',
      component: () => import('@/pages/first/demo1.vue')
    },
    {
      path: '/first/demo2',
      name: 'demo3',
      component: () => import('@/pages/first/demo2.vue')
    },
    // 开发可能会用到
    {
      path: '/first/demo1/:id',
      name: 'demo2',
      component: () => import('@/pages/first/demo1.vue')
    }
  ]
})
