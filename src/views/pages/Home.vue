<template>

  <Navigation />
  <div class="container">
    <h1 class="header">Welcome to my blog!</h1>

    <em v-if="loading">Loading articles...</em>
    <ol class="list-group list-group-flush" v-if="articles.length">
      <li class="list-group-item" id="article-preview" v-for="article in articles" :key="article.article_id">
        
          
          <!-- {{article.article_text}} -->

          <div class="row">
        <div class="col-lg-6">
          <div class="card mb-5 shadow-sm">
          

            <div class="card-body">
              <div class="card-title">
                <h2>{{ article.title }}</h2>
              </div>

              <div class="card-content">
                <span class="badge bg-primary rounded-pill">{{ article.author }}</span>
        <span class="badge rounded-pill">{{ article.date_published }}</span> 
              </div>
          
              <div class="btn rounded-0 float-end"
                ><router-link :to="'/article/' + article.article_id" >Read More</router-link></div>
            </div>
          </div>
        </div>
        </div>

      </li>
    </ol>
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
