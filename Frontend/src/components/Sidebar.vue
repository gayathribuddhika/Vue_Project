<template>
  <div>
  <b-card body-bg-variant="light" border-variant="dark">
    <b-tabs pills card vertical no-body>
      <b-tab title="Dashboard">
        <b-card-text>{{dashboard}}</b-card-text>
        
      </b-tab>
      <b-tab title="Current Details">{{this.contacts}}</b-tab>
      <b-tab title="Add a new Record"><b-card-text>Add a new Record</b-card-text></b-tab>
      <b-tab title="Delete a Record"><b-card-text>Delete a Record</b-card-text></b-tab>
      <b-tab title="Update/Edit a Record"><b-card-text>Update/Edit a Record</b-card-text></b-tab>
      <b-tab title="Create a Report"><b-card-text>Create a Report</b-card-text></b-tab>
      <b-tab title="Logout"></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import Contacts from '@/components/Contacts'
export default {
  name:"Sidebar",
  data() {
    return {
      dashboard:"Dashboard",
      contacts:[]
    }
  },
  methods: {
    login(){
      this.$router.replace({name: "Contacts"})
    }
  },
}
</script>
