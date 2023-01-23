<template>
   <Navigation />
  <div class="container-fluid">
    <h1 class="text-center">{{ article.title }}</h1>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <p>{{ article.article_text }}</p>
      </div>
   </div>
  </div>
<CommentList />

</template>

<script>
import { articleService } from "../../services/articles.service";
import { commentService } from "../../services/comments.service";
import CommentList from "../components/CommentList.vue"
import Navigation from "../components/Navigation.vue";


export default {
 
   components: {CommentList, Navigation},

  data() {
    return {
      article: {},
      loading: "",
      comments: [],
      num_comments: null,
      comment: "",
      error: "",
    };
  },



  created(){
   this.article.loading = true;
   this.comments.loading = true;
   
   articleService.getArticle(this.$route.params.id)
   .then((article) => {
      this.article = article;
      commentService.getAll(this.$route.params.id)
      .then((comments) => {
         this.comments = comments;
         this.num_comments = comments.length
      })
      .catch(error => this.error = error)
   })
   .catch(error => this.error = error)
  }
};
</script>
