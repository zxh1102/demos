<template>
  <section>
    <login v-bind:name="name" v-model="show" @success="compelte" @cancel="pcancel"></login>
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
    },
    pcancel () {
      this.show = false
    }
  }
}
</script>
<style lang="scss">
</style>
