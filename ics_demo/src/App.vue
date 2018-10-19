<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  ready () {

  }
}
</script>
<style>
/* 引入公共样式 */
@import './../static/css/base.css';
@import './../static/css/common.css';
@import './../static/css/common_new.css';
@import './../static/css/blue_skin.css';
/*滚动条样式表*/
@import './../static/css/jquery.mCustomScrollbar.min.css';
</style>
