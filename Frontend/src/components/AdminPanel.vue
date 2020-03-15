<template>
<div>
  <b-card-group>
  <b-card
    style="max-width: 15rem;"
    img-alt="Image"
    img-top
    body-bg-variant="dark"
    body-text-variant="white"
  >
  <center><b-img :src="require('../assets/sabra.png')"></b-img></center>
    <b-card-body>
      <b-card-title><center>Admin Name</center></b-card-title>
    </b-card-body>

    <b-list-group variant="dark">
      <b-list-group-item variant="dark" href="#">Dashboard</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Current Status</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Add New Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Delete a Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Create a Report</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Edit Profile</b-list-group-item>
      <b-list-group-item variant="dark" href="home.vue">Logout</b-list-group-item>
    </b-list-group>
    </b-card>
    
    <b-card title="Dashboard">
      <br>
      <b-table responsive :items="items"></b-table>
    </b-card>    
    
  </b-card-group>
</div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>