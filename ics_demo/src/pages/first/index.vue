<template>
  <div>
    <ics-top></ics-top>
    <div class="flex-list">
      <ics-menu class="flex-item"></ics-menu>
      <ics-con class="flex-item"></ics-con>
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
  background-color: #f60;
  flex-grow: 1;
}
</style>
