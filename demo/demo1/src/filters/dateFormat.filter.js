const format = function (value) {
  if (typeof value !== 'object') {
    return 'error'
  }
  return value.getTime()
  // js自带函数，返回从1970年到现在的毫秒数
}
export default { format }
