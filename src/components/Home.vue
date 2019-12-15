<template>
  <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="1">
        <label :for="Username"> <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="5">
        <b-form-input :id="`type-${type}`" :type="type" placeholder="Enter your username here"></b-form-input>
      </b-col>
    </b-row><br>
    <b-button type="submit" variant="primary">Login</b-button>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        types: [
          'Username',
          'password'
          
        ]
      }
    }
  }
</script>


<style scoped>

</style>
