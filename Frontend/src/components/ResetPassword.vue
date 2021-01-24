<template >
  <div id="form">
    <div id="back-btn">
      <b-button variant="success" v-on:click="login()">Back to Login</b-button>
    </div>
    <div id="reset-form">
      <br />
      <b-jumbotron container-fluid border-variant="dark" bg-variant="light">
        <b-form>
          <p>To reset password, enter your email below. Your password reset instructions will be sent to your email. Please check your email once send.</p>
          <br />
          <b-form-group
            id="fieldset-horizontal"
            cccccc
            label-cols-lg="3"
            label="Enter your email"
            label-for="email"
          >
            <b-form-input
              id="input-horizontal"
              required
              v-model="this.email"
              placeholder="Enter your organization email here"
            ></b-form-input>
          </b-form-group>
        </b-form>
        <b-button variant="success">SEND</b-button>
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
  },
  methods: {
    login() {
      this.$router.replace({ name: "Login" });
    }
  }
};
</script>

<style scoped>
#reset-form {
  margin-left: 250px;
  margin-right: 250px;
  padding-top: 25px;
}
#back-btn {
  margin-left: 25px;
  padding-top: 25px;
}
</style>