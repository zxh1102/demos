<template>
  <section>{{ Name }}</section>
</template>

<script>
export default {
  data () {
    return {
      Name: 'vue'
    }
  },
  created () {
    console.log(this.$route) // 当前的路由对象
    // this.$router // 需要跳转的路由
  }
}
</script>

<style>
</style>
