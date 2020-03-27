<template>
<div id= "form">
  <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark">
    
    <b-row>
    <b-col md="6">
      <h2><center>Admin Login</center></h2>
    </b-col>
    <b-col md="6">
      <h2><center>Staff Login</center></h2>
    </b-col>
    </b-row>
  <b-container fluid>
    <b-row>
      <b-col md="6">
        
        <div>
          <b-card bg-variant="" text-variant="dark" border-variant="dark">
            <b-form >
            <b-form-group
              label="Username:"
              label-for="username1"
            >
            <b-form-input
              id="username1"
              placeholder="Enter your username"
              required
              v-model= "form1.username1"
            />
            </b-form-group>
            
            <b-form-group
              label="Password:"
              label-for="password1"
            >
            <b-form-input
              id="password1"
              type="password"
              placeholder="Enter your password"
              required
              v-model= "form1.password1"
            /> <br>
            <a href="#">Forgot your password?</a>
            </b-form-group>
            <b-button type="button" variant="primary" v-on:click="login()">Login</b-button>
            </b-form>
          </b-card>
        </div>
      
      </b-col> 
      
      <!--<b-col md="6">   
        <div>
          <b-card bg-variant="" text-variant="dark" border-variant="dark">
            <b-form @submit.prevent="submit2">
            <b-form-group
              label="Username:"
              label-for="username2"
            >
            <b-form-input
              id="username2"
              placeholder="Enter your username"
              required
              :class="{ 'hasError': $v.form2.username2.$error }"
              v-model= "form2.username2"
            />
            </b-form-group>
            
            <b-form-group
              label="Password:"
              label-for="password2"
            >
            <b-form-input
              id="password2"
              type="password"
              placeholder="Enter your password"
              required
              :class="{ 'hasError': $v.form2.password2.$error }"
              v-model= "form2.password2"
            /> <br>
            <a href="#">Forgot your password?</a>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
          </b-card>
        </div>
      </b-col> -->
    </b-row>
  </b-container>
  </b-jumbotron>
</div>
</template>

<script>
import AdminPanel from '@/components/AdminPanel';
import { required } from 'vuelidate/lib/validators'
  
  export default{
    name: "Login",
    data(){
      return{
        form1: {
        username1: '',
        password1: ''
        },

        form2: {
        username2: '',
        password2: ''
        }
     }
  },

  validations: {
    form1:{
      username1: {required},
      password1: {required}
    },
    form2:{
      username2: {required},
      password2: {required}
    }
  },

  methods: {
    login() {
      
      if(this.form1.username1 != "" && this.form1.password1 != "") {
        if(this.form1.username1 == this.$parent.mockAccount.username && this.form1.password == this.$parent.mockAccount.password1) {
          this.$emit("authenticated", true);
            this.$router.replace({ name: "AdminPanel" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
    }
  }
  
  

</script>


<style scoped>
#form{
  margin-top: 20px;
  
}
</style>