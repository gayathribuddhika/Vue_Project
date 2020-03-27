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
            <b-form @submit.prevent="submit1">
            <b-form-group
              label="Username:"
              label-for="username1"
            >
            <b-form-input
              id="username1"
              placeholder="Enter your username"
              required
              :class="{ 'hasError': $v.form1.username1.$error }"
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
              :class="{ 'hasError': $v.form1.password1.$error }"
              v-model= "form1.password1"
            /> <br>
            <a href="#">Forgot your password?</a>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
          </b-card>
        </div>
      
      </b-col> 
      
      <b-col md="6">   
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
      </b-col> 
    </b-row>
  </b-container>
  </b-jumbotron>
</div>
</template>

<script>
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
    submit1() {
      this.$v.form1.$touch();
      if(this.$v.form1.$error) return 
      alert("Successfully logedin");
     /* if(this.form1.username1 != "" && this.input.password1 != "") {
        if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }*/
    },
    submit2() {
      this.$v.form2.$touch();
      if(this.$v.form2.$error) return 
      alert("Successfully logedin");
    }
  }
  
}

</script>


<style>
#form{
  margin-top: 20px;
  
}
</style>