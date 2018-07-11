const save = function (name, x, y) {
  let data = localStorage['hot']
  if (data) {
    data = JSON.parse(data)
  } else {
    data = []
  }
  data.push({
    name,
    x,
    y
  })
  localStorage['hot'] = JSON.stringify(data)
}
export default {
  bind: function (el, binding, vnode) {
    console.log(el, binding, vnode)
    const name = binding.value.name
    // (当前虚拟元素,指令接受的参数,vnode)
    el.onclick = function (e) {
      console.log(e)
      save(name, e.clientX, e.clientY)
    }
  }
}
