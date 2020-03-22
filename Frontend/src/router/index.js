import Vue from 'vue'
import Router from 'vue-router'

import Contacts from '@/components/Contacts'
import AboutUs from '@/components/AboutUs'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AdminPanel from '@/components/AdminPanel'
import StaffPanel from '@/components/StaffPanel'
import Current_Status from '@components/Current_Status'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:"Home",
      component: Home
    },
    {
      path:'/adminpanel',
      name:"AdminPanel",
      component: AdminPanel
    },
    {
      path:'/staffpanel',
      name:"StaffPanel",
      component: StaffPanel
    },
    {
      path:'/currentststus',
      name:"CurrentStatus",
      component: Current_Status
    }
  ]
})
