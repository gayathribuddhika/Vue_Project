<template>
    <div id="aboutus">
        <h1 id="title"><center><span>Faculty of Applied Sciences</span></center></h1>
        <b-card class="mb-5" style="max-width: 800rem;">
        <b-row>
            <b-col>
                <img id="applied-img" :src="require('../assets/name_applied.jpg')">
            </b-col>
            <b-col>
                <p>The Faculty of Applied Sciences, initiated as the BAUC on 21st June 1993, offers ten degree programmes, 
                    conducted by the following five departments of study.</p>
                <div v-for="department in departments" 
                    v-bind:item="departments"
                    v-bind:key="department._id">
                    <ul>
                        <li>{{department.name}}</li>
                        
                    </ul>
                    
                </div>
                <p>It aims at searching for and disseminating knowledge in the areas of learning that will make a useful contribution 
                    to the development of critical manpower requirements of the nation, contributing to education, 
                    science and technology and socio-economic uplift of the communities of the nation.</p>
            </b-col>
        </b-row>
        <!--  -->
            
            
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AbaoutUs',
    data() {
        return {
        departments: []
        }
    },
    mounted () {
    axios.get('http://localhost:8085/aboutus')
    .then((response) => {
      console.log(response.data);
      this.departments = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  }
}
</script>

<style scoped>
#aboutus {
    padding-top: 30px;
    margin-left: 40px;
    margin-right: 40px;
}

#title {
    color:green;
}
</style>