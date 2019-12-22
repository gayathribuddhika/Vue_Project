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
    { path: '/', component: App }
    
  ]
});

new Vue({
  router,
  template:`
  <div>
    <nav class="navbar navbar-toggleable-lg navbar-light bg-faded">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view class="view"></router-view>
  </div>
`
  
  
}).$mount('#app')
