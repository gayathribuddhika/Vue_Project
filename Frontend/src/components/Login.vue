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
                  <center><p id="msg" v-if="submitted === 'error'">You entered Username or Password is Incorrect</p></center>
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
                  <b-button type="submit" variant="primary" :disabled="submitted === 'pending'">Login</b-button>
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
        password: "",
        
      },

      form2: {
        username: "",
        password: ""
      },

      submitted: null
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
    login1() {
      let newLogin = {
        username:this.form1.username,
        password:this.form1.password       
      };
      console.log(newLogin);
      
      axios.post('http://localhost:8085/adminlogin', newLogin).then((resposne) => {
        console.log(resposne);
        this.$router.push({name: "AdminPanel"});
      })
      .catch((error) =>{
        console.log(error);
        //alert("Username or Password is incorrect");
        this.submitted = "pending";
          setTimeout(() => {
            this.submitted = "error";
          }, 500);
        
      })
    }
  }
}
</script>


<style scoped>
#form {
  margin-top: 20px;
}
#msg {
  
  font-size: 15px;
  color:red;
}
</style>