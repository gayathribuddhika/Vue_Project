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
          <b-img :src="require('../assets/gayathri.png')" rounded="circle" alt="Circle image"></b-img>
          <!-- <b-img>{{user.profile_image}}</b-img> -->
        </center>
        <center>
        <b-card-body>
          <b-card-title>
            {{user.name}}
          </b-card-title>
          <p><router-link :to = "`/admindashboard/profile`">view profile</router-link></p>
        </b-card-body>
        </center>
        <b-list-group variant="dark">
          <div>
            <b-list-group-item variant="dark" active>Dashboard</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/items">Items</b-list-group-item>
            <b-list-group-item variant="dark" to="#">Items - Summary </b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/additem" >Add new Item</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/items">Delete Item</b-list-group-item>
            <b-list-group-item variant="dark" to="admindashboard/items">Update/Edit Item</b-list-group-item>
            <b-list-group-item variant="dark" to="#">Items - Stock</b-list-group-item>
            <b-list-group-item variant="dark" to="#">Create a Report</b-list-group-item>
            <b-list-group-item variant="dark" to="login">Logout</b-list-group-item>
          </div>
        </b-list-group>
      </b-card>
      <b-card title="Dashboard">
        <br>
        <div>
          <b-card-group deck>
            <b-card header="Total Items" class="text-center" bg-variant="warning">
              <b-card-text>
                <b-row>
                  <b-col>LAB 01: 50</b-col>
                  <b-col>LAB 02: 50</b-col>
                  <b-col>LAB 03: 50</b-col>
                </b-row>
                <b-row>
                  <b-col>LAB 04: 50</b-col>
                  <b-col>LAB 05: 50</b-col>
                  <b-col></b-col>
                </b-row>
                <br>
                <b-row>
                  <b-col>Total: 250</b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-card header="Categories" class="text-center" bg-variant="primary">
              <b-card-text>10</b-card-text>
            </b-card>

            <b-card header="Stocks" class="text-center" bg-variant="secondary">
              <b-card-text>50</b-card-text>
            </b-card>
          </b-card-group>
        </div>

        <div class="mt-3">
          <b-card-group deck>
            <b-card header="Suppliers" class="text-center" bg-variant="success">
              <b-card-text>5</b-card-text>
            </b-card>

            <b-card header="Damaged Items" class="text-center" bg-variant="danger">
              <b-card-text>12</b-card-text>
            </b-card>

            <b-card header="Ordered Items" class="text-center" bg-variant="info">
              <b-card-text>30</b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "AdminDashboard",
  data() {
    return {
      user: {
        name: "",
        profile_image: ""
      }
    };
  },

  created() {
      this.readUser();
  },

  methods: {
    readUser() {
      axios
        .get("http://localhost:8085/user/admin")
        .then(response => {
          console.log(response.data.name);
          console.log(response.data.profile_image);
          this.user.name= response.data.name;
          this.user.profile_image= response.data.profile_image;
        })
        .catch(error => {
          console.log(error);
        });
      // axios
      //   .get("http://localhost:8085/user/5fea10bc3cae4a2538c6da33")
      //   .then(response => {
      //     console.log(response.data._id);
      //     this.user.id = response.data._id;
      //     // return itemsLab1.length;
      //     // console.log(this.itemsLab1.length);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style scoped>

</style>