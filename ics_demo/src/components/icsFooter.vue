<template>
  <div class="components_footer">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'icsTop',

  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<style scoped>
.components_footer {
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
}
</style>
