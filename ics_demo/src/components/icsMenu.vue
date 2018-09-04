<template>
  <div class="menu">
    <ul>
      <li v-for="(item,index) in list" :key="'menu'+index">
        <a v-bind:href="'#'+item.id" v-text="item.name"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'icsMenu',

  data () {
    return {
      msg: 'icsMenu',
      list: [{
        id: '主框架',
        name: 'body'
      }, {
        id: '头部',
        name: 'top'
      }, {
        id: '导航',
        name: 'nav'
      }, {
        id: '左侧菜单',
        name: 'menu'
      }, {
        id: '面包屑',
        name: 'crumbs'
      }, {
        id: '表单',
        name: 'form'
      }, {
        id: '表格',
        name: 'table'
      }, {
        id: '列表',
        name: 'list'
      }, {
        id: '图标',
        name: 'icon'
      }, {
        id: '按钮',
        name: 'btn'
      }, {
        id: '标题',
        name: 'title'
      }, {
        id: '选项卡',
        name: 'tab'
      }, {
        id: '分页',
        name: 'page'
      }, {
        id: '提示',
        name: 'tips'
      }, {
        id: '焦点图',
        name: 'focus'
      }, {
        id: '弹窗',
        name: 'layer'
      }, {
        id: '未定义',
        name: 'demo1'
      }]
    }
  }
}
</script>

<style scoped>
.menu {
  border-right: 1px solid #fafafa;
}
</style>
