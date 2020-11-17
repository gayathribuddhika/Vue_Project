<template>
    <div>
        <br />
        <h1><center>Contact Information</center></h1>
        <br />
        <center>
        <b-card body-class="text-justify" class="mb-2" style="background-color: #e3f2fd; max-width: 60rem;">
        <div>
          
            <h4>Address</h4>
            <hr>
            <div class="contact" 
            v-for="contact in contacts" 
            v-bind:item="contacts"
            v-bind:key="contact._id"
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
            v-bind:key="contact._id"
            >
              <p class="text">{{ contact.Location }}</p>
            </div>
            
        </div>
        <br>
        <div>
            <h4>Telephone</h4>
            <hr>
            <div class="contact" 
            v-for="contact in contacts" 
            v-bind:key="contact._id"
            >
            <b-row>
              <b-col>
              <p class="text">{{ contact.Name }} </p>
              </b-col>
              <b-col>
                <p class="text"> {{ contact.Number}} </p>
              </b-col>
            </b-row>
            </div>
          
        </div>
        </b-card>
        </center>
    </div>
   

</template>

<script>
import axios from 'axios';

export default {
  name: 'Contacts',
  data() {
    return {
      contacts: []
      
      
    }
  },
  mounted () {
    axios.get('http://localhost:8085/contacts')
    .then((response) => {
      console.log(response.data);
      this.contacts = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.contact {
  margin-left: 60px;
  margin-right: 10px;
}

p.text {
  font-size: 16px;
  font-weight: 90;
  
}

h4 {
    margin-left: 60px;
}
</style>