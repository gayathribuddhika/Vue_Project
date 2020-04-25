<template>
  <div>
  <b-card body-bg-variant="light" >
    <b-tabs pills card vertical no-body>
      <b-tab title="Contacts" href="/contacts" active></b-tab>
      <b-tab title="Current Details"></b-tab>
      <b-tab title="Add a new Record"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Delete a Record"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Update/Edit a Record"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Create a Report"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Logout"></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {
  name:"Sidebar",
  data() {
    return {
      
    }
  },
}
</script>
