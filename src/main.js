import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import LayoutPlugin from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Contacts from './components/Contacts'
import AboutUs from './components/AboutUs'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)

const routes = [
  {
    path:'/contact',
    components: Contacts
  },
  {
    path:'/about',
    components: AboutUs
  }
];
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el:'#app',
  router,
  render:h => h(App)
})
