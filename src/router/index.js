import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name: 'home',
            components: Home
        },
        {
            path:'/contact',
            name: 'contacts',
            components: Contacts
        }
    ]
})
