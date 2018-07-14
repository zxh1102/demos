<template>
  <section>
    {{name}}
    <mod-one></mod-one>
    <mod-table></mod-table>
    <button v-on:click="transferClick" @transfer="transferClick">{{ msg }}</button>
    <button-counter ref="child"></button-counter>
    <p>父组件点击总数：{{ countP }}</p>
  </section>
</template>

<script>
import buttonCounter from '../../components/buttonCounter'
import modOne from '../../components/modOne'
import modTable from '../../components/modTable'
export default {
  name: 'demo',
  components: {
    'button-counter': buttonCounter,
    'mod-one': modOne,
    'mod-table': modTable
  },
  methods: {
    transferClick: function () {
      // this.$refs.child.countAdd()
      this.countP++
      this.$refs.child.count++
    }
  },
  data () {
    return {
      name: 'jack',
      msg: '父组件按钮',
      countP: 0
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#app {
  background-color: #f8f8f8;
  font-size: 0;
}
</style>
