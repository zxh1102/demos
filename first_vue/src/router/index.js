// 路由
import Vue from 'vue'
import Router from 'vue-router'
import modOne from '@/components/modOne'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'modOne',
      component: modOne
    }
  ]
})
