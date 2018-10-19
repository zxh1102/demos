<template>
  <div>
    <ol>
      <li>注释：</li>
      <li>1.规则为背景为白色时，按钮的没有阴影 需要添加类名noshadow </li>
      <li>2.鼠标按下时添加类名focus，鼠标送开始移除 </li>
      <li>3.不可点击时添加类名disabled</li>
    </ol>
    <ul>
      <li v-for="(item,index) in list" :key="'btn'+index">
        <a href="javascript:;" :class="item.class">按钮</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'icsBtn',
  data () {
    return {
      list: [
        {
          class: 'ics_btn_v1 ics_btn_v1-blue'
        },
        {
          class: 'ics_btn_v1 ics_btn_v1-blue disabled'
        }, {
          class: 'ics_btn_v1 ics_btn_v1-grey'
        }, {
          class: 'ics_btn_v1 ics_btn_v1-white'
        }, {
          class: 'ics_btn_v1 ics_btn_v1-white disabled'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  margin-top: 10px;
}
</style>
