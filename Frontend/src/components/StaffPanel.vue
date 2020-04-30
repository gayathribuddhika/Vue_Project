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
        <center>
          <b-img :src="require('../assets/proimage.png')"></b-img>
        </center>
        <b-card-body>
          <b-card-title>
            <center>Staff Name</center>
          </b-card-title>
        </b-card-body>

        <b-list-group variant="dark">
          <div>
            <b-list-group-item variant="dark">Dashboard</b-list-group-item>
            <b-list-group-item variant="dark" to="staffpanel/currentstatus">
              Current Status
            </b-list-group-item>
            <b-list-group-item variant="dark">
              Current Details-Summary Report
            </b-list-group-item>
            
            <b-list-group-item variant="dark">Create a Report</b-list-group-item>
            <b-list-group-item variant="dark">Edit Profile</b-list-group-item>
            <b-list-group-item variant="dark" to="login">Logout</b-list-group-item>
          </div>
        </b-list-group>
      </b-card>
      <b-card title="Dashboard">
        <br />
      </b-card>
    </b-card-group>
  </div>
</template>