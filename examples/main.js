import Vue from 'vue'
import App from './App.vue'

import dywUI from '../packages'

Vue.use(dywUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
