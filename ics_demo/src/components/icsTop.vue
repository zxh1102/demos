<template>
  <div class="components_top">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'icsTop',

  data () {
    return {
      msg: '模板'
    }
  }
}
</script>

<style scoped>
h3 {
  height: 60px;
  line-height: 60px;
  padding: 10px 60px;
  font-size: 20px;
  border-bottom: 1px solid transparent;
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0.25); */
}
</style>
