<template>
  <div id="form">
    <!-- <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark"> -->
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
                  <center><p id="msg" v-if="submitted1 === 'error'">You entered Username or Password is Incorrect</p></center>
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
                  <b-button type="submit" variant="success" :disabled="submitted1 === 'pending'">Login</b-button>
                </b-form>
              </b-card>
            </div>
          </b-col>

          <b-col md="6">
            <div>
              <b-card bg-variant text-variant="dark" border-variant="dark">
                <b-form @submit.prevent="login2">
                  <center><p id="msg" v-if="submitted2 === 'error'">You entered Username or Password is Incorrect</p></center>
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
                  <b-button type="submit" variant="success" :disabled="submitted2 === 'pending'">Login</b-button>
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

      submitted1: null,
      submitted2: null
    };
  },

//   validations: {
//     form1: {
//       username1: { required },
//       password1: { required }
//     },
//     form2: {
//       username2: { required },
//       password2: { required }
//     }
//   },

  methods: {
    login1() {
      let newLogin = {
        username:this.form1.username1,
        password:this.form1.password1       
      };
      console.log(newLogin);
      
      axios.post('http://localhost:8085/adminlogin', newLogin).then((resposne) => {
        console.log(resposne);
        this.$router.push({name: "AdminPanel"});
      })
    //   .catch((error) =>{
    //     console.log(error);
    //     //alert("Username or Password is incorrect");
    //     this.submitted1 = "pending";
    //       setTimeout(() => {
    //         this.submitted1 = "error";
    //       }, 500);
        
    //   })
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