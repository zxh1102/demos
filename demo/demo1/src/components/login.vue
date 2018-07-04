<template>
  <section>
    <form v-if="isShow">
      <label>{{name}}</label>
      <p><input type="tel" v-model="phone"></p>
      <p><input type="text" v-model="code"></p>
      <button type="button" @click="submit">登录</button>
    </form>
  </section>
</template>

<script>
export default {
  // props 接受父组件的参数 父组件向子组件通信
  // 接收参数
  props: ['isShow', 'name'],
  data () {
    return {
      phone: '',
      code: ''
    }
  },
  methods: {
    submit () {
      setTimeout(() => {
        alert('登陆成功')
        // $emit 子组件向父组件通信
        // 输出事件（success事件） 传递参数
        this.$emit('success', { phone: this.phone, code: this.code })
      }, 2000)
    }
  }
}
</script>

<style>
</style>
