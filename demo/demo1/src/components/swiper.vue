<template>
  <section>
    <div class="swiper-content">
      <div class="content-container">
        <!-- 插槽，被外部的部分替代 -->
        <slot name="content"></slot>
        <slot name="dot"></slot>
        <slot name="controlPanel"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.swiper-content {
}
.content-container {
}
</style>
