<template>
  
  <div id = 'app'>
    <Navbar/>
    <Nav/>
    <Home/>
    <Footer/>
    
  </div> 

</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'


export default {
  name: 'App',
  components:{
    Navbar,
    Nav,
    Home,
    Footer
    
  }
  
  
}
</script>

<style>

</style>
