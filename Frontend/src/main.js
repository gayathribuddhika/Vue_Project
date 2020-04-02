import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import LayoutPlugin from 'bootstrap-vue'
import NavbarPlugin from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import BootstrapVueIcons from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebook)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(Vuelidate)
Vue.use(BootstrapVueIcons)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
