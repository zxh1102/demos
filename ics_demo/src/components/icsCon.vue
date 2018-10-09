<template>
  <div>
    <div class="components_con">
      <div :is="curViewName"></div>
    </div>
  </div>
</template>

<script>

// 导入子组件
import icsBody from '@/components/icsComponents/icsBody'
import icsPlugin from '@/components/icsComponents/icsPlugin'
import icsBase from '@/components/icsComponents/icsBase'
import icsTop from '@/components/icsComponents/icsTop'
import icsNav from '@/components/icsComponents/icsNav'
import icsMenu from '@/components/icsComponents/icsMenu'
import icsCrumbs from '@/components/icsComponents/icsCrumbs'
import icsForm from '@/components/icsComponents/icsForm'
import icsTable from '@/components/icsComponents/icsTable'
import icsList from '@/components/icsComponents/icsList'
import icsIcon from '@/components/icsComponents/icsIcon'
import icsBtn from '@/components/icsComponents/icsBtn'
import icsTitle from '@/components/icsComponents/icsTitle'
import icsTab from '@/components/icsComponents/icsTab'
import icsPage from '@/components/icsComponents/icsPage'
import icsTips from '@/components/icsComponents/icsTips'
import icsFocus from '@/components/icsComponents/icsFocus'
import icsLayer from '@/components/icsComponents/icsLayer'
import icsDemo1 from '@/components/icsComponents/icsDemo1'

export default {
  name: 'icsCon',
  props: ['curViewName'],
  components: {
    icsBase,
    icsPlugin,
    icsBody,
    icsTop,
    icsNav,
    icsMenu,
    icsCrumbs,
    icsForm,
    icsTable,
    icsList,
    icsIcon,
    icsBtn,
    icsTitle,
    icsTab,
    icsPage,
    icsTips,
    icsFocus,
    icsLayer,
    icsDemo1
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.components_con {
  height: 100%;
  overflow: auto;
}
</style>
