<template>
  
  <div id ="app">
    <Navbar/>
    <Nav/>
    <router-view/>
    <Form/>
    <Footer/>
    
  </div> 

</template>

<script>

import Nav from '@/components/Nav.vue'
import Navbar from '@/components/Navbar.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components:{
    Navbar,
    Nav,
    Form,
    Footer
  }
  
}
</script>


