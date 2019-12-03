<template>
  <div id="app">
    <img src="./assets/sabra.jpg" class="logo"><br><br>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
    width: 99%;
    height: 255px;
    background-color: #faf0e6;
    position: fixed;
    box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
    border-radius:10px;
}


</style>
