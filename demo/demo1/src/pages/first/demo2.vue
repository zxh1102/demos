<template>
  <section>
    <p>{{title}}</p>
    <ul v-bind:class="{active:actived}">
      <li v-for="(item,key) in list" v-bind:key="key">
        <!-- key不可以重复 -->
        <span>{{item.id}}</span>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <button v-on:click="sw()">切换</button>
  </section>
</template>

<script>
let currentInterval = null
export default {
  data () {
    return {
      title: 'title',
      list: [],
      actived: false
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    this.list.push({
      id: 1,
      name: 'name1'
    })
    setTimeout(() => {
      this.list.push({
        id: 2,
        name: 'name2'
      })
    }, 2000)
    currentInterval = setInterval(() => {
      console.log('interval')
      const id = Math.random() * 100 + 10
      this.list.push({
        id: id,
        name: 'name' + id
      })
    }, 2000)
  },
  beforeUpdate () {
    console.log('beforeupdate')
  },
  updated () {
    console.log('update')
  },
  beforeMount () {
    console.log('beforeMounte')
  },
  mounted () {
    console.log('mounte')
  },
  beforeDestroy () {
    // 释放html和body的全局的touch，scroll等事件
    clearInterval(currentInterval)
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    sw: function () {
      this.actived = !this.actived
    }
  }
}
</script>
<style lang="scss">
.active {
  background-color: red;
}
</style>
