import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import LayoutPlugin from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)

Vue.config.productionTip = false


new Vue({
  el:'#app',
  router,
  template: <App/>,
  components: { App }  
  
})
