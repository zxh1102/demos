<template>
  <div>
    <p>注释：一般情况下头部和侧边栏还有版权信息是封装在模板内的。这里的主要是提供静态页面的完整效果。</p>
    <p class="comTitle">1.经销商服务平台</p>
    <iframe src="@/../static/iframe/body1.html" frameborder="0" width="1200px" height="500px"></iframe>
    <p class="comTitle">2.经销商服务平台（首页）</p>
    <iframe src="@/../static/iframe/body4.html" frameborder="0" width="1200px" height="200px"></iframe>
    <p class="comTitle">3.集团版</p>
    <iframe src="@/../static/iframe/body5.html" frameborder="0" width="1200px" height="200px"></iframe>
    <p class="comTitle">4.经销商点评系统</p>
    <iframe src="@/../static/iframe/body3.html" frameborder="0" width="1200px" height="500px"></iframe>
    <p class="comTitle">5.i车商</p>
    <iframe src="@/../static/iframe/body2.html" frameborder="0" width="1200px" height="500px"></iframe>
  </div>
</template>
<script>
export default {
  name: 'icsBody',
  data () {
    return {
      msg: 'icsBody'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
