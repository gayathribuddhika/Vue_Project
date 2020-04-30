<template>
  <div>
    <b-card-group>
      <b-card
        style="max-width: 17rem;"
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
            <center>Admin Name</center>
          </b-card-title>
        </b-card-body>

        <b-list-group variant="dark">
          <div>
            <b-list-group-item variant="dark">Dashboard</b-list-group-item>
            <b-list-group-item variant="dark" to="adminpanel/currentstatus">Current Details</b-list-group-item>
            <b-list-group-item variant="dark">Current Details-Summary Report</b-list-group-item>
            <b-list-group-item variant="dark" to="adminpanel/addrecords">Add a new Record</b-list-group-item>
            <b-list-group-item variant="dark" to="adminpanel/currentstatus">Delete a Record</b-list-group-item>
            <b-list-group-item variant="dark" to="adminpanel/currentstatus">Update/Edit a Record</b-list-group-item>
            <b-list-group-item variant="dark">Create a Report</b-list-group-item>
            <b-list-group-item variant="dark">Edit Profile</b-list-group-item>
            <b-list-group-item variant="dark" to="login">Logout</b-list-group-item>
          </div>
        </b-list-group>
      </b-card>
      <b-card title="Dashboard">
        <b-card-text>dhsc cuw wfgw fgcv sdcsuewineq w</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import current_status from "@/components/Current_Status";

export default {
  name: "AdminPanel"
  /*components:{
    current_status
  },*/
  /*data() {
    return {
      authenticated: false,
      adminAccount:{
        username:"adminims",
        password: "admin123ims"
      }
    }
  },
  mounted() {
    if(!this.authenticated) {
                this.$router.replace({ name: "Login" });
            }
  },
  methods: {
    setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
  },*/
};
</script>>