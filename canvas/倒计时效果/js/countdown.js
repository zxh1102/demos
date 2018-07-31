// 画布常量
var WINDOW_WIDTH = 1024
var WINDOW_HEIGHT = 768
// 小球半径
var RADIUS = 8
// 小球盒子左上顶点定位
var MARGIN_TOP = 60 //上边距距离
var MARGIN_LEFT = 30 //下边距距离
// Object.defineProperty(window, "endTime", {writable: false, value: 1});
// 定义截止时间
const endTime = new Date(2018, 08, 01, 18, 47, 52)
//date(年，月，日，时，分，秒)，月数从0开始
//这个demo只能是4天内的倒计时（因为小时数是两位的）
//用date的getTime方法获取当前时间距离1970.1.1 00：00的毫秒数，算中间差值

//表示现在倒计时需要多少秒
var curShowTimeSeconds = 0

var balls = []
var colors = ['#f60', '#fff', '#000', 'yellow', 'red', 'blue', 'pink']
// 定义初始化
window.onload = function() {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')

  canvas.width = WINDOW_WIDTH
  canvas.height = WINDOW_HEIGHT

  curShowTimeSeconds = getCurrentShowTimeSeconds()

  // 制作动画的简单架构
  setInterval(function() {
    render(context)
    update()
  }, 200)
}
// 对curShowTimeSeconds的一个计
function getCurrentShowTimeSeconds() {
  // 当前的时间
  var curTime = new Date()
  // 距离目标日期的毫秒数 截止的时间-当前的时间（毫秒数）
  var ret = endTime.getTime() - curTime.getTime()
  // 除以1000：毫秒换算成秒，round转化成整数
  ret = Math.round(ret / 1000)
  // 返回 为0时表示倒计时已经结束
  return ret >= 0 ? ret : 0
}
// 更新数据结构
function update() {
  // 时间的变化
  // 下一次要显示的时间是多少
  var nestShowTimeSceonds = getCurrentShowTimeSeconds()
  // 下次显示的时分秒
  var nextHours = parseInt(nestShowTimeSceonds / 3600)
  var nextMinutes = parseInt((nestShowTimeSceonds - nextHours * 3600) / 60)
  var nextSeconds = nestShowTimeSceonds % 60
  // 当前显示的时分秒
  var curHours = parseInt(curShowTimeSeconds / 3600)
  var curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60)
  var curSeconds = curShowTimeSeconds % 60
  // 实际上只需要比较秒数
  if (nextSeconds != curSeconds) {
    // 小时
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curHours / 10))
    }
    if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
      addBalls(
        MARGIN_LEFT + 15 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curHours / 10)
      )
    }
    // 分钟
    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(
        MARGIN_LEFT + 39 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curMinutes / 10)
      )
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(
        MARGIN_LEFT + 54 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curMinutes % 10)
      )
    }
    // 秒
    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(
        MARGIN_LEFT + 78 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curSeconds / 10)
      )
    }
    if (parseInt(curSeconds % 10) != parseInt(nextSeconds % 10)) {
      addBalls(
        MARGIN_LEFT + 93 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(nextSeconds % 10)
      )
    }

    curShowTimeSeconds = getCurrentShowTimeSeconds()
  }

  updateBalls()
}
function updateBalls() {
  for (var i = 0; i < balls.length; i++) {
    ball[i].x += balls[i].vx
    ball[i].y += balls[i].vy
    ball[i].vy += balls[i].g
  }
  if (balls[i].y >= WINDOW_HEIGHT - RADIIUS) {
    balls[i].y = WINDOW_HEIGHT - RADIIUS
    balls[i].vy = -balls[i].vy * 0.75
  }
}
function addBalls(x, y, num) {
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        var aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, //4or-4
          vy: -5, //负数会有向上抛的动作
          color: colors[Math.float(Math.random() * colors.length)]
        }
      }
    }
  }
}
// 绘图当前canvas画布
function render(cxt) {
  // 画布刷新，避免后出现的画布重叠到原有的绘画
  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
  // 时间：当前倒计时的具体数据
  var hours = parseInt(curShowTimeSeconds / 3600)
  var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60)
  var senconds =
    curShowTimeSeconds %
    // renderDigit(0,0,parseInt(hours/10),cxt);
    // 因为renderDigit只能绘制一位数字，所以每次绘制一个完整的数字需要调用两次该函数

    // digit[0] - digit[9]为数字0-9；digit[10]为冒号
    // 小时
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt)
  renderDigit(
    MARGIN_LEFT + 15 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(hours % 10),
    cxt
  )

  //冒号
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt)

  // 分钟
  renderDigit(
    MARGIN_LEFT + 39 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(minutes / 10),
    cxt
  )
  renderDigit(
    MARGIN_LEFT + 54 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(minutes % 10),
    cxt
  )

  //冒号
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt)

  // 秒
  renderDigit(
    MARGIN_LEFT + 78 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(senconds / 10),
    cxt
  )
  renderDigit(
    MARGIN_LEFT + 93 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(senconds % 10),
    cxt
  )
}

// renderDigit(绘制开始位置x, 绘制开始位置y, 绘制的数字-一位数字, 上下文绘制环境)
function renderDigit(x, y, num, cxt) {
  cxt.fillStyle = 'red'
  // 遍历获取数字
  // i为行数，j为列数
  for (var i = 0; i < digit[num].length; i++) {
    // 循环绘制小球
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        // 绘制圆球
        cxt.beginPath()
        cxt.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        )
        cxt.closePath
        cxt.fill()
      } else {
      }
    }
  }
}

/*
	制作动画的一个简单架构 setInterval逐针动画,但是计算不精准因为内部知执行时间不确定
	setInterval(
		fnction(){
			render();
			update();
		},
		50
	);
*/
