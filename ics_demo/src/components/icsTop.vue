<template>
  <div>
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
  color: #2c3e50;
  background-color: #fff;
  border-bottom: 1px solid #666;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
}
</style>
