<template>

  <Navigation/>
  <div class="container-fluid d-flex align-items-center justify-content-center">
    <div class="card">
      <div class="card-header">
        <h3>Add Article</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="articleTitle">Title:</label>
            <input type="text" class="form-control" id="articleTitle" v-model="title" required>
          </div>
          <div class="form-group">
            <label for="articleText">Article Text:</label>
            <textarea class="form-control" id="articleText" rows="5" v-model="article_text" required></textarea>
          </div>
          <div class="form-group">
            <label for="author">Author:</label>
            <input type="text" class="form-control" id="author" v-model="author" required>
          </div>
          
          <br />
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { articleService } from "../../services/articles.service";
import Navigation from "../components/Navigation.vue";

export default {

  components: { Navigation },

  data() {
    return {
      title: "",
      article_text: "",
      author: "",
    };
  },
  mounted() {
    
  },
  methods: {
    handleSubmit() {
      const { title, article_text, author} = this;
      articleService.addArticle(title, article_text, author)
        .then(result => {
          this.$router.push("/articles");
          console.log("Article added.");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
