<template>
    <div id="form">
    <h2>
      <center>Add New User</center>
    </h2>

    <b-container fluid>
      <div class="user_form">
        <center>
          <b-card
            bg-variant
            text-variant="dark"
            border-variant="dark"
            style="max-width: 30rem;"
            align="left"
          >
            <b-form @submit.prevent="login">
              <center>
                <p id="msg" v-if="submit_login === 'error'">{{ err_msg }}</p>
              </center>
              <b-form-group label="Full Name">
                <b-form-input
                  id="name"
                  required
                  v-model="user_form.name"
                />
              </b-form-group>

              
              <center>
              <b-button
                type="submit"
                block variant="success"
                :disabled="submit_login === 'ok'"
                >Login</b-button
              >
              </center>
            </b-form>
          </b-card>
        </center>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AddUser"
}
</script>