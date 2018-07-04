<template>
  <section>
    <!-- 表单部分 -->
    <form>
      <p>手机号
        <input type="tel" v-model="phone">
      </p>
      <p>姓名
        <input type="name" v-model="name">
      </p>
      <p>验证码
        <input type="code" v-model="code">
      </p>
      <p>
        您的姓名是{{this.name}},您的手机号是{{this.phone}}
      </p>
      <p>手机的运营商是{{position}}</p>
      <p>手机号的长度是{{this.phonelength}}</p>
      <p>{{isMatch}}</p>
      <p>info:{{info}}</p>
      <!-- v-html/v-text/{{插值表达式}} -->
      <p v-html="this.html"></p>
      <p v-text="this.label"></p>
      <button @click="submit" type="button">提交</button>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      name: '',
      code: '',
      phonelength: 0,
      label: 'xxx',
      html: '<p>1234</p>'
    }
  },
  // 计算(尽量不要进行复杂的操作)
  computed: {
    position () {
      if (this.phone) {
        if (/13[1-3]/i.test(this.phone)) {
          return '中国联通'
        } else {
          return '中国移动'
        }
      }
      return '未知'
    },
    // 监控两个变量
    isMatch () {
      if (this.phone && this.code) {
        const len = this.phone.length + this.code.length
        if (len === 15) {
          return '匹配'
        }
      }
      return '不匹配'
    },
    info: {
      get: function () {
        return this.name + 'and' + this.phone
      },
      set: function (val) {
        this.name = val.name
        this.phone = val.phone
      }
    }
  },
  created () {
    setTimeout(() => {
      this.phone = '158'
    }, 2000)
    setTimeout(() => {
      const data = { name: '张三', phone: '12312312222' }
      this.info = data
    }, 3000)
  },
  // 方法
  methods: {
    submit () {
      console.log('phone', this.phone)
      console.log('name', this.name)
      console.log('code', this.code)
    }
  },
  // 监控(避免滥用)
  watch: {
    phone (newval, oldval) {
      this.phonelength = newval.length
    }
  }
}
</script>

<style>
</style>
