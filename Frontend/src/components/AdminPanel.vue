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
      <b-list-group-item variant="dark">Dashboard</b-list-group-item>
      <b-list-group-item variant="dark" href="">Current Status</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Add New Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Delete a Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Create a Report</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Edit Profile</b-list-group-item>
      <b-list-group-item variant="dark" href="home.vue">Logout</b-list-group-item>
    </b-list-group>
    </b-card>
    
    <b-card title="Dashboard">
    <br>
      
    </b-card>    
    
  </b-card-group>
</div>
</template>

