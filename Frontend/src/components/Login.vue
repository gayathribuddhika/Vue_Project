<template>
  <div id="form">
    <h2>
      <center>Login</center>
    </h2>

    <b-container fluid>
      <div class="login_form">
        <center>
          <b-card
            bg-variant
            text-variant="dark"
            border-variant="dark"
            style="max-width: 30rem;"
            align="left"
          >
            <b-form @submit.prevent="login">
              <center>
                <p id="msg" v-if="submit_login === 'error'">{{ err_msg }}</p>
              </center>
              <b-form-group label="Username:" label-for="username">
                <b-form-input
                  id="username"
                  placeholder="Enter your username"
                  required
                  v-model="login_form.username"
                />
              </b-form-group>

              <b-form-group label="Password:" label-for="password">
                <b-form-input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  v-model="login_form.password"
                />
                <br />
                <router-link to="/login/resetpassword"
                  >Forgot your password?</router-link
                >
              </b-form-group>
              <center>
              <b-button
                type="submit"
                block variant="success"
                >Login</b-button
              >
              </center>
            </b-form>
          </b-card>
        </center>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login_form: {
        username: "",
        password: "",
      },
      users: [],

      submit_login: null,
      err_msg: "Invalid Username or Password"
    };
  },

  methods: {
    login() {
      let newLogin = {
        username: this.login_form.username,
        password: this.login_form.password
      };
      
      axios
        .post("login", newLogin)
        .then(response => {
          console.log(response.data);

          if(response.data.isAdmin === true) {
            this.$router.push({ name: "AdminDashboard" });
          } else if (response.data.isAdmin == false) {
              this.$router.push({ name: "StaffDashboard" });
            }
          
        })
        .catch(error => {
          console.log(error);
          console.log(this.err_msg);
          this.submit_login = "error";
        });
    }
  }
};
</script>

<style scoped>

#form {
  margin-top: 20px;
  padding-bottom: 25px;
}
#msg {
  font-size: 15px;
  color: red;
}

</style>
