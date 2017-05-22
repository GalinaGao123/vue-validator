import Vue from 'vue'
import App from './App'
import VueValidator from './src'

Vue.use(VueValidator)

new Vue({
  el: '#app',
  render: h => h(App)
})