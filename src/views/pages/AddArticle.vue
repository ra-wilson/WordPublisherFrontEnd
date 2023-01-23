<template>
  <Navigation />
  <div class="container-fluid w-100">
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <div class="login ">
          <h1 class="header-center">Add Article</h1>

          <form @submit.prevent="handleSubmit">
            <div class="form-group was-validated">
              <label class="form-label" for="email">Email: </label>
              <input
                class="form-control"
                type="email"
                name="email"
                v-model="email"
                required
              />
              <div v-show="submitted && !email">Email is required</div>

              <div class="invalid-feedback">Please enter your email address</div>
            </div>

            <br /><br />

            <div class="form-group was-validated">
              <label class="form-label" for="password">Password: </label>
              <input
                class="form-control"
                type="password"
                name="password"
                v-model="password"
                required
              />
              <div v-show="submitted && !password">Password is required</div>
              <div class="invalid-feedback">
                        Please enter your email address
                    </div>
            </div>
            <br /><br />

            <p>{{ email + " " + password }}</p>

            <button class="btn btn-success w-100">Login</button>
            <div v-if="error">{{ error }}</div>
          </form>
        </div>

      </div>

    </div>
  </div>
  
</template>

<script>
import { userService } from '../../services/users.service';
import Navigation from "../components/Navigation.vue";

export default {

  components: {Navigation},

  data() {
    return {
      email: "",
      password: "",
    };
  },


  mounted(){
    userService.login(email, password)
    .then(result => {
      console.log("Auth - go to dash")
      this.$router.push('/dashboard');
    })
    .catch(error => {
      this.error = error;
      this.laoding = false;
    })
  },


  methods: {
    handleSubmit(e) {
  
      this.submitted = true;
      const { email, password } = this;
      if (!(email && password)) {
        return;
      }

      if (!EmailValidator.validate(email)) {
        this.error = "Email must be a valid email.";
        return;
      }

      const password_pattern = /^(?=(.*[a-z]))(?=(.*[A-Z])(?=.*[a-zA-z]).{8,)$/;

      if (!password_pattern.test(password)) {
        this.error = "Password not strong enough.";
        return;
      }
    },
  },
};

</script>