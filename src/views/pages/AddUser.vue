<template>
  <Navigation />
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="card-header">
        <h3>Add User</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleNewUser">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input
              type="text"
              class="form-control"
              id="first-name"
              v-model="first_name"
              required
            />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="last-name"
              v-model="last_name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
            />
          </div>

          <br />
          <br />
          <button type="submit" class="btn btn-primary">Add user</button>
          <div class="alert alert-danger" v-if="error" id="poor-password">
            {{ this.error }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { userService } from "../../services/users.service";
import Navigation from "../components/Navigation.vue";
import * as EmailValidator from 'email-validator';
export default {
  components: { Navigation },

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      error: ""
    };
  },
  mounted() {},
  methods: {
    handleNewUser() {
      this.error = "";
      const { first_name, last_name, email, password } = this;


      if (!EmailValidator.validate(email)) {
        this.error = "Email must be a valid email.";
        return;
      }

      const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

       if (!password_pattern.test(password)) {
         this.error = "Password not strong enough.";
        return;
     }


      userService
        .addUser(first_name, last_name, email, password)
        .then(result => {
          this.$router.push("/dashboard");
          console.log("User added.");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
