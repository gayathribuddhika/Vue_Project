<template>
    <div> 
       <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand>
            <b-container>
                <b-row>
                    <b-col md="3">
                        <b-img :src="require('../assets/sabra.png')"></b-img>
                    </b-col> 
                    <b-col md="9">   
                        <h1>Inventory Management System</h1>
                        <h2>Faculty of Applied Sciences</h2>
                        <h2>Sabaragamuwa University of Sri Lanka</h2>
                    </b-col>
                </b-row>
            </b-container>
        </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
h1{
    padding-top: 12px
}
</style>