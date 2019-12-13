<template>

<nav class = "navbar navbar-light bg-primary">
  <div class = "container-fluid">
    <div id = "app">
      <div class="row">
        <div class="col-sm-2">
          <img src = "./assets/sabra.jpg">
        </div>
        <div class="col-sm-8">
          <h1>{{ msg }}</h1>
          <h3>Faculty of Applied Sciences</h3>
          <h3>Sabaragamuwa University of sri Lanka</h3>
        </div>
        <div class="col-sm-2" style="padding-top:65px">
          <button type="button" class="btn btn-info" style="display: block; text-align:right; margin:auto;">Login</button> 
        </div>
      
      </div>
    <router-view/>
    </div> 
  </div> 

</nav> 

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:'Inventory Management System',
      button:"Login"
            

    }
    

  }
  
}
</script>


<style>


</style>