<template>
  <section>
    <login v-bind:name="name" :is-show="show" @success="compelte"></login>
    <a href="javascript:;" @click="login">去登陆</a>
  </section>
</template>

<script>
import login from '@/components/login.vue'
export default {
  components: {
    login
  },
  data () {
    return {
      show: false,
      name: '用户姓名'
    }
  },
  methods: {
    login () { this.show = true },
    compelte (data) {
      console.log(data)
    }
  }
}
</script>

<style>
</style>
