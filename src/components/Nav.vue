<template>
    <div>
        <b-nav tabs>
            <b-nav-item ><router-link to = '/'>Home</router-link></b-nav-item>
            <b-nav-item ><router-link to = '/contacts'>Contacts</router-link></b-nav-item>
            <b-nav-item><router-link to = '/aboutus'>About Us</router-link></b-nav-item>
            
        </b-nav>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    name:"Nav"
}
</script>