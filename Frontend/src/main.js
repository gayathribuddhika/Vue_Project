import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import LayoutPlugin from 'bootstrap-vue'
import NavbarPlugin from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import BootstrapVueIcons from 'bootstrap-vue'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSimpleAlert from'vue-simple-alert'


import BSidebar from 'bootstrap-vue'
Vue.component('b-sidebar', BSidebar)

import SidebarPlugin from 'bootstrap-vue'
Vue.use(SidebarPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faFacebook)
library.add(faTwitter)
library.add(faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(NavbarPlugin)
Vue.use(Vuelidate)
Vue.use(BootstrapVueIcons)
Vue.use(VueSimpleAlert)


/*import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)*/


new Vue({
  //el: '#app',
  router,
  render:h => h(App),
  /*components: { App },
  template: '<App/>'*/
}).$mount('#app')
