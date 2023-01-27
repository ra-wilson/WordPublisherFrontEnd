<template>
  <div class="text-center">
    <h2>Comments</h2>
    <ul v-if="comments.length" class="list-group list-group-flush">
      <li
        v-for="comment in comments"
        :key="comment.comment_id"
        class="list-group-item"
      >
        <p>{{ comment.comment_text }}</p>
      </li>
    </ul>
    <div class="form-group w-50 mx-auto" id="new-comment">
      <textarea class="form-control" v-model="comment_text" rows="1"></textarea>
    </div>
    <button class="btn btn-primary" @click="handleComment">Post Comment</button>
  </div>
</template>

<script>
import { commentsService } from "../../services/comments.service";
export default {
  data() {
    return {
      comment: "",
      comment_text: "",
      comments: [],
      num_comments: null,
      article_id: this.$route.params.id,
      success: false,
      error: null,
    };
  },
//   created() {
//     this.refreshComments();
//   },
  methods: {
    handleComment() {
      if (this.comment_text !== "") {
        commentsService
          .addComment(this.comment_text, this.article_id)
          .then(() => {
            this.comment_text = "";
            this.comments.push({ comment_text: this.comment });
            this.success = true;
          })
          .catch((error) => {
            this.error = error;
            console.log(error);
          });
      }
    },
    // refreshComments() {
    //   this.comments.loading = true;
    //   commentService.getAll(this.$route.params.id).then((comments) => {
    //     this.comments = comments;
    //     this.num_comments = comments.length;
    //     this.loading = false;
    //   });
    // },
    deleteComment(comment_id) {
      commentsService
        .deleteComment(comment_id)
        .then(() => {
          this.refreshComments();
        })
        .catch((error) => {
          this.error = error;
          console.log(error);
        });
    },
  },
};
</script>
