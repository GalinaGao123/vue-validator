import * as directive from './directive'

export default {
  install (Vue, options) {
    Vue.directive('validate', directive)
  }
}
