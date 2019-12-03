<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Faculty of Applied Sciences</h1>
    <h2>Inventory Management System</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
