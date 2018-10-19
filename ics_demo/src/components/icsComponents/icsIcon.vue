<template>
  <div>
    <p class="comTitle">图片图标</p>
    <ul class="fn-clear">
      <li v-for="(item,index) in listPic" :key="'listPic'+index">
        <i :class="item.class" class="ics_icon"></i>
      </li>
    </ul>

    <p class="comTitle">大图标 102*102</p>
    <ul class="fn-clear listL">
      <li v-for="(item,index) in listL" :key="'listL'+index">
        <i :class="item.class" class="ics_icon-largest inlineblock"></i>
      </li>
    </ul>

    <p class="comTitle">base64</p>
    <ul class="fn-clear">
      <li v-for="(item,index) in listBase" :key="'list'+index">
        <i :class="item.class" class="ics_icon_v1"></i>
      </li>
    </ul>

    <p class="comTitle">12*12</p>
    <ul class="fn-clear">
      <li v-for="(item,index) in list12" :key="'list12'+index">
        <i :class="item.class" class="ics_icon_v1 ics_icon12_v1"></i>
      </li>
    </ul>
    <p class="comTitle">14*14</p>
    <ul class="fn-clear">
      <li v-for="(item,index) in list14" :key="'list14'+index">
        <i :class="item.class" class="ics_icon_v1 ics_icon14_v1"></i>
      </li>
    </ul>
    <p class="comTitle">16*16</p>
    <ul class="fn-clear">
      <li v-for="(item,index) in list16" :key="'list16'+index">
        <i :class="item.class" class="ics_icon_v1 ics_icon16_v1"></i>
      </li>
    </ul>
    <p class="comTitle">24*24</p>
    <ul class="fn-clear">
      <li v-for="(item,index) in list24" :key="'list24'+index">
        <i :class="item.class" class="ics_icon_v1 ics_icon24_v1"></i>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'icsIcon',
  data () {
    return {
      msg: 'icsIcon',
      listPic: [
        {
          class: 'icon_sequence'
        }, {
          class: 'ics_icon-arrowup'
        }, {
          class: 'ics_icon-arrowdown'
        }, {
          class: 'ics_icon-arrowleft'
        }, {
          class: 'ics_icon-arrowright'
        }, {
          class: 'ics_icon-close'
        }, {
          class: 'ics_icon-plus1'
        }, {
          class: 'ics_icon-calendar '
        }, {
          class: 'ics_icon-calendar1'
        }, {
          class: 'ics_icon-bell'
        }, {
          class: 'ics_icon-wallet'
        }, {
          class: 'ics_icon-phone'
        }, {
          class: 'ics_icon-question'
        }, {
          class: 'ics_icon-arrowright2'
        }, {
          class: 'ics_icon-arrowleft2'
        }, {
          class: 'ics_icon-screw'
        }, {
          class: 'ics_icon-plus'
        }, {
          class: 'ics_icon-refresh'
        }, {
          class: 'ics_icon-person1'
        }, {
          class: 'ics_icon-exit'
        }, {
          class: 'ics_icon-cart'
        }, {
          class: 'ics_icon-cart-disabled'
        }, {
          class: 'ics_icon-share'
        }, {
          class: 'ics_icon-xx'
        }, {
          class: 'ics_icon-alert1'
        }, {
          class: 'ics_icon-arrowup2'
        }, {
          class: 'ics_icon-arrowdown2'
        }, {
          class: 'ics_icon-wen'
        }, {
          class: 'ics_icon-recycle'
        }, {
          class: 'ics_icon-i'
        }, {
          class: 'ics_icon-edit'
        }, {
          class: 'ics_icon-arrowdown1'
        }, {
          class: 'ics_icon-cube'
        }, {
          class: 'ics_icon-edit1'
        }, {
          class: 'ics_icon-ihighlight'
        }, {
          class: 'ics_icon-save'
        }, {
          class: 'ics_icon-switch'
        }, {
          class: 'ics_icon-arrowup3'
        }, {
          class: 'ics_icon-arrowdown3'
        }, {
          class: 'ics_icon-arrowup3 disabled'
        }, {
          class: 'ics_icon-arrowdown3 disabled'
        }, {
          class: 'ics_icon-arrowup1'
        }, {
          class: 'ics_icon-arrowleft1'
        }, {
          class: 'ics_icon-scanister'
        }, {
          class: 'ics_icon-person'
        }, {
          class: 'ics_icon-signal'
        }, {
          class: 'ics_icon-x'
        }, {
          class: 'ics_icon-deskcalendar'
        }, {
          class: 'ics_icon-alert'
        }, {
          class: 'ics_icon-fail'
        }, {
          class: 'ics_icon-success'
        }, {
          class: 'ics_icon-dot'
        }, {
          class: 'ics_icon-close1'
        }, {
          class: 'ics_icon-logo-tg'
        }, {
          class: 'ics_icon-arrowright3'
        }, {
          class: 'ics_icon-arrowright4'
        }, {
          class: 'ics_icon-arrowup1'
        }, {
          class: 'ics_icon-close-blue'
        }
      ],
      listL: [
        {
          class: 'ics_icon-shop'
        }, {
          class: 'ics_icon-user'
        }, {
          class: 'ics_icon-order'
        }, {
          class: 'ics_icon-car'
        }, {
          class: 'ics_icon-handshake'
        }
      ],
      listBase: [
        {
          class: 'icon-base64-alert'
        }, {
          class: 'icon-base64-search'
        }, {
          class: 'icon-base64-refresh'
        }, {
          class: 'icon-base64-success-green'
        }
      ],
      list12: [
        {
          class: 'icon12-arrowup'
        }, {
          class: 'icon12-arrowdown'
        }, {
          class: 'icon12-blueclose'
        }, {
          class: 'icon12-clear'
        }
      ],
      list14: [
        {
          class: 'icon14-order'
        }, {
          class: 'icon14-person'
        }
      ],
      list16: [
        {
          class: 'icon16-question'
        }, {
          class: 'icon16-i'
        }, {
          class: 'icon16-checkMark'
        }, {
          class: 'icon16-magnify'
        }, {
          class: 'icon16-x'
        }, {
          class: 'icon16-refresh'
        }, {
          class: 'icon16-edit'
        }, {
          class: 'icon16-recycle'
        }, {
          class: 'icon16-recycle-grey'
        }, {
          class: 'icon16-recycle-blue'
        }, {
          class: 'icon16-person'
        }
      ],
      list24: [
        {
          class: 'icon24-alert'
        }, {
          class: 'icon24-fail'
        }, {
          class: 'icon24-fail-grey'
        }, {
          class: 'icon24-success'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  background-color: #000;
  padding: 20px;
  li {
    position: relative;
    float: left;
    margin: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
}
.listL {
  li {
    width: 120px;
    height: 120px;
    line-height: 120px;
  }
}
</style>
