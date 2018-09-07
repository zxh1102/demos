<template>
  <div>
    <ics-top></ics-top>
    <div class="part_main fn-clear">
      <ics-menu class="part_left fn-left"></ics-menu>
      <ics-con class="part_right fn-right"></ics-con>
    </div>
  </div>
</template>
<script>
import icsTop from '@/components/icsTop.vue'
import icsMenu from '@/components/icsMenu.vue'
import icsCon from '@/components/icsCon.vue'
export default {
  components: {
    icsTop,
    icsMenu,
    icsCon
  }
}
</script>
<style>
/* 一些基础框架样式 */
body,
html {
  background: url();
}
.flex-list {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.flex-item {
  flex-grow: 1;
}
.part_main {
  width: 1200px;
  margin: 0 auto;
}
.part_left {
  width: 20%;
}
.part_right {
  width: 80%;
}
</style>
