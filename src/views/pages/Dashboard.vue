<template>
    <div class="container-fluid">
      <h1 class="header">Dashboard</h1>
  
      <p>Welcome to your dashboard.</p>

    </div>
  </template>
  <script>
  import { userService } from "../../services/users.service";
  
  export default {
    data() {
      return {
        articles: [],
        error: [],
        loading: true,
      };
    },
    mounted() {
      articleService
        .getAll()
        .then((articles) => {
          this.articles = articles;
          this.loading = false;
        })
        .catch((error) => (this.error = error));
    },
  };
  </script>
