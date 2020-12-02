<template>
  <div id="form">
    <!-- <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark"> -->
      <b-row>
        <b-col  md="6">
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
                  <center><p id="msg" v-if="submit_adminlogin === 'error'">Invalid Username or Password</p></center>
                  <b-form-group label="Username:" label-for="username1">
                    <b-form-input
                      id="username1"
                      placeholder="Enter your username"
                      required
                      v-model="form1.username1"
                      
                    />
                  </b-form-group>

                  <b-form-group label="Password:" label-for="password1">
                    <b-form-input
                      id="password1"
                      type="password"
                      placeholder="Enter your password"
                      required
                      v-model="form1.password1"
                      
                    />
                    <br />
                    <router-link to="/login/resetpassword">Forgot your password?</router-link>
                  </b-form-group>
                  <b-button type="submit" variant="success" :disabled="submit_adminlogin === 'ok'">Login</b-button>
                </b-form>
              </b-card>
            </div>
          </b-col>

          <b-col md="6">
            <div>
              <b-card bg-variant text-variant="dark" border-variant="dark">
                <b-form @submit.prevent="login2">
                  <center><p id="msg" v-if="submit_stafflogin === 'error'">Invalid Username or Password</p></center>
                  <b-form-group label="Username:" label-for="username2">
                    <b-form-input
                      id="username2"
                      placeholder="Enter your username"
                      required
                      v-model="form2.username2"
                    />
                  </b-form-group>

                  <b-form-group label="Password:" label-for="password2">
                    <b-form-input
                      id="password2"
                      type="password"
                      placeholder="Enter your password"
                      required
                      v-model="form2.password2"
                    />
                    <br />
                    <router-link to="/login/resetpassword">Forgot your password?</router-link>
                  </b-form-group>
                  <b-button type="submit" variant="success" :disabled="submit_stafflogin === 'ok'">Login</b-button>
                </b-form>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    <!-- </b-jumbotron> -->
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
        username1: "",
        password1: "",
        
      },

      form2: {
        username2: "",
        password2: ""
      },

      submit_adminlogin: null,
      submit_stafflogin: null
    };
  },

  methods: {
    login1() {
      let newLogin = {
        username:this.form1.username1,
        password:this.form1.password1       
      };
      console.log(newLogin);
      
      axios.post('http://localhost:8085/adminlogin', newLogin).then((resposne) => {
        console.log(resposne);
        this.submit_adminlogin = "ok";
        this.$router.push({name: "AdminDashboard"});
      })
      .catch((error) =>{
        console.log(error);
        console.log("Invalid Username or Password");
        this.submit_adminlogin = "error";
      })
    },
    login2() {
      let newLogin = {
        username:this.form2.username2,
        password:this.form2.password2      
      };
      console.log(newLogin);
      
      axios.post('http://localhost:8085/stafflogin', newLogin).then((resposne) => {
        console.log(resposne);
        this.$router.push({name: "StaffPanel"});
      })
    //   .catch((error) =>{
    //     console.log(error);
    //     //alert("Username or Password is incorrect");
    //     this.submitted2 = "pending";
    //       setTimeout(() => {
    //         this.submitted2 = "error";
    //       }, 500);
        
    //   })
    }
  }
}
</script>


<style scoped>
#form {
  margin-top: 20px;
  padding-bottom: 25px;
}
#msg {
  
  font-size: 15px;
  color:red;
}
</style>