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
            <b-form-group
              label="Username:"
              label-for="input-1"
              
            >
            <b-form-input
              id="input-1"
              
              required
              placeholder="Enter your username"
            ></b-form-input>
            </b-form-group>
            
            <b-form-group
              label="Password:"
              label-for="input-2"
            >
            
            <b-form-input
              id="input-2"
              type="password"
              
              required
              placeholder="Enter your password"

            ></b-form-input><br>
            <a href="#">Forgot your password?</a>
            </b-form-group>
              <router-link to="/adminpanel">
                <b-button type="button" variant="primary">Login</b-button>
              </router-link>
          </b-card>
          
        </div>
      </b-col> 
      
      <b-col md="6">   
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
      </b-col>
    </b-row>
  </b-container>
  </b-jumbotron>
</div>
</template>

<script>
  export default{
    name: "Home",
    data(){
      return{
        
    }
  }
  
}

</script>


<style scoped>
#form{
  margin-top: 20px;
  
}
</style>