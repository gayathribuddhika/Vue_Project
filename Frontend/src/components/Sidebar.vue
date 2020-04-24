<template>
  <div>
  <b-card >
    <b-tabs pills card vertical variant ="dark">
      <b-tab title="Dashboard" active><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Current Details"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Add a new Record"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Delete a Record"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Update/Edit a Record"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Create a Report"><b-card-text>Tab contents 3</b-card-text></b-tab>
      <b-tab title="Logout" router-link ="/login/resetpassword"></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {
  
}
</script>
