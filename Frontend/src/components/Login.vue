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
            <b-form @submit.prevent="submit">
            <b-form-group
              label="Username:"
              label-for="username1"
              
            >
            <b-form-input
              id="username1"
              placeholder="Enter your username"
              required
              :class="{ 'hasError': $v.form.username1.$error }"
              v-model= "form.username1"
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
              :class="{ 'hasError': $v.form.password1.$error }"
              v-model= "form.password1"

            /><br>
            <a href="#">Forgot your password?</a>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
          </b-card>
          
        </div>
      </b-col> 
      
      <!-- <b-col md="6">   
        <div>
          <b-card bg-variant="" text-variant="dark" border-variant="dark">
            <b-form-group 
              label="Username:"
              label-for="input-3"
            >
            <b-form-input
              id="input-3"
              
              required
              placeholder="Enter your username"
            ></b-form-input>
            </b-form-group>
            
            <b-form-group 
              label="Password:"
              label-for="input-4"
            >
            
            <b-form-input
              id="input-4"
              type="password"
              
              required
              placeholder="Enter your password"
            ></b-form-input><br>
            <a href="#">Forgot your password?</a>
            </b-form-group>
              <router-link to="/staffpanel">
                <b-button type="button" variant="primary">Login</b-button>
              </router-link>
          </b-card>
          
        </div>
      </b-col> -->
    </b-row>
  </b-container>
  </b-jumbotron>
</div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
  export default{
    name: "Home",
    data(){
      return{
        form: {
        username1: '',
        password1: ''
        }
        
    }
  },

  validations: {
    form:{
      username1: {required},
      password1: {required}
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return
      alert("Successfully logdin")
    }
  }
  
}

</script>


<style scoped>
#form{
  margin-top: 20px;
  
}
</style>