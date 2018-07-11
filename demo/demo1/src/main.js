// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// @/ 表示src根目录
// 导入过滤器
import filters from '@/filters'
// 自定义指令
import directives from '@/directives'

Vue.config.productionTip = false
// Vue.use 自带的安装函数，依赖注入的设计模式，执行filters的install方法
Vue.use(filters)
Vue.use(directives)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
