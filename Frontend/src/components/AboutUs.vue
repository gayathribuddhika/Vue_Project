<template>
    <div id="aboutus">
        <h1><center>About Us</center></h1>
        <b-card class="mb-5" style="max-width: 800rem;">
        <b-row>
            <b-col>
                <img id="applied-img" :src="require('../assets/name_applied.jpg')">
            </b-col>
            <b-col>
                <p>The Faculty of Applied Sciences, initiated as the BAUC on 21st June 1993, offers ten degree programmes, 
                    conducted by the following five departments of study.</p>
                <ul>
                    <p>Department of Computing and Information Systems</p>
                    <p>Department of Food Science and Technology</p>
                    <p>Department of Natural Resources</p>
                    <p>Department of Physical Sciences and Technology</p>
                    <p>Department of Sport Sciences and Physical Education</p>
                </ul>
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
export default {
    
}
</script>

<style scoped>
#aboutus {
    padding-top: 30px;
    padding-bottom: 300px;
    margin-left: 40px;
    margin-right: 40px;
}

</style>