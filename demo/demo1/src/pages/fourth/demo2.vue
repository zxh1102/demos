<template>
  <section>
    <!-- .stop修饰符 -->
    <div v-hot.stop.x="{name:'div'}"></div>
    <br>
    <div v-hot.stop.x="{name:'span'}"></div>
  </section>
</template>

<script>
export default {

}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

div {
  width: 100%;
  height: 300px;
  background: pink;
}
</style>
