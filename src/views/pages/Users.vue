<template>
  <Navigation />
  <div class="container">
    <h1 class="header">Users</h1>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
    <ol class="list-group list-group-flush" v-if="users.length">
      <li class="list-group-item" v-for="user in users" :key="user.user_id">
        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-5 shadow-sm">
              <div class="card-body">
                <div class="card-title">
                  <h2>{{ user.first_name }} {{ user.last_name }}</h2>
                </div>

                <div class="card-content">
                  <p class="card-text">{{ user.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
import { userService } from "../../services/users.service";
import Navigation from "../components/Navigation.vue";
export default {
  components: { Navigation },
  data() {
    return {
      users: [],
      error: [],
      loading: true,
    };
  },
  mounted() {
    console.log(localStorage.getItem("session_token"));
    userService
      .getAll()
      .then((users) => {
        this.users = users;
        this.loading = false;
      })
      .catch((error) => (this.error = error));
  },
};
</script>
