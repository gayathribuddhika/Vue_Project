<template>
  <div id="form">
    <!-- <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark"> -->
      <b-row>
        <b-col  md="6">
          <h2>
            <center>Admin Login</center>
          </h2>
        </b-col>
        <!-- <b-col md="6">
          <h2>
            <center>Staff Login</center>
          </h2>
        </b-col> -->
      </b-row>
      <b-container fluid>
        <b-row>
          <b-col md="6">
            <div>
              <b-card bg-variant text-variant="dark" border-variant="dark">
                <b-form @submit.prevent="login">
                  <center><p id="msg" v-if="submit_login === 'error'">{{err_msg}}</p></center>
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
                    <router-link to="/login/resetpassword">Forgot your password?</router-link>
                  </b-form-group>
                  <b-button type="submit" variant="success" :disabled="submit_login === 'ok'">Login</b-button>
                  <!-- <center><p>Not Admin <router-link to="#">Login here</router-link></p></center> -->
                </b-form>
              </b-card>
            </div>
          </b-col>

          <!-- <b-col md="6">
            <div>
              <b-card bg-variant text-variant="dark" border-variant="dark">
                <b-form @submit.prevent="stafflogin">
                  <center><p id="msg" v-if="submit_stafflogin === 'error'">{{err_msg}}</p></center>
                  <b-form-group label="Username:" label-for="staff_username">
                    <b-form-input
                      id="staff_username"
                      placeholder="Enter your username"
                      required
                      v-model="staff_form.staff_username"
                    />
                  </b-form-group>

                  <b-form-group label="Password:" label-for="staff_password">
                    <b-form-input
                      id="staff_password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      v-model="staff_form.staff_password"
                    />
                    <br />
                    <router-link to="/login/resetpassword">Forgot your password?</router-link>
                  </b-form-group>
                  <b-button type="submit" variant="success" :disabled="submit_stafflogin === 'ok'">Login</b-button>
                </b-form>
              </b-card>
            </div>
          </b-col> -->
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
      login_form: {
        username: "",
        password: "",
        user_type: ""
      },
      // user: [],

      submit_login: null,
      
      // mounted () {
      //   axios.get('http://localhost:8085/login')
      //   .then((response) => {
      //     console.log(response.data);
      //     this.user_type = response.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // },


      // admin_form: {
      //   admin_username: "",
      //   admin_password: "",
        
      // },
      // staff_form: {
      //   staff_username: "",
      //   staff_password: ""
      // },
      // submit_adminlogin: null,
      // submit_stafflogin: null,

      err_msg: "Invalid Username or Password"
    };
  },
  
  created() {
    this.read_user_type();
  },

  methods: {
    read_user_type() {
      let uri = `http://localhost:8085/login`;
      axios.get(uri).then(response => {
          this.login_form.user_type = response.data;
          console.log(this.login_form.user_type);
        })
        .catch(err => {
          console.log(err);
        });
    },

    login() {
      let newLogin = {
        username:this.login_form.username,
        password:this.login_form.password,
        user_type: this.read_user_type()
      };
      console.log(newLogin);
      
      axios.post('http://localhost:8085/login', newLogin).then((resposne) => {
        console.log(resposne);
        this.submit_login = "ok";
        
        if(this.user_type == 'admin') {
          this.$router.push({name: "AdminDashboard"});
        } 
        if (this.user_type == 'staff') {
          this.$router.push({name: "StaffDashboard"});
        }
      })
      .catch((error) =>{
        console.log(error);
        console.log(this.err_msg);
        this.submit_login = "error";
      })
    }
    // adminlogin() {
    //   let newLogin = {
    //     username:this.admin_form.admin_username,
    //     password:this.admin_form.admin_password       
    //   };
    //   console.log(newLogin);
      
    //   axios.post('http://localhost:8085/adminlogin', newLogin).then((resposne) => {
    //     console.log(resposne);
    //     this.submit_adminlogin = "ok";
    //     this.$router.push({name: "AdminDashboard"});
    //   })
    //   .catch((error) =>{
    //     console.log(error);
    //     console.log(this.err_msg);
    //     this.submit_adminlogin = "error";
    //   })
    // },
    // stafflogin() {
    //   let newLogin = {
    //     username:this.staff_form.staff_username,
    //     password:this.staff_form.staff_password      
    //   };
    //   console.log(newLogin);
      
    //   axios.post('http://localhost:8085/stafflogin', newLogin).then((resposne) => {
    //     console.log(resposne);
    //     this.submit_stafflogin = "ok";
    //     this.$router.push({name: "StaffDashboard"});
    //   })
    //   .catch((error) =>{
    //     console.log(error);
    //     console.log(this.err_msg);
    //     this.submit_stafflogin = "error";
    //   })
    // }
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