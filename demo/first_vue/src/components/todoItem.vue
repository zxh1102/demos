<template>
  <section>
    <li>
      {{title}}
      <button @click="$emit('remove')">移除</button>
    </li>
  </section>
</template>

<script>
export default {
  name: 'todoItem',
  props: ['title']
}
</script>

<style>
</style>
