<template>
  
  <div id ="app">
    <Navbar/>
    <Nav/>
    <Form/>
    <Footer/>
    <router-view/>
  </div> 

</template>

<script>
import Navbar from './components/Navbar.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'


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


