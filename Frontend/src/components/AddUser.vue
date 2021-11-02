<template>
    <div id="form">
    <br>
    <h2>
      <center>Add New User</center>
    </h2>

    <b-container fluid>
      <div class="user_form">
        <center>
          <b-card
            bg-variant
            text-variant="dark"
            border-variant="dark"
            style="max-width: 30rem;"
            align="left"
          >
            <b-form @submit="add_user">
              <b-form-group label="Full Name">
                <b-form-input
                  id="name"
                  required
                  placeholder="enter full name"
                  v-model="user_form.name"
                />
              </b-form-group>
              <b-form-group label="Designation">
                <b-form-input
                  id="designation"
                  required
                  placeholder="enter designation"
                  v-model="user_form.designation"
                />
              </b-form-group>
              <b-form-group label="Email">
                <b-form-input
                  id="email"
                  required
                  placeholder="enter email"
                  v-model="user_form.email"
                />
              </b-form-group>
              <b-form-group label="Mobile Number">
                <b-form-input
                  id="phone"
                  required
                  placeholder="enter mobile number"
                  v-model="user_form.phone"
                />
              </b-form-group>
              <b-form-group label="Username">
                <b-form-input
                  id="username"
                  required
                  placeholder="enter a suitable username"
                  v-model="user_form.username"
                />
              </b-form-group>
              <b-form-group label="Password">
                <b-form-input
                  id="password"
                  required
                  placeholder="enter a valid password"
                  v-model="user_form.password"
                />
              </b-form-group>
              <b-form-group label="IsAdmin">
                <!-- <select v-model="selected">
                    <option :value="null">Pick a value</option>
                    <option v-for="val in [true, false]" :value="val">{{val}}!!!</option>
                </select> -->
                <b-form-select
                  id="isAdmin"
                  required
                  v-model="selected"
                  :options="options"
                  
                >
                </b-form-select>
              </b-form-group>

              <center>
              <b-button
                type="submit"
                block variant="success"
                >Submit</b-button
              >
              <p v-if="submitted === 'ok'">Record Submitted Successfully!!!</p>
              <p v-if="submitted === 'pending'">Sending...</p>
              <p v-if="submitted === 'error'">Please fill all the required fields</p>
              </center>
            </b-form>
          </b-card>
        </center>
      </div>
    </b-container>
    <br>
  </div>
  
</template>

<script>
import axios from "axios";

export default {
    name: "AddUser",
    data() {
      return {
        user_form: {
          name: "",
          designation: "",
          email: "",
          phone: "",
          username: "",
          password: "",
          isAdmin: true
        },
        selected: null,
        options: [
          { value: null, text: 'select an option', disabled: true},
          { value: true, text: 'True',},
          { value: false, text: 'False'}, 
        ],

        submitted: null,
                
      }
    },

    methods: {
      add_user() {
        let newUser = {
          name: this.user_form.name,
          designation: this.user_form.designation,
          email: this.user_form.email,
          phone: this.user_form.phone,
          username: this.user_form.username,
          password: this.user_form.password,
          isAdmin: this.user_form.isAdmin
        };
        console.log(newUser);

        axios.post("http://localhost:8085/user", newUser)
        .then(response => {
          console.log(response.data);
          alert(response.data.msg);
          // this.submitted = "pending";
          // setTimeout(() => {
          //   this.submitted = "ok";
          // }, 500);
        })
        .catch(error => {
          // console.log(error.message);
        });

      }
      
    }
}
</script>