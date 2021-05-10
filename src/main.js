import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'

// Global CSS
import '@/assets/scss/base/base.scss'

import router from './router'

Vue.config.productionTip = false

Vue.use(PortalVue)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
