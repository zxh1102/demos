<template>
  <section>
    <!-- （值|过滤器名称）表示过滤器 -->
    <h1>{{now|date}}</h1>
    <h1>{{ran|num}}</h1>
    <h1>{{ran|num({fix:4})}}</h1>
  </section>
</template>

<script>
export default {
  data () {
    return {
      now: new Date(),
      ran: 0
    }
  },
  created () {
    // 创建随机数
    this.ran = Math.random() * 100
  }
}
</script>

<style>
</style>
