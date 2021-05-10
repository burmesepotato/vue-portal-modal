import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'

// Global CSS
import '@/assets/scss/base/base.scss'

Vue.config.productionTip = false

Vue.use([PortalVue])

new Vue({
  render: (h) => h(App),
}).$mount('#app')
