import hot from './hot.directive'
export default {
  install: function (Vue) {
    Vue.directive('hot', hot)
  }
}
