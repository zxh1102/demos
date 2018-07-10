<template>
  <section v-if="value">
    <form class="form1">
      <label>{{name}}</label>
      <p><input type="tel" v-model="phone"></p>
      <p><input type="text" v-model="code"></p>
      <button type="button" @click="submit">登录</button>
      <button type="button" @click="cancel">取消</button>
    </form>
    <div class="mask" @click="close"></div>
  </section>
</template>

<script>
export default {
  // props 接受父组件的参数 父组件向子组件通信
  // 接收参数
  props: ['isShow', 'name', 'value'],
  // 自定义事件
  events: ['success', 'cancel'],
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
    },
    cancel () {
      this.$emit('cancel')
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="scss">
.form1 {
  position: fixed;
  z-index: 2;
  height: 400px;
  width: 300px;
  background-color: #fff;
  border: 10px solid brown;
  border-radius: 10px;
  line-height: 1.5;
  margin: 20px;
  padding: 20px;
}
.mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>
