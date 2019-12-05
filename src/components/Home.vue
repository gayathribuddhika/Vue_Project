<template>
  <div class="home">
    <img src="./assets/sabra.jpg" class="logo"><br><br><br><br>
    <h1>{{ msg }}</h1>
    <h1>Faculty of Applied Sciences</h1>
    <h2>Inventory Management System</h2>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Sabaragamuwa University of Sri Lanka'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}


</style>
