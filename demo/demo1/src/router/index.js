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
    },
    {
      path: '/second/demo1',
      name: 'demo21', // name不可以重复
      component: () => import('@/pages/second/demo1.vue')
    },
    {
      path: '/second/demo2',
      name: 'demo22',
      component: () => import('@/pages/second/demo2.vue')
    },
    {
      path: '/third/demo1',
      name: 'demo31',
      component: () => import('@/pages/third/demo1.vue')
    },
    {
      path: '/third/demo2',
      name: 'demo32',
      component: () => import('@/pages/third/demo2.vue')
    },
    {
      path: '/fourth/demo1',
      name: 'demo41',
      component: () => import('@/pages/fourth/demo1.vue')
    },
    {
      path: '/fourth/demo2',
      name: 'demo42',
      component: () => import('@/pages/fourth/demo2.vue')
    }
  ]
})
