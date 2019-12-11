<template>
<nav class = "navbar navbar-default">
  <div class = "container-fluid">
    <div id = "app">
      <div class="row">
        <div class="col-sm-2">
          <img src = "./assets/sabra.jpg">
        </div>
        <div class="col-sm-10">
          <h1>{{ msg }}</h1>
          <h3>Faculty of Applied Sciences</h3>
          <h3>Sabaragamuwa University of sri Lanka</h3>
      </div>
      </div>
    </div>
    <router-view/>
  </div>  
  
</nav>  
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:'Inventory Management System'
    }
  }
  
}
</script>


<style>
#app {
  text-align: left;

}
</style>