<template>
  <nav class = "navbar navbar-light bg-primary">
    <div class = "container-fluid">
      
        <div class="row">
          <div class="col-sm-2">
            <img src = "./assets/sabra.png">
          </div>
          <div class="col-sm-10">
            <h1>{{ msg }}</h1>
            <h2>Faculty of Applied Sciences</h2>
            <h3>Sabaragamuwa University of sri Lanka</h3>
          </div>
          
      
        </div>
      <router-view/>
      </div> 
     
  </nav> 

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Inventory Management System'
    }
  }
}
</script>

<style>

</style>
