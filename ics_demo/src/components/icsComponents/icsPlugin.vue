<template>
  <div>
    <p class="comTitle">插件的引用及使用</p>
    <p v-highlight>
      <pre>
          <code>
    &lt;!-- 时间插件 -->
    &lt;link rel="stylesheet" href="./css/datepicker1.0.css">
    &lt;script src="./js/underscore.js">&lt;/script>
    &lt;script src="./js/date-picker-range-1.0.7w1.js">&lt;/script>
    日期 -- 设置了范围场景：
    &lt;input id="date1" class="date-input" type="text" />
    &lt;p>设置日期范围&lt;/p>
    &lt;input type="text" id="days" name="days" value=" -7" />
    &lt;input type="button"  name="addDays" value="设置日期" onclick="addDays()" />
    &lt;script type='text/javascript'>
        var date1 = null;
        function initDate1() {
            date1 = datePickerRange({
                selectionMode: 'day',
                inputEl: '#date1',
                onSelect: function (data) {
                    console.log(data);
                    var mode = data.mode;
                    var start = data.start;
                    var end = data.end;

                    var startText = start.year + '-' + start.month + '-' + start.day;
                    var endText = end.year + '-' + end.month + '-' + end.day;;
                    $("#date1").val(startText + ' 至 ' + endText);
                }
            });
            return date1;
        }
        // 添加日期
        function addDays() {
            var days = $('#days').val();
            date1.setRange(days);
            var data = date1.getRange();

            var mode = data.mode;
            var start = data.start;
            var end = data.end;

            var startText = start.year + '-' + start.month + '-' + start.day;
            var endText = end.year + '-' + end.month + '-' + end.day;;
            $("#date1").val(startText + ' 至 ' + endText);
        }
        $(function () {
            $("#btnOpen").on('click', function () {
                // data('_input_type_') == 'datepackinput'
                if (!date1) {
                    date1 = initDate1();
                }
                date1.open();
            })
            if (!date1) {
                date1 = initDate1();
            }
        });

    &lt;/script>
    &lt;!-- 锁定滚动条 -->
    &lt;script src="./js/scrollfix.js">&lt;/script>

    &lt;!-- 锁定滚动 -->
    &lt;script src="./js/scrollfix.js">&lt;/script>

    &lt;!-- 锁定滚动 -->
    &lt;script src="./js/jquery.lockScroll.min.js">&lt;/script>

    &lt;!-- 滚动条 -->
    &lt;link rel="stylesheet" href="./css/jquery.mCustomScrollbar.min.css">
    &lt;script src="./js/jquery.mCustomScrollbar.min.js">&lt;/script>

    &lt;!-- 颜色渐变交互 -->
    &lt;script src="./js/jquery.color-2.1.2.min.js">&lt;/script>

    &lt;!-- 百度图表插件echarts -->
    &lt;script src="./js/echarts.common.min.js">&lt;/script>

    &lt;!-- 百度图表插件echarts -->
    &lt;script src="./js/excanvas.compiled.js">&lt;/script>

    &lt;!-- 通用弹窗控件 -->
    &lt;link rel="stylesheet" href="./css/dialog.css">
    &lt;script src="./js/dialog.js">&lt;/script>
          </code>
      </pre>
    </p>
  </div>
</template>
<script>
export default {
  name: 'icsPlugin',
  data () {
    return {
      msg: 'icsPlugin'
    }
  }
}
</script>
<style>
</style>
