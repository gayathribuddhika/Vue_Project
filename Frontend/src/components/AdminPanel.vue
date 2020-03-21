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
      <table style="width:100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Main Category</th>
            <th>Asset Code</th>
            <th>Qty</th>
            <th>Make</th>
            <th>Condition</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for = "item in items" v-bind:key="item._id">
            <td>{{item.Id}}</td>
            <td>{{item.Main_Category}}</td>
            <td>{{item.Asset_Code}}</td>
            <td>{{item.Qty}}</td>
            <td>{{item.Make}}</td>
            <td>{{item.Condition}}</td>
            <td>{{item.Comments}}</td>
          </tr>
        </tbody>
      </table>
    </b-card>    
    
  </b-card-group>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminPanel',
  data() {
    return {
      items: []
      
      
    }
  },
  mounted () {
    axios.get('http://localhost:8085/items')
    .then((response) => {
      console.log(response.data);
      this.items = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  }
}
</script>