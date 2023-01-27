const getAll = (article_id) => {
  return fetch(
    `http://localhost:3333/articles/${article_id}/comments`,

    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw "Something went wrong";
      }
    })

    .then((resJson) => {
      return resJson;
    })
    .catch((error) => {
      console.log("Err", error);
      return Promise.reject(error);
    });
};

const addComment = (article_id, comment_text) => {
  return fetch(  `http://localhost:3333/articles/${article_id}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment_text
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request";
      } else {
        throw "Something went wrong";
      }
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

const deleteComment = (comment_id) => {
  return fetch("http://localhost:3333/comments/" + comment_id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request";
      } else {
        throw "Something went wrong";
      }
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
};

export const commentsService = {
  getAll,
  addComment,
  deleteComment,
};
