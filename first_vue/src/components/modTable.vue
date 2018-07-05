<template>
<table>
<tbody>
  <tr v-for="(item, index) in items" :key="index">
    <td>{{ item.name }}</td>
    <td>{{ item.age }}</td>
  </tr>
</tbody>
</table>
</template>
<script>
export default {
  name: 'modTable',
  data: function () {
    return {
      items: [
        {name: 'jack', age: '2'},
        {name: 'marry', age: '3'},
        {name: 'angel', age: '4'},
        {name: 'kitty', age: '5'},
        {name: 'max', age: '6'},
        {name: 'black', age: '7'},
        {name: 'juffey', age: '9'}
      ]
    }
  }
  // methods: {

  // }
}
</script>
<style scoped>
  table{}
</style>
