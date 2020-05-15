<template>
    <div id ="links">
        <b-nav tabs >
            <b-nav-item><router-link to = '/'>Home</router-link></b-nav-item>
            <b-nav-item><router-link to = '/contacts'>Contacts</router-link></b-nav-item>
            <b-nav-item><router-link to = '/aboutus'>About Us</router-link></b-nav-item>
            
            
        </b-nav>
    </div>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style scoped>

#links{
    padding-top: 5px;
}
</style>