// 入口文件
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'// 配置路由

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 挂载点
  router, // 路由
  components: { App }, // 注册了
  template: '<App/>' // 调用模板
})
