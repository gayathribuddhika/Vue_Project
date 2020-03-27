<template>
<div>
  <b-card-group>
  <b-card
    
    style="max-width: 20rem;"
    img-alt="Image"
    img-top
    body-bg-variant="dark"
    body-text-variant="white"
  >
  <center><b-img :src="require('../assets/sabra.png')"></b-img></center>
    <b-card-body>
      <b-card-title><center>Staff Name</center></b-card-title>
    </b-card-body>

    <b-list-group variant="dark">
      <div>
      <b-list-group-item variant="dark" href="#">Dashboard</b-list-group-item>
      <b-list-group-item variant="dark" href="#">View Current Status</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Add New Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Delete a Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Create a Report</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Edit Profile</b-list-group-item>
      <b-list-group-item variant="dark" href="home.vue">Logout</b-list-group-item>
      </div>
    </b-list-group>
  </b-card>
  <b-card title="Dashboard">
    <br>
    
    </b-card>  
  </b-card-group>
</div>
</template>