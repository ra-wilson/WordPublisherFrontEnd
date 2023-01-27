<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link to="/articles" class="navbar-brand">Home</router-link>
        <div class="ml-auto">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
<router-view />

</template>

<script>
import { userService } from "../../services/users.service";


export default {


  data() {

  },

  mounted() {
    
  },

  methods: {
    handleSubmit(e) {
      userService
      .login(email, password)
      .then(result => {
        console.log("Auth - go to dash");
        this.$router.push("/dashboard");
      })
      .catch((error) => {
        this.error = error;
        this.loading = false;
      });
    },
  },
};
</script>