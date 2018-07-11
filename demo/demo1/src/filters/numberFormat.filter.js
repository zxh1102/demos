const format = function (value, options) {
  let fix = 2
  if (options && options.fix) {
    fix = options.fix
  }
  return value.toFixed(fix)
  // js自带函数-保留两位小数
}
export default { format }
