<template>
  <div>
    <table v-for="(i,key) in list1" :key="'tableL'+key" :class="i.class">
      <caption>表格 {{key}}</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>厂商</th>
          <th>店铺</th>
          <th>销量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="'table'+index">
          <td>{{item.id}}</td>
          <td>{{item.dealer}}</td>
          <td>{{item.shop}}</td>
          <td>{{item.count}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <table class="ics_table_v1">
        <caption>表头固定 内容滚动</caption>
        <thead>
          <tr>
            <th width="25%">ID</th>
            <th width="25%">厂商</th>
            <th width="25%">店铺</th>
            <th width="25%">销量</th>
          </tr>
        </thead>
      </table>
      <div class="ics_table_v1-box" id="scrollTable">
        <table class="ics_table_v1">
          <tbody>
            <tr v-for="(item,index) in list" :key="'table'+index">
              <td width="25%">{{item.id}}</td>
              <td width="25%">{{item.dealer}}</td>
              <td width="25%">{{item.shop}}</td>
              <td width="25%">{{item.count}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
// import mCustomScrollbar from 'mCustomScrollbar'
export default {
  name: 'icsTable',
  data () {
    return {
      list1: [
        { class: 'ics_dataTable_v1' },
        { class: 'ics_table_v1 ' },
        { class: 'ics_table_v1 ics_table_v1-noborder' },
        { class: 'ics_table_v1 ics_table_v1-simple' }
      ],
      list: [
        {
          id: '1',
          dealer: '经销商1',
          shop: '店铺1',
          count: '1200'
        }, {
          id: '2',
          dealer: '经销商2',
          shop: '店铺2',
          count: '1200'
        }, {
          id: '2',
          dealer: '经销商2',
          shop: '店铺2',
          count: '1200'
        }, {
          id: '2',
          dealer: '经销商2',
          shop: '店铺2',
          count: '1200'
        }, {
          id: '2',
          dealer: '经销商2',
          shop: '店铺2',
          count: '1200'
        }, {
          id: '2',
          dealer: '经销商2',
          shop: '店铺2',
          count: '1200'
        }, {
          id: '2',
          dealer: '经销商2',
          shop: '店铺2',
          count: '1200'
        }]
    }
  },
  mounted () {
    this.scroll()
  },
  methods: {
    scroll () {
      // mCustomScrollbar()
      // $('#scrollTable').mCustomScrollbar({
      //   setHeight: '100px'
      // })
      $('#scrollTable').css({
        'height': '100px',
        'overflow': 'auto'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
caption {
  margin: 30px 0;
  font-size: 20px;
}
</style>
