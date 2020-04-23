<template >
  <div id="back">
    <b-button variant="primary" v-on:click="login()">Login</b-button>

    <div id="reset">
      <br />
      <b-jumbotron container-fluid border-variant="dark" bg-variant="light">
        <b-form>
          <p>To reset your password, send your organization email address below. Your password reset instructions will be sent to your email address. Please check your emails.</p>
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
        <b-button variant="primary">SEND</b-button>
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

<style>
#back {
  margin-left: 250px;
  margin-right: 250px;
  padding-top: 25px;
}
</style>