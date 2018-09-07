import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, // 配置路由
  {
    path: '/first/index',
    name: 'first',
    component: () =>
        import('@/pages/first/index.vue')
  }
  ],
  // 解决了锚点定位
  mode: 'history',
  srcollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
