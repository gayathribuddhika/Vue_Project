import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import LayoutPlugin from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/', 
      component: App 
    }
    
  ]
});

new Vue({
  router,
  template:`
  <div>
    
    <router-view class="view"></router-view>
  </div>
`
  
  
}).$mount('#app')
