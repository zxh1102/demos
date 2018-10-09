<template>
  <div class="">
    <ics-top class="part_heart"></ics-top>
    <div class="part_main fn-clear">
      <ics-menu class="part_left sticky" @parentEvent="getData"></ics-menu>
      <ics-con class="part_right" :curViewName="curView"></ics-con>
    </div>
    <ics-footer class="part_footer"></ics-footer>
  </div>
</template>
<script>
import icsTop from '@/components/icsTop.vue'
import icsMenu from '@/components/icsMenu.vue'
import icsCon from '@/components/icsCon.vue'
import icsFooter from '@/components/icsFooter.vue'
export default {
  // ready () {
  //   $('body').hide()
  // },
  components: {
    icsTop,
    icsMenu,
    icsCon,
    icsFooter
  },
  data () {
    return {
      curView: 'icsBase'
    }
  },
  methods: {
    getData: function (e) { this.curView = e }
  }
}
</script>
<style lang="scss" type="text/css">
$txtLight: #fff;
$txtDeep: #000;

body,
html {
  background: url('') #eef0f4;
  color: $txtDeep;
}
.part_heart {
  border-bottom: 3px solid #3bbec0;
  background-color: #fff;
}
.part_main {
  position: relative;
  width: 1200px;
  margin: 10px auto;
  border-radius: 5px;
}
.part_left {
  position: absolute;
  top: 0;
  left: 0;
  width: 144px;
  height: calc(100vh - 142px);
  overflow: auto;
}
.part_right {
  margin-left: 144px;
  height: calc(100vh - 162px);
  background-color: #fff;
  padding: 10px;
}
.part_footer {
  background-color: #3f464c;
  border-top: 3px solid #3bbec0;
  color: #fff;
}
.comTitle {
  line-height: 42px;
  font-size: 14px;
  padding: 4px 0;
}
</style>
