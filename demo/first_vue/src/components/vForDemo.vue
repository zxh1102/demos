<template>
  <div>
    <ul class="list1">
      <li v-for="item in items" :key="item.id" v-bind:id="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <!--
      变异方法
      push()
      pop()
      shift()
      unshift()
      splice()
      sort()
      reverse()
    -->
    <!--
      非变异(替换数组)
      例如：filter(), concat() 和 slice()
    -->
    <button @click="pushFunction">push</button><button @click="changItemByIndex">利用索引index直接设置一个项</button>
    <ul class="list2">
      <li v-for="(val, key) in items2" :key="key">
        {{ key }}:{{ val }}
      </li>
    </ul>

    <ul class="list3">
      <li v-for="(val, index) in items3" :key="index">
        {{ val.message }}
      </li>
    </ul>
    <button @click="filterFunction">filter</button>
  </div>
</template>

<script>
export default {
  name: 'vForDemo',
  data: function () {
    return {
      items: [
        {id: '0', title: 'title0'},
        {id: '1', title: 'title1'},
        {id: '2', title: 'title2'},
        {id: '3', title: 'title3'},
        {id: '4', title: 'title4'},
        {id: '5', title: 'title5'},
        {id: '6', title: 'title6'},
        {id: '7', title: 'title7'},
        {id: '8', title: 'title8'},
        {id: '9', title: 'title9'}
      ],
      items2: {
        id: '1',
        name: 'jack',
        age: '30',
        adr: 'beijing haidian zhongguancun'
      },
      items3: [
        {id: '123', message: '123'},
        {id: '234', message: '234'},
        {id: '345', message: 'Foo'}
      ]
    }
  },
  methods: {
    pushFunction: function () {
      var count = this.items.length
      this.items.push({id: count, title: 'title' + count})
    },
    filterFunction: function () {
      this.items3 = this.items3.filter(function (item) {
        return item.message.match(/Foo/)// 只保留Foo的项
      })
    },
    changItemByIndex: function () {
      this.items[0].id = 'newId'
    }
  },
  watch: {
    'items': function () {
      return console.log(this.items[0].id)
    }
  }
}
</script>

<style scoped>
  .list1{
    background-color: brown;
    color: white;
  }
  .list2{
    background-color: white;
    color: brown;
  }
  button{
    box-sizing: content-box;
    height:26px;
    line-height: 26px;
    padding: 0 10px;
    vertical-align: top;
    margin:10px;
  }
</style>
