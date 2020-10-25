<template>
<div id="homepage">
    <b-container width="100%">
      <b-row>
        <b-col md="8">  
          <div id="home"> 
            <h1>Welcome!!!</h1>
            <h2>Faculty of Applied Sciences</h2>
            <h2>Sabaragamuwa University of Sri Lanka</h2>
            <div class = "bttn">
                <router-link to="/login">
                    <b-button type="button" variant="success">Login</b-button>
                </router-link>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <b-img :src="require('../assets/lab2.jpg')" full-width></b-img>
        </b-col> 
      </b-row>
    </b-container>
        
      
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#homepage{
    padding-top: 30px;
    padding-bottom: 10px;
    background-color:lightgreen;

}
#home {
  text-align: center;
  padding-top: 10%;
}

</style>