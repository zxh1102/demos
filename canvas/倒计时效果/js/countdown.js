// 画布常量-初始化
var WINDOW_WIDTH
var WINDOW_HEIGHT
// 小球半径
var RADIUS
// 小球盒子左上顶点定位
var MARGIN_TOP // 上边距距离
var MARGIN_LEFT // 左边距距离

// Object.defineProperty(window, "endTime", {writable: false, value: 1});
// 定义截止时间
// const endTime = new Date(2018, 07, 02, 0, 0, 0)
// 计数器改造-时间设置为当前打开浏览器的一小时以前
var endTime = new Date()
endTime.setTime(endTime.getTime() + 60 * 60 * 1000)
// date(年，月，日，时，分，秒)，月数从0开始
// 这个demo只能是4天内的倒计时（因为小时数是两位的）
// 用date的getTime方法获取当前时间距离1970.1.1 00：00的毫秒数，算中间差值

// 表示现在倒计时需要多少秒
var curShowTimeSeconds = 0
// 声明小球数组
var balls = []
// 小球颜色盒子
var colors = [
  'cadetblue',
  'pink',
  'borwn',
  'paleturquoise',
  'papayawhip',
  'lavenderblush',
  'salmon',
  'silver',
  'aliceblue',
  'aquamarine',
  '#f60'
]
// 定义初始化
window.onload = function() {
  var canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')
  // 根据屏幕自适应画布大小设置-开始
  WINDOW_WIDTH = document.body.clientWidth
  WINDOW_HEIGHT = document.body.clientHeight
  // 期望的是时钟数字占屏幕的五分之四，所以左右两边各站十分之一
  MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10)
  // (WINDOW_WIDTH * 4) / 5 是左右数字+冒号的宽度
  // (WINDOW_WIDTH * 4) / 5 / 108 是每个小球的半径+1
  // Math.round四舍五入
  RADIUS = Math.round((WINDOW_WIDTH * 4) / 5 / 108) - 1

  MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5)
  // 根据屏幕自适应画布大小设置-结束

  canvas.width = WINDOW_WIDTH
  canvas.height = WINDOW_HEIGHT

  curShowTimeSeconds = getCurrentShowTimeSeconds()

  // 制作动画的简单架构
  setInterval(function() {
    render(context)
    update()
  }, 100)
  console.log(WINDOW_WIDTH)
  console.log(WINDOW_HEIGHT)
  console.log(MARGIN_LEFT)
  console.log(MARGIN_TOP)
  console.log(RADIUS)
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
  // 判断数据更新的话实际上只需要比较秒数
  // 因为小球的动画，所以需要判断六个数字的变化
  if (nextSeconds != curSeconds) {
    // 小时
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      // addBalls(小球的位置x，小球的位置y，原数字))
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
// 对已有的小球进行更新
function updateBalls() {
  for (var i = 0; i < balls.length; i++) {
    // 物理部分 绘制抛物线
    balls[i].x += balls[i].vx
    balls[i].y += balls[i].vy
    balls[i].vy += balls[i].g
  }
  // 对画布下边缘进行碰撞检测
  // balls.y >= WINDOW_HEIGHT - RADIUS 表示已经触及画布的底部边缘

  for (var i = 0; i < balls.length; i++) {
    if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
      balls[i].y = WINDOW_HEIGHT - RADIUS
      // 0.75 模拟空气阻力，摩擦系数
      balls[i].vy = -balls[i].vy * 0.75
    }
  }

  // 记录还有多少个小球在画布中
  var cnt = 0
  // 检测小球是否超出画布
  for (var i = 0; i < balls.length; i++) {
    // 小球的右边缘大于0（小球的右边缘=小球的中心店位置+小球半径）&&不越过整个画面 ，小球左边缘小于画面长度
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
      balls[cnt++] = balls[i]
    }
  }
  // while (balls.length > cnt) {
  // 长度最多为300
  while (balls.length > Math.min(1000, cnt)) {
    // pop() 方法用于删除并返回数组的最后一个元素。
    balls.pop()
  }
}
// 新增彩色小球
function addBalls(x, y, num) {
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        // add
        var aBall = {
          // 小球x坐标
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          // 小球y坐标
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          // 小球半径
          // RADIUS
          // 小球加速度（重力加速度）
          // 1.5-2.5
          g: 2 + Math.random(),
          // x轴方向速度
          // 随机-4或者4
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          // y轴方向速度
          // 负数会有向上抛的动作
          vy: -5,
          // 随机取颜色
          color: colors[Math.floor(Math.random() * colors.length)]
        }
        balls.push(aBall)
      }
    }
  }
}
// 绘图当前canvas画布
function render(cxt) {
  // 绘制时间
  // 画布刷新，避免后出现的画布重叠到原有的绘画
  // cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT)
  // .canvas获取当前cxt上下文绘图环境属于哪个画布
  cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height)
  // 时间：当前倒计时的具体数据
  var hours = parseInt(curShowTimeSeconds / 3600)
  var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60)
  var senconds = curShowTimeSeconds % 60

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

  // 遍历小球进行绘制
  for (var i = 0; i < balls.length; i++) {
    cxt.fillStyle = balls[i].colors
    cxt.beginPath()
    cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true)
    cxt.closePath()
    cxt.fillStyle = balls[i].color
    cxt.fill()
  }
}

// renderDigit(绘制开始位置x, 绘制开始位置y, 绘制的数字-一位数字, 上下文绘制环境)
function renderDigit(x, y, num, cxt) {
  cxt.fillStyle = 'grey'
  // 遍历获取数字
  // i为行数，j为列数
  for (var i = 0; i < digit[num].length; i++) {
    // 循环绘制小球
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        // // 球形
        // cxt.beginPath()
        // cxt.arc(
        //   x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
        //   y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
        //   RADIUS,
        //   0,
        //   2 * Math.PI
        // )
        // // 填充颜色
        // cxt.fillStyle = 'grey'
        // cxt.fill()
        // cxt.closePath

        // 矩形
        cxt.beginPath()
        // fillRect(x,y,widht,height)
        cxt.fillRect(
          x + j * 2 * (RADIUS + 1),
          y + i * 2 * (RADIUS + 1),
          2 * RADIUS + 2,
          2 * RADIUS + 2
        )
        // 填充颜色
        cxt.fill()
        cxt.closePath
      }
    }
  }
}
