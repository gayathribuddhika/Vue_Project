<template>
  <div id="app">
    
    <router-link to = "Login">Login</router-link>
    <router-link to = "Contact">Contact</router-link>
    <router-link to = "About">About</router-link><br><br>
    <img src = "./assets/sabra.jpg">
    
    <router-view/>
    
  </div>
  
</template>

<script>
export default {
  name: 'App',
  
}
</script>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 10px;
    
}


</style>