import Vue from 'vue'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
// @ is the path to `./src` folder
import App from '@/components/App'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

new Vue({
  el: '#app',
  render: h => h(App),
})
