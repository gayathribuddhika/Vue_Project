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
            <b-list-group-item variant="dark" to="StaffDashboard/currentstatus">
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
       <div>
          <b-card-group deck>
            <b-card bg-variant="primary" text-variant="white" header="Total Items" class="text-center">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
            <b-card
              bg-variant="secondary"
              text-variant="white"
              header="Total Categories"
              class="text-center"
            >
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="success" text-variant="white" header="Total Stock" class="text-center">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
          </b-card-group>
        </div>

        <div class="mt-3">
          <b-card-group deck>
            <b-card bg-variant="warning" header="Light" class="text-center">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card bg-variant="danger" header="Dark" text-variant="white" class="text-center">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>

            <b-card header="info" class="text-center" bg-variant="info">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>