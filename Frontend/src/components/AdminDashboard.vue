<template>
  <div>
    <b-card-group>
      <b-card
        style="max-width: 18rem;"
        img-alt="Image"
        img-top
        body-bg-variant="success"
        body-text-variant="white"
      >
        <center>
          <b-img :src="require('../assets/proimage.png')"></b-img>
        </center>
        <center>
        <b-card-body>
          <b-card-title>
            Admin Name
          </b-card-title>
          <p><router-link to= "admindashboard/profile">view profile</router-link></p>
        </b-card-body>
        </center>
        <b-list-group variant="dark">
          <div>
            <b-list-group-item variant="dark" active>Dashboard</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/currentstatus">Current Details - Items</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/summarydetails">Current Details - Summary </b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/addrecords" >Add a new Record</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/currentstatus">Delete a Record</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/currentstatus">Update/Edit a Record</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/stockdetails">Stock Details</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/reports">Create a Report</b-list-group-item>
            <b-list-group-item variant="dark" to="login">Logout</b-list-group-item>
          </div>
        </b-list-group>
      </b-card>
      <b-card title="Dashboard">
        
        <div>
          <b-card-group deck>
            <b-card bg-variant="primary" text-variant="white" header="Total Items" class="text-center">
              <b-card-text>
                <p>LAB 01: </p>
              </b-card-text>
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


<script>

</script>

<style scoped>

</style>