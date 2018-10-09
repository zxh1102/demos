<template>
  <div>
    <p class="comTitle">css/js</p>
    <p v-highlight>
      <pre>
          <code>
  &lt;!--head-->
  &lt;meta charset="UTF-8">
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  &lt;meta name="renderer" content="webkit">
          </code>
      </pre>
    </p>
    <p v-highlight>
      <pre>
          <code>
  &lt;!--css文件-->
  &lt;!-- 第一版 -->
  &lt;link href="https://x.autoimg.cn/dealer/ics/20180906A/Content/frame.css?version=1201" rel="stylesheet" />
  &lt;link href="https://x.autoimg.cn/dealer/ics/20180906A/Content/sundry.css?version=1201" rel="stylesheet" />
  &lt;script src="https://x.autoimg.cn/bi/dealer/ahas_head.min.js?v=20170720">&lt;/script>
          </code>
      </pre>
    </p>
    <p v-highlight>
      <pre>
          <code>
  &lt;!-- 第二版 -->
  &lt;link rel="stylesheet" href="css/base.min.css" />
  &lt;link rel="stylesheet" href="css/common.min.css" />
  &lt;link rel="stylesheet" href="css/blue_skin.min.css" />
          </code>
      </pre>
    </p>
    <p v-highlight>
      <pre>
          <code>
  &lt;!-- 第三版 -->
  &lt;link rel="stylesheet" href="css/base.min.css" />
  &lt;link rel="stylesheet" href="css/common_new.min.css" />
  &lt;link rel="stylesheet" href="css/blue_skin.min.css" />
          </code>
      </pre>
    </p>
    <p v-highlight>
      <pre>
          <code>
  &lt;!-- s服务器地址 -->
  &lt;link rel="stylesheet" href="https://s.autoimg.cn/dealer/pc/ics/css/base.min.css" />
  &lt;link rel="stylesheet" href="https://s.autoimg.cn/dealer/pc/ics/css/common.min.css" />
  &lt;link rel="stylesheet" href="https://s.autoimg.cn/dealer/pc/ics/css/common_new.min.css" />
  &lt;link rel="stylesheet" href="https://s.autoimg.cn/dealer/pc/ics/css/blue_skin.min.css" />
          </code>
      </pre>
    </p>
    <p v-highlight>
      <pre>
          <code>
    &lt;!--js文件-->
    &lt;!--jquery-->
    &lt;script src="./js/jquery.1.11.0.min.js">&lt;/script>
    &lt;!--基础交互（包含：侧边栏选择 tab切换 导航栏下拉菜单 焦点图 模拟下拉菜单）-->
    &lt;script src="./js/common.js">&lt;/script>
    &lt;!--集团版需要以用的简版基础交互-->
    &lt;script src="./js/common_groupCompanies.js">&lt;/script>
          </code>
      </pre>
    </p>
  </div>
</template>
<script>
export default {
  name: 'icsBase',
  data () {
    return {
      msg: 'icsBase'
    }
  }
}
</script>
<style>
</style>
