<!-- 根模板 -->
<template>
  <div>
    <ul>
      <ol v-for="(item, index) of list" :key="index">{{ item*item }}</ol>
    </ul>
    <p @click="doSomething"></p>
    <img v-bind:src="imgSrc" />
    <div v-bind:class="{ red: isRed }">isRed:{{ isRed }}</div>
    <div v-bind:class="{ red: isRed, blue: isBlue }">isRed:{{ isRed }} isBlue:{{ isBlue }}</div>
    <p>双向绑定:{{ msg }}</p>
    <input type="text" v-model="msg">
    <p>Computed reversed message: "{{ reversedMsg }}"</p>
    <p>v-html:<span v-html="text"></span></p>
    <p>v-text:<span v-text="text"></span></p>
    <button v-bind:disabled="isButtonDisabled">isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被渲染出来</button>
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <p>文字反转{{ imgSrc.split('').reverse().join('') }}</p>
    <p v-if="hide">v-if 不可见时移除dom</p>
    <p v-show="hide">v-show 不可见时为display:none</p>
    <p class="normal">firstName:{{ firstName }}<br/>lastName{{ lastName }}<br/>fullName:{{ fullName }}</p>
    <p v-bind:style="{ color: activeColor,fontSize: fontSize + 'px',backgroundColor: activeBackground }">绑定内联样式</p>
    <p v-bind:style="[ styleOne, styleTwo ]">绑定内联样式-数组语法</p>
    <p :style="{ width: ['200px', '300px', '100px'],height: '200px',border: '1px solid black' }">绑定内联样式-多重值</p>
    <!-- if/else -->
    <div v-if="random">
      <p>random > 0.5 == true</p>
      <input type="text" placeholder="random" key="1">
    </div>
    <div v-else-if="random2">
      <p>random > 0.5 == false 且 random2 > 0.5 == true</p>
      <input type="text" placeholder="random2" key="2">
    </div>
    <div v-else>
      <p>所有条件为 false</p>
      <input type="text" placeholder="!random!random2" key="3">
    </div>
    <button v-on:click="randomToggle">点击</button>
    <!-- v-for和v-if同时使用 -->
    <ul class="ulList">
      <li v-for="(item, index) in ulList" :key="index" v-if="item">{{ item }}</li>
    </ul>
    <v-for-demo></v-for-demo>
  </div>
</template>

<script>
import vForDemo from './vForDemo'
export default {
  name: 'modOne',
  components: {
    'v-for-demo': vForDemo
  },
  data: function () {
    return {
      list: ['1', '2', '3', '4'],
      ulList: [true, true, true, false, false, true],
      imgSrc: '//img3.mukewang.com/55a8a7100001115601000100-40-40.jpg',
      isRed: true,
      isBlue: true,
      msg: '123',
      text: '<b>文字</b>',
      isButtonDisabled: true,
      ok: true,
      hide: false,
      // show: true
      firstName: 'Foo',
      lastName: 'Bar',
      activeColor: 'purple',
      fontSize: 22,
      activeBackground: 'pink',
      styleOne: {color: 'white'},
      styleTwo: {backgroundColor: 'blue'},
      random: Math.random() > 0.5,
      random2: Math.random() > 0.5
    }
  },
  methods: {
    doSomething: function () {
      console.log('in')
    },
    randomToggle: function () {
      this.random = !this.random
    }
  },
  computed: {
    reversedMsg: function () {
      return this.msg.split('').reverse().join('')
    },
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  // 生命周期开始
  beforeCreate: function () {},
  created: function () {
    console.log(this.random)
  },
  beforeMount: function () {},
  mounted: function () {},
  beforeUpdate: function () {},
  update: function () {},
  beforeDestroy: function () {},
  destroyed: function () {}
  // 生命周期结束
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  p{
    color:green;
    background-color: #f90;
  }
  .normal{
    background-color: transparent;
    color:#333;
  }
  .red{
    border:2px solid red;
  }
  .blue{
    background-color: blue;
    color:#fff;
  }
  html{
    img{
      border:1px solid yellow;
      width: 50px;
    }
  }
  .ulList{
    display: table;
    // border:1px solid #ccc;
    li{
      display: table-cell;
      border:1px solid #ccc;
      border-collapse:collapse
    }
  }
  table{
      border-collapse:collapse;
      border:1px solid red;
    tr{

      border-collapse:collapse;
      border:1px solid red;
    }
    td{
      border-collapse:collapse;
      border:1px solid #333;
    }
  }
</style>
