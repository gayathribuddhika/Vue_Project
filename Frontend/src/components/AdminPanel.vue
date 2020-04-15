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
  <center><b-img :src="require('../assets/proimage.png')"></b-img></center>
    <b-card-body>
      <b-card-title><center>Admin Name</center></b-card-title>
    </b-card-body>

    <b-list-group variant="dark">
      <div>
      <b-list-group-item variant="dark" href="#">Dashboard</b-list-group-item>
      <b-list-group-item variant="dark"><router-link to = "adminpanel/currentstatus">Current Details</router-link></b-list-group-item>
      <b-list-group-item variant="dark"><router-link to = "adminpanel/addrecords">Add a new record</router-link></b-list-group-item>
      <b-list-group-item variant="dark" href="#">Delete a Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Update/Edit a Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Create a Report</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Edit Profile</b-list-group-item>
      <b-list-group-item variant="dark"><router-link to = "login">Logout</router-link></b-list-group-item>
      </div>
      
    </b-list-group>
    </b-card>
    <b-card title="Dashboard">
    </b-card>    
    
  </b-card-group>
</div>
</template>


<script>
import current_status from '@/components/Current_Status';

export default {
  name: 'AdminPanel',
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
  
}
</script>>