<template>
  <div>
    <p class="comTitle">1.单行头部</p>
    <iframe src="@/../static/iframe/body1.html" frameborder="0" width="100%" height="500px"></iframe>
    <p class="comTitle">2.多行头部</p>
    <iframe src="@/../static/iframe/body2.html" frameborder="0" width="100%" height="500px"></iframe>
    <p class="comTitle">3.简单头部</p>
    <iframe src="@/../static/iframe/body3.html" frameborder="0" width="100%" height="500px"></iframe>
    <p class="comTitle">4.无侧边栏</p>
    <iframe src="@/../static/iframe/body4.html" frameborder="0" width="100%" height="200px"></iframe>
    <p class="comTitle">5.集团版</p>
    <iframe src="@/../static/iframe/body5.html" frameborder="0" width="100%" height="200px"></iframe>
    <!-- 代码实现 -->
    <p>代码实现</p>
    <div class="mod-code">
      <pre class="prettyprint linenums">
      <ol class="linenums">
        <li class="L0"><span class="com">&lt;!--标题 start--&gt;</span></li>
        <li class="L1"><span class="pln">&nbsp;</span></li>
        <li class="L2">
          <span class="tag">&lt;div</span>
          <span class="pln"> </span>
          <span class="atn">class</span>
          <span class="pun">=</span>
          <span class="atv">"ics_crumbs fn-clear"</span>
          <span class="tag">&gt;&lt;a</span>
          <span class="pln"> </span>
          <span class="atn">href</span>
          <span class="pun">=</span>
          <span class="atv">"#"</span>
          <span class="tag">&gt;</span>
          <span class="pln">一级导航</span>
          <span class="tag">&lt;/a&gt;</span>
          <span class="pln">&amp;nbsp;&amp;nbsp;&amp;frasl;&amp;nbsp; 二级导航</span>
          <span class="tag">&lt;a</span><span class="pln"> </span>
          <span class="atn">class</span>
          <span class="pun">=</span>
          <span class="atv">"ics_btn ics_btn-min ics_btn-widauto fn-right mt10"</span>
          <span class="pln"> </span>
          <span class="atn">href</span>
          <span class="pun">=</span>
          <span class="atv">"#"</span>
          <span class="tag">&gt;</span>
          <span class="pln">返回</span>
          <span class="tag">&lt;/a&gt;&lt;/div&gt;</span>
          </li>
          <li class="L3"><span class="pln">&nbsp;</span></li>
          <li class="L4"><span class="com">&lt;!--标题 end--&gt;</span></li><li class="L5"><span class="pln">&nbsp;</span></li>
        </ol>
      </pre>
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
