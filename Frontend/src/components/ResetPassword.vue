<template>
<div id="back">
   <b-button variant="primary">Login</b-button>

  <div id="resetpassword">
      
      <b-jumbotron border-variant="dark">
    <b-form>
      <p>To reset your password, send your organization email address below. Your password reset instructions will be sent to your email address. Please check your emails.</p>
      <br />
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="Enter your email"
        label-for="email"
      >
        <b-form-input
          id="input-horizontal"
          required
          placeholder="Enter your organization email here"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-button variant="primary" align-center>SEND</b-button>
      </b-form-group>
    </b-form>
      </b-jumbotron>
  </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style>
#back{
    margin-left:18px;
    padding-top: 25px;
}
#resetpassword {
  padding-top: 40px;
  margin-left: 450px;
  margin-right: 450px;
  padding-bottom: 50px;
}
</style>