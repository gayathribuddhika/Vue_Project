import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import LayoutPlugin from 'bootstrap-vue'
import NavbarPlugin from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
