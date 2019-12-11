<template>
<nav class = "navbar navbar-default">
  <div class = "container-fluid">
    <div class = "navbar-header">
      <h3>LMS</h3>
    </div>
  
    <ul class = nav navbar-nav>
      <li><router-link to = "Home">Home</router-link></li>
      <li><router-link to = "Login">Login</router-link></li>
      <li><router-link to = "Contact">Contact</router-link></li>
      <li><router-link to = "About">About</router-link></li>
    </ul><br><br>
    <div id = "app">
    <img src = "./assets/sabra.jpg">
    <div>
    <router-view/>
  </div>  
  
</nav>  
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
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
    
}


</style>