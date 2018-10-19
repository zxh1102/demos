// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

// 代码高亮插件引入
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

// 引入滚动条mCustomScroll插件

// import './../static/css/jquery.mCustomScrollbar.min'
var mCustomScrollbar = require('./../static/js/jquery.mCustomScrollbar.min.js')
// echarts全部引入
// import echarts from 'echarts'
// echarts按需引入
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

// 自定义指令
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.prototype.$mCustomScrollbar = mCustomScrollbar
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
$(function () {
  console.log($)
})
