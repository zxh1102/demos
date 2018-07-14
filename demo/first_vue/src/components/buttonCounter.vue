<template>
  <div>
    <button v-on:click="countAdd()">子组件按钮</button>
    <p>总点击数：{{ count }}<br/>子组件点击数{{ countC }}</p>
    <!-- <p v-text="count" class="test1" v-show="isShow"></p>
    <p v-html="count" class="test2" v-if="isShow"></p> -->
  </div>
</template>
<script>
export default {
  name: 'buttonCounter',
  data: function () {
    return {
      count: 0,
      countC: 0,
      isShow: true
    }
  },
  methods: {
    countAdd: function () {
      this.count++
      this.countC++
      this.$emit('transfer', this.count)
    }
  },
  watch: {
    'count': function (val, oldVal) {
      // console.log(val, oldVal)
      if (val % 2 === 0) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
</script>
<style scoped>
button {
  border-color: red;
}
.test1 {
  background-color: #fff;
  color: pink;
}
.test2 {
  background-color: #000;
  color: #fff;
}
</style>
