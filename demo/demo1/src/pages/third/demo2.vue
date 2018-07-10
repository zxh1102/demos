<template>
  <section>
    <swiper>
      <template slot="content">
        <ul class="swiper-con">
          <li v-for="(item ,key ) in list" :key="key">
            <a href="javascript:;">
              <img :src="item.src" :alt="item.name">
            </a>
          </li>
        </ul>
      </template>
      <template slot="dot">
        <p class="swiper-dot" v-for="(item,key) in list" :key="key">
          <span></span>
        </p>
      </template>
      <template slot="controlPanel">
        <div class="conterl_left">向左️</div>
        <div class="conterl_right">向右</div>
      </template>
    </swiper>
  </section>
</template>

<script>
import swiper from '@/components/swiper'
export default {
  components: {
    swiper
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list.push({
      src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
      name: 'img1'
    })
    this.list.push({
      src: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
      name: 'img2'
    })
    this.list.push({
      src: 'http://p2.gexing.com/G1/M00/14/03/rBACE1aTbCCSTsY5AAEIjDXspWQ96.jpeg',
      name: 'img3'
    })
  }
}
</script>

<style>
</style>
