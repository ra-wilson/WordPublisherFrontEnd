<template>

  <Navigation />
  <div class="container">
    <h1 class="text-center my-5">Welcome to my blog!</h1>

<div v-if="loading" class="text-center my-5">
    <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</div>

<div class="row" v-if="articles.length">
    <div v-for="article in articles" :key="article.article_id" class="col-lg-4 col-md-6">
        <div class="card mb-5 shadow-sm">
            <div class="card-body">
                <h2 class="card-title">{{ article.title }}</h2>
                <div class="card-subtitle mb-2 text-muted">
                    <span class="badge badge-primary rounded-pill">{{ article.author }}</span>
                    <span class="badge badge-secondary rounded-pill">{{ article.date_published }}</span> 
                </div>
                <div class="mr-1">
                    <button class="btn btn-outline-danger rounded-1" id="delete">Delete</button>
                    <router-link :to="'/article/' + article.article_id" class="btn btn-outline-primary rounded-1 p-10">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import { articleService } from "../../services/articles.service";
import Navigation from "../components/Navigation.vue";
export default {

  components: {Navigation},
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

<style scoped src="../../styles/home.css"></style>
