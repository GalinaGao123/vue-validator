import * as directive from './directive'

export default {
  install (Vue) {
    Vue.directive('validate', directive)
  }
}
