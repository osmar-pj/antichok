import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
