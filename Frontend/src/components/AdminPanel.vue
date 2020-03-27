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
      <b-list-group-item variant="dark"><router-link to = "currentstatus">Current Status</router-link></b-list-group-item>
      <b-list-group-item variant="dark" href="#">Add New Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Delete a Record</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Create a Report</b-list-group-item>
      <b-list-group-item variant="dark" href="#">Edit Profile</b-list-group-item>
      <b-list-group-item variant="dark"><router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link></b-list-group-item>
    </b-list-group>
    <router-view @authenticated="setAuthenticated" />
    </b-card>
    
    <b-card title="Dashboard">
    <br>
    
    </b-card>    
    
  </b-card-group>
</div>
</template>


<script>
//import current_status from '@/components/Current_Status';

export default {
  name: 'AdminPanel',
  data() {
    return {
      authenticated: false,
        mockAccount: {
          username: "admin",
          password: "admin123"
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
        }
}
</script>>