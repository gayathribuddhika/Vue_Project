<template>
    <div id= "form">
      <b-jumbotron bg-variant="light" text-variant="dark" border-variant="dark">
        <b-row>
          <b-col md="6">
            <h2><center>Admin Login</center></h2>
          </b-col>
          <b-col md="6">
            <h2><center>Staff Login</center></h2>
          </b-col>
        </b-row>
        <b-container fluid>
          <b-row>
            <b-col md="6">
              <div>
                <b-card bg-variant="" text-variant="dark" border-variant="dark">
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label for="Username">Username</label>
                  <input type="text" v-model="user1.username" id="username1" name="username" class="form-control" placeholder = "Enter Your Username" :class="{ 'is-invalid': submitted && $v.user1.username.$error }" />
                  <div v-if="submitted && !$v.user1.username.required" class="invalid-feedback">Username is required</div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="user1.password" id="password1" name="password" class="form-control" placeholder = "Enter Your Password" :class="{ 'is-invalid': submitted && $v.user1.password.$error }" />
                  <div v-if="submitted && $v.user1.password.$error" class="invalid-feedback">
                    <span v-if="!$v.user1.password.required">Password is required</span>
                  </div>
                </div>
                <a href="#">Forgot your password?</a><br>
                <div class="form-group">
                  
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
                </b-card>
              </div>
            </b-col> 
            <b-col md="6"> 
              <div>
                <b-card bg-variant="" text-variant="dark" border-variant="dark">
              <form @submit.prevent="handleSubmit">
                <div class="form-group">
                  <label for="Username">Username</label>
                  <input type="text" v-model="user2.userName" id="username2" name="username" class="form-control" placeholder = "Enter Your Username" :class="{ 'is-invalid': submitted && $v.user2.username.$error }" />
                  <div v-if="submitted && !$v.user2.username.required" class="invalid-feedback">Username is required</div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="user2.password" id="password2" name="password" class="form-control" placeholder = "Enter Your Password" :class="{ 'is-invalid': submitted && $v.user2.password.$error }" />
                  <div v-if="submitted && $v.user2.password.$error" class="invalid-feedback">
                    <span v-if="!$v.user2.password.required">Password is required</span>
                  </div>
                </div>
                <a href="#">Forgot your password?</a><br>
                <div class="form-group">
                  <button class="btn btn-primary">Login</button>
                </div>
              </form>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-jumbotron>
  </div>
</template>

<script>
    import { required } from "vuelidate/lib/validators";

    export default {
        name: "app",
        data() {
            return {
                user1: {
                    username: "",
                    password: ""
                    
                },
                submitted: false,
                
                
                user2: {
                    username: "",
                    password: ""
                },
                
                submitted: false,
            };
        },
        validations: {
            user1: {
                username: { required },
                password: { required }                
            },
            user2: {
                username: { required },
                password: { required }                
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user1));
            }
        }
    };
</script>

<style>
#form{
  margin-top: 20px;
  
}
</style>