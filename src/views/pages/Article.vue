<template>
  <Navigation />
  <div class="container-fluid">
    <h1 class="text-center">{{ article.title }}</h1>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <p>{{ article.article_text }}</p>

        <span class="badge bg-primary rounded-pill">{{ article.author }}</span>
        <span class="badge rounded-pill">{{ article.date_published }}</span>
      </div>

      <div class="text-center">
        <h2>Comments</h2>
        <ul v-if="comments.length" class="list-group list-group-flush">
          <li
            v-for="comment in comments"
            :key="comment.comment_id"
            class="list-group-item d-flex justify-content-between"
          >
            <p>{{ comment.comment_text }}</p>

            <button
              class="btn btn-danger"
              @click="handleDelete(comment.comment_id)"
            >
              Delete
            </button>
          </li>
        </ul>
        <div class="form-group w-50 mx-auto" id="new-comment">
          <textarea
            class="form-control"
            v-model="comment_text"
            rows="1"
          ></textarea>
        </div>
        <button class="btn btn-primary" @click="handleComment">
          Post Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { articleService } from "../../services/articles.service";
import { commentsService } from "../../services/comments.service";

import Navigation from "../components/Navigation.vue";

export default {
  components: { Navigation, Comment },

  data() {
    return {
      article: {},
      comments: [],
      num_comments: null,
      comment: "",
      comment_text: "",
      error: "",
      success: false,
    };
  },

  created() {
    this.loading = true;

    articleService
      .getArticle(this.$route.params.id)
      .then((article) => {
        this.article = article;
        commentsService
          .getAll(this.$route.params.id)
          .then((comments) => {
            this.comments = comments;
            this.num_comments = comments.length;
          })
          .catch((error) => (this.error = error));
      })
      .catch((error) => (this.error = error));
  },
  methods: {
    handleComment() {
      if (this.comment_text !== "") {
        commentsService
          .addComment(this.article_id, this.comment_text)
          .then(() => {
            this.comment_text = "";
            this.comments.push(this.comment);
            this.success = true;
          })
          .catch((error) => {
            this.error = error;
            console.log(error);
          });
      }
    },
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
  refreshComments() {
    this.comments.loading = true;
    commentService.getAll(this.$route.params.id).then((comments) => {
      this.comments = comments;
      this.num_comments = comments.length;
      this.loading = false;
    });
  },
};
</script>
