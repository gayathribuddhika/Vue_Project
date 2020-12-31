import Vue from 'vue'
import Router from 'vue-router'

import Contacts from '@/components/Contacts'
import AboutUs from '@/components/AboutUs'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AdminDashboard from '@/components/AdminDashboard'
import StaffDashboard from '@/components/StaffDashboard'
import current_status from '@/components/Current_Status'
import AddRecords from '@/components/AddRecords'
import Profile from '@/components/Profile'
import ResetPassword from '@/components/ResetPassword'
import UpdateRecord from '@/components/UpdateRecord'
import Sample from '@/components/Sample'
import AddData from '@/components/AddData'
import StockDetails from '@/components/StockDetails'
import UpdateStock from '@/components/UpdateStock'
import AddStockDetails from '@/components/AddStockDetails'
import SummaryDetails from '@/components/SummaryDetails'
import Reports from '@/components/Reports'
// import Header from '@/components/Header'

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
      path: '/',
      name: "Home",
      component: Home
    },
    {
      path: '/admindashboard',
      name: "AdminDashboard",
      component: AdminDashboard
    },
    {
      path: '/staffdashboard',
      name: "StaffDashboard",
      component: StaffDashboard
    },
    {
      path: '/admindashboard/currentstatus',
      name: "Current_Status",
      component: current_status
    },
    {
      path: '/admindashboard/addrecords',
      name: "AddRecords",
      component: AddRecords
    },
    // {
    //   path: '/admindashboard/profile',
    //   name: "Profile",
    //   component: Profile
    // },
    {
      path: '/admindashboard/:id',
      name: "Profile",
      component: Profile
    },
    {
      path: '/staffdashboard/:id',
      name: "StaffProfile",
      component: Profile
    },
    {
      path: '/edit/:id',
      name: "UpdateRecord",
      component: UpdateRecord
    },
    {
      path: '/login/resetpassword',
      name: "ResetPassword",
      component: ResetPassword
    },
    {
      path: '/sample',
      name: "Sample",
      component: Sample
    },
    {
      path: '/adddata',
      name: "AddData",
      component: AddData
    },
    {
      path: '/admindashboard/stockdetails',
      name: "StockDetails",
      component: StockDetails
    },
    {
      path: '/admindashboard/stockdetails/edit-stock/:id',
      name: "edit",
      component: UpdateStock
    },
    {
      path: '/admindashboard/stockdetails/add-details',
      name: "AddStockDetails",
      component: AddStockDetails
    },
    {
      path: '/admindashboard/summarydetails',
      name: "SummaryDetails",
      component: SummaryDetails
    },
    {
      path: '/admindashboard/reports',
      name: "Reports",
      component: Reports
    }
  ]
})



