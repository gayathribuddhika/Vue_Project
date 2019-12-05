import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/Contact'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'contact',
      component: Contact
    }
  ]
})
