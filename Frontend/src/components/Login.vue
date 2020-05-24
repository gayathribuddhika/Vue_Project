<template>
  <div id="form">
    <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark">
      <b-row>
        <b-col md="6">
          <h2>
            <center>Admin Login</center>
          </h2>
        </b-col>
        <b-col md="6">
          <h2>
            <center>Staff Login</center>
          </h2>
        </b-col>
      </b-row>
      <b-container fluid>
        <b-row>
          <b-col md="6">
            <div>
              <b-card bg-variant text-variant="dark" border-variant="dark">
                <b-form @submit.prevent="login1">
                  <b-form-group label="Username:" label-for="username1">
                    <b-form-input
                      id="username1"
                      placeholder="Enter your username"
                      required
                      v-model="form1.username"
                      
                    />
                  </b-form-group>

                  <b-form-group label="Password:" label-for="password1">
                    <b-form-input
                      id="password1"
                      type="password"
                      placeholder="Enter your password"
                      required
                      v-model="form1.password"
                      
                    />
                    <br />
                    <router-link to="/login/resetpassword">Forgot your password?</router-link>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Login</b-button>
                </b-form>
              </b-card>
            </div>
          </b-col>

          <b-col md="6">
            <div>
              <b-card bg-variant text-variant="dark" border-variant="dark">
                <b-form @submit.prevent="login2">
                  <b-form-group label="Username:" label-for="username2">
                    <b-form-input
                      id="username2"
                      placeholder="Enter your username"
                      required
                      v-model="form2.username"
                    />
                  </b-form-group>

                  <b-form-group label="Password:" label-for="password2">
                    <b-form-input
                      id="password2"
                      type="password"
                      placeholder="Enter your password"
                      required
                      v-model="form2.password"
                    />
                    <br />
                    <router-link to="/login/resetpassword">Forgot your password?</router-link>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Login</b-button>
                </b-form>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      form1: {
        username: "",
        password: ""
      },

      form2: {
        username: "",
        password: ""
      },

      isSubmitted: false
    };
  },

  validations: {
    form1: {
      username: { required },
      password: { required }
    },
    form2: {
      username: { required },
      password: { required }
    }
  },

  methods: {
    /*login1() {
      if (
        this.form1.username == "adminims" &&
        this.form1.password == "Admin123ims"
      ) {
        this.$router.replace({ name: "AdminPanel" });
        console.log("Login Successfull");
      } else {
        //console.log("The username and/or password is incorrect");

        alert("The username and/or password is incorrect")
      }
    }*/
     
  login1() {
      let uri = "http://localhost:8085/adminlogin";
      axios.post(uri, this.form1)
        .then(() => {
          //this.$router.push({name: "StockDetails"})
          this.form1 = {
            username:req.body.username,
            password: req.body.username
          }
        }    
    
        )}
  }
}
</script>


<style scoped>
#form {
  margin-top: 20px;
}
</style>