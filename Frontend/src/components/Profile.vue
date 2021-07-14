<template>
  <div class>
    <br />
    <div class="btn">
      <b-button squared variant="dark" to="/admindashboard">Back</b-button>
    </div>
    <center>
      <b-card style="max-width: 50rem;" align="left">
        <b-form>
          <center>
            <b-img
              :src="require('../assets/gayathri.png')"
              rounded="circle"
              alt="Circle image"
            ></b-img>
          </center>
          <br /><br />
          <!-- v-for="(user, user_id) in userData" v-bind:key="user_id" -->
          <!-- @submit="onSubmit" @reset="onReset" v-if="show" -->
          <b-form-group id="user_name" label="Name:" label-for="user_name">
            <b-form-input
              id="user_name"
              v-model="user.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="designation"
            label="Designation:"
            label-for="designation"
          >
            <b-form-input
              id="designation"
              v-model="user.designation"
              placeholder="Enter Designation"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="email" label="Email address:" label-for="email">
            <b-form-input
              id="email"
              v-model="user.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="phone" label="Phone:" label-for="phone">
            <b-form-input
              id="phone"
              v-model="user.phone"
              type="number"
              placeholder="Enter Phone No"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Update</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
      </b-card>
    </center>
    <br />
    <!-- <b-card class="mt-3" header="User Profile">
      <pre class="m-0">{{ user }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      user: {}
    };
  },

  created() {
    this.readUser();
  },

  methods: {
    readUser() {
      // this.id = this.$route.params.id;
      axios
        .get("http://localhost:8085/user/5fea10bc3cae4a2538c6da33")
        .then(response => {
          console.log(response.data);
          this.user = response.data;
          // return itemsLab1.length;
          // console.log(this.itemsLab1.length);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped></style>
