<template>
  <div class="components_menu">
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
        name: '主框架',
        id: '@/pages/first/body'
      }, {
        name: '头部',
        id: 'top'
      }, {
        name: '导航',
        id: 'nav'
      }, {
        name: '左侧菜单',
        id: 'menu'
      }, {
        name: '面包屑',
        id: 'crumbs'
      }, {
        name: '表单',
        id: 'form'
      }, {
        name: '表格',
        id: 'table'
      }, {
        name: '列表',
        id: 'list'
      }, {
        name: '图标',
        id: 'icon'
      }, {
        name: '按钮',
        id: 'btn'
      }, {
        name: '标题',
        id: 'title'
      }, {
        name: '选项卡',
        id: 'tab'
      }, {
        name: '分页',
        id: 'page'
      }, {
        name: '提示',
        id: 'tips'
      }, {
        name: '焦点图',
        id: 'focus'
      }, {
        name: '弹窗',
        id: 'layer'
      }, {
        name: '未定义',
        id: 'demo1'
      }]
    }
  }
}
</script>

<style scoped>
.components_menu {
}
.ul {
  border-right: 1px solid #fafafa;
  padding-right: 20px;
  text-align: right;
}
a {
  color: #333;
  padding: 10px;
}
</style>
