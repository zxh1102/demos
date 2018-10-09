<template>
  <div>
    <p class="comTitle">1.头部+头部菜单（不换行）+侧边栏</p>
    <iframe src="@/../static/iframe/body1.html" frameborder="0" width="100%" height="500px"></iframe>
    <p class="comTitle">2.头部+头部菜单（换行）+侧边栏</p>
    <iframe src="@/../static/iframe/body2.html" frameborder="0" width="100%" height="500px"></iframe>
    <p class="comTitle">3.头部+侧边栏</p>
    <iframe src="@/../static/iframe/body3.html" frameborder="0" width="100%" height="500px"></iframe>
    <p class="comTitle">4.头部</p>
    <iframe src="@/../static/iframe/body4.html" frameborder="0" width="100%" height="200px"></iframe>
    <p class="comTitle">5.头部+头部菜单（不换行）</p>
    <iframe src="@/../static/iframe/body5.html" frameborder="0" width="100%" height="200px"></iframe>
    <!-- 代码实现 -->
    <p class="comTitle">常用代码展示</p>
    <div class="mod-code">
      <p v-highlight>
        <pre>
          <code>
  &lt;!--mini顶部 start--&gt;
  &lt;div class="ics_top"&gt;
    &lt;div class="top-logo"&gt;&lt;img src="images/logo_autox24-demo.png"&gt;&lt;/div&gt;
    &lt;ul class="top-nav"&gt;
      &lt;li&gt;&lt;a href="#"&gt;首页&lt;/a&gt;&lt;/li&gt;
      &lt;li class="J_dropList"&gt;
        &lt;a href="#"&gt;营销工具&lt;i class="ics_icon ics_icon-arrowdown1"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;div class="ics_droplist ics_droplist-line" data-toggle="droplist"&gt;
          &lt;a href="#"&gt;智能展厅&lt;/a&gt;
          &lt;a href="#"&gt;经销商活动&lt;/a&gt;
          &lt;a href="#"&gt;直播&lt;/a&gt;
          &lt;a href="#"&gt;硬广&lt;/a&gt;
          &lt;a href="#"&gt;车展/单店&lt;/a&gt;
          &lt;a href="#"&gt;万里通积分&lt;/a&gt;
          &lt;i class="ics_icon ics_icon-arrowup1"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li class="J_dropList"&gt;
        &lt;a href="#"&gt;新车销售&lt;i class="ics_icon ics_icon-arrowdown1"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;div class="ics_droplist ics_droplist-line" data-toggle="droplist"&gt;
          &lt;a href="#"&gt;车商汇&lt;/a&gt;
          &lt;a href="#"&gt;到店试驾&lt;/a&gt;
          &lt;a href="#"&gt;智慧网销&lt;/a&gt;
          &lt;a href="#"&gt;智选线索&lt;/a&gt;
          &lt;a href="#"&gt;车商城&lt;/a&gt;
          &lt;i class="ics_icon ics_icon-arrowup1"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;维修保养&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;客户管理&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;智慧决策&lt;/a&gt;&lt;/li&gt;
      &lt;li class="J_dropList"&gt;
        &lt;a href="#" class="current"&gt;基础服务&lt;i class="ics_icon ics_icon-arrowdown1"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;div class="ics_droplist ics_droplist-line" data-toggle="droplist"&gt;
          &lt;a href="#"&gt;基础设置&lt;/a&gt;
          &lt;a href="#"&gt;平台活动&lt;/a&gt;
          &lt;a href="#"&gt;在线签单&lt;/a&gt;
          &lt;a href="#"&gt;店铺设置&lt;/a&gt;
          &lt;i class="ics_icon ics_icon-arrowup1"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="top-extend"&gt;
      &lt;li class="top-extend-item top-extend-item-other J_dropList"&gt;
        &lt;img src="images/user.jpg" class="top-extend-user"&gt;&lt;a href="#"&gt;&lt;span class="top-extend-txt"&gt;汽车之家&lt;/span&gt;&lt;i class="ics_icon ics_icon-arrowdown"&gt;&lt;/i&gt;&lt;/a&gt;
        &lt;div class="ics_droplist" data-toggle="droplist"&gt;
          &lt;a href="#"&gt;个人中心&lt;/a&gt;
          &lt;a href="#"&gt;安全退出&lt;/a&gt;
          &lt;i class="ics_icon ics_icon-arrowup1"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li class="top-extend-item"&gt;&lt;a href="#"&gt;&lt;i class="ics_icon ics_icon-bell"&gt;&lt;/i&gt;&lt;span class="top-extend-txt"&gt;消息&lt;/span&gt;&lt;/a&gt;&lt;em class="ics_mark"&gt;3&lt;/em&gt;&lt;/li&gt;
      &lt;li class="top-extend-item top-extend-item-more J_dropList"&gt;
        &lt;a href="#"&gt;&lt;i class="ics_icon ics_icon-cube"&gt;&lt;/i&gt;&lt;span class="top-extend-txt"&gt;更多&lt;/span&gt;&lt;/a&gt;
        &lt;div class="ics_droplist" data-toggle="droplist"&gt;
          &lt;a href="#"&gt;帮助中心&lt;/a&gt;
          &lt;a href="#"&gt;车支付钱包&lt;/a&gt;
          &lt;a href="#"&gt;i车商APP&lt;/a&gt;
          &lt;i class="ics_icon ics_icon-arrowup1"&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;!--mini顶部 end--&gt;
          </code>
        </pre>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'icsBody',
  data () {
    return {
      msg: 'icsBody'
    }
  }
}
</script>
<style>
</style>
