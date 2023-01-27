<template>
 
  <div class="container">
    <h2>Comments</h2>
        <ul v-if="comments.length" class="list-group list-group-flush">
            <li v-for="comment in comments" :key="comment.comment_id" class="list-group-item">  {{ comment.comment_id }} </li>
        </ul>
  </div>
</template>

<script>

import { commentService } from "../../services/comments.service";

export default {
  components: {},

  data() {
    return {
      article_id: this.$route.params.id,
      loading: "",
      comments: [],
      num_comments: null,
      comment: "",
      error: "",
      success: false,
    };
  },

  created() {
    this.reloadComments();
  },

  methods: {
    addComment() {
      if (this.comment_text !== "") {
        commentService
          .addComment(this.article_id, this.comment_text)
          .then((response) => {
            this.reloadComments();
            this.comment_text = "";
            this.success = true;
          });
        this.error = error;
        console.log(error);
      }else {
        throw "Invalid comment"
      }
    },
    reloadComments() {
        this.comments.loading = true;
        commentService.getAll(this.$route.params.id)
        .then((comments) => {
            this.comments = comments;
            this.num_comments = comments.length;
            this.loading = false;
        });
  },
  deleteComment(comment_id){
    commentService.deleteComment(comment_id)
    .then(()=> {
        this.reloadComments();
    })
    .catch((error) => {
        this.error = error;
        console.log(error);
    })
  }
}};
</script>
