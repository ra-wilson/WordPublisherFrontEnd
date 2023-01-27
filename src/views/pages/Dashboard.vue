<template>
  <Navigation />

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <div class="card text-center">
          <div class="card-header">
            <h3>Dashboard</h3>
          </div>
          <div class="card-body">
            <div class="card grid-text-center">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-primary">
                      <router-link to="/articles">View Articles</router-link>
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-primary">
                      <router-link to="/articles/add">Add Article</router-link>
                    </button>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-primary">
                      <router-link to="/users">View Users</router-link>
                    </button>
                  </div>
                  <div class="col-6">
                    <button class="btn btn-primary">
                      <router-link to="/users/add">Add User</router-link>
                    </button>
                  </div>
                  <div class="col-12" v-on:click="handleSubmit">
                    <button class="btn btn-primary" id="logout">Log out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import { userService } from "../../services/users.service";

export default {
  components: { Navigation },

  mounted() {
    console.log(localStorage.getItem("session_token"));
  },

  methods: {
    handleSubmit(e) {
      userService
        .logout()
        .then((result) => {
          console.log("See you soon!");
          this.$router.push("/articles");
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>


