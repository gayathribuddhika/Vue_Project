<template>
    <div>
        <h1><center>Contact Information</center></h1>
        <b-jumbotron fluid>
        <div>
          
            <h4>Address</h4>
            <hr>
            <div class="contact" 
            v-for="Contact in contacts" 
            v-bind:item="Contacts"
            v-bind:index="index"
            v-bind:key="Contact._id"
            >
              <p class="text">{{ contact.Address }}</p>
            </div>
        </div>
        <br>
        <div>
            <h4>Location</h4>
            <hr>
            <div class="contact" 
            v-for="contact in contacts" 
            v-bind:item="contact"
            v-bind:key="contact._id"
            >
              <p class="text">{{ contact.Location }}</p>
            </div>
            
        </div>
        <br>
        <div>
            <h4>Telephone</h4>
            <hr>
            <div class="post" 
            v-for="post in posts" 
            v-bind:item="post"
            v-bind:key="post._id"
            >
            <b-row>
              <b-col>
              <p class="text">{{ post.Name }} </p>
              </b-col>
              <b-col>
                <p class="text"> {{ post.Number}} </p>
              </b-col>
            </b-row>
            </div>
          
        </div>
        </b-jumbotron>
    </div>
   

</template>

<script>
import PostService from '../PostService';

export default {
  name: 'Contacts',
  data() {
    return {
      contacts: []
      
      
    }
  },
  async created() {
    try{
      this.contact = await PostService.getContacts();
    }
    catch(err){
      this.error = err.message;
    }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.contact {
  margin-left: 100px;
}

p.text {
  font-size: 16px;
  font-weight: 90;
  
}

h4 {
    margin-left: 60px;
}
</style>