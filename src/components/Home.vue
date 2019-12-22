<template>
<div id= "form">
  <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark">
    <b-row>
    <b-col md="6">
      <h2> &nbsp; Admin Login</h2>
    </b-col>
    <b-col md="6">
      <h2>Staff Login</h2>
    </b-col>
    </b-row>
  <b-container fluid>
    <b-row>
      <b-col md="6">
        
        <div>
          <b-card bg-variant="dark" text-variant="white">
            <b-form-group
              label="Username:"
              label-for="input-1"
              
            >
            <b-form-input
              id="input-1"
              v-model="form1.username"
              required
              placeholder="Enter your username"
            ></b-form-input>
            </b-form-group>
            
            <b-form-group
              label="Password:"
              label-for="input-2"
              description ="Forgot your password?"
            >
            <b-form-input
              id="input-2"
              type="password"
              v-model="form1.password"
              required
              placeholder="Enter your password"

            ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-card>
          
        </div>
      </b-col> 
      
      <b-col md="6">   
        <div>
          <b-card bg-variant="dark" text-variant="white">
            <b-form-group 
              label="Username:"
              label-for="input-3"
            >
            <b-form-input
              id="input-3"
              v-model="form2.username"
              required
              placeholder="Enter your username"
            ></b-form-input>
            </b-form-group>
            
            <b-form-group 
              label="Password:"
              label-for="input-4"
              description ="Forgot your password?"
            >
            <b-form-input
              id="input-4"
              type="password"
              v-model="form2.password"
              required
              placeholder="Enter your password"
            ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
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
        form1:{
          username:"",
          password:""
        },
        form2:{
          username:"",
          password:""
      }
    }
  },
  
}

</script>


<style scoped>
#form{
  margin-top: 20px;
}
</style>
