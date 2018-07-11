import date from './dateFormat.filter'
import number from './numberFormat.filter'
export default {
  install: function (Vue) {
    Vue.filter('date', date.format)
    Vue.filter('num', number.format)
  }
}
