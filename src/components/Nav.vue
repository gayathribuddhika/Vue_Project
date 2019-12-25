<template>
    <div id ="links">
        <b-nav tabs>
            <b-nav-item><router-link to = '/'>Home</router-link></b-nav-item>
            <b-nav-item><router-link to = '/contacts'>Contacts</router-link></b-nav-item>
            <b-nav-item><router-link to = '/aboutus'>About Us</router-link></b-nav-item>
            <div class = "bttn">
                <router-link to="/login">
                    <b-button type="button" variant="primary">Login</b-button>
                </router-link>
            </div>
            
        </b-nav>
    </div>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style>
.bttn{
    margin-left: 1150px;
    padding-bottom: 5px;
    
}
#links{
    padding-top: 5px;
}
</style>