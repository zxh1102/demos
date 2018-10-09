<template>
  <div class="components_menu">
    <ul>
      <li v-for="(item,index) in list" :key="'menu'+index" @click="menuSelecte(index)" :class="{cur:index==curNum}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'icsMenu',
  data () {
    return {
      curNum: 0,
      msg: 'icsMenu',
      list: [{
        name: '基础引入',
        id: 'icsBase'
      }, {
        name: '插件',
        id: 'icsPlugin'
      },
      {
        name: '主框架',
        id: 'icsBody'
      }, {
        name: '头部',
        id: 'icsTop'
      }, {
        name: '导航',
        id: 'icsNav'
      }, {
        name: '左侧菜单',
        id: 'icsMenu'
      }, {
        name: '面包屑',
        id: 'icsCrumbs'
      }, {
        name: '表单',
        id: 'icsForm'
      }, {
        name: '表格',
        id: 'icsTable'
      }, {
        name: '列表',
        id: 'icsList'
      }, {
        name: '标题',
        id: 'icsTitle'
      }, {
        name: '图标',
        id: 'icsIcon'
      }, {
        name: '按钮',
        id: 'icsBtn'
      }, {
        name: '选项卡',
        id: 'icsTab'
      }, {
        name: '分页',
        id: 'icsPage'
      }, {
        name: '提示',
        id: 'icsTips'
      }, {
        name: '弹窗',
        id: 'icsLayer'
      }, {
        name: '焦点图',
        id: 'icsFocus'
      }, {
        name: '未定义',
        id: 'icsDemo1'
      }
      ]
    }
  },
  methods: {
    menuSelecte: function (index) {
      // 获取id
      var itemId = this.list[index].id
      // 交互
      this.curNum = index
      // this.curView = itemId
      // 向父组件传递
      this.$emit('parentEvent', itemId)
    }
  }

}

</script>

<style scoped>
.components_menu {
}
ul {
  border-right: 1px solid transparent;
  margin-right: 20px;
  background-color: #fff;
}
li {
  padding: 10px 20px;
  cursor: pointer;
  text-align: right;
  color: #4167bf;
}
li.cur {
  background-color: #7bbad7;
  color: #fff;
}
</style>
