const getAll = () => {
  return fetch("http://localhost:3333/articles")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
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

const getArticle = (article_id) => {
  return fetch("http://localhost:3333/articles/" + article_id)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
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

}

const addArticle = (title, article_text, author) => {
  return fetch("http://localhost:3333/articles", {
    method: "POST",
    headers: {
      "X-Authorization": localStorage.getItem("session_token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      article_text: article_text,
      author: author
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request";
      } else if (response.status === 401) {
        throw "Unauthorized";
      } else {
        throw "Something went wrong";
      }
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
}


const editArticle = (article_id, title, article_text, author) => {
  return fetch("http://localhost:3333/articles/" + article_id, {
    method: "PATCH",
    headers: {
      "X-Authorization": localStorage.getItem("session_token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      article_text: article_text,
      author: author
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        throw "Bad Request";
      } else if (response.status === 401) {
        throw "Unauthorized";
      } else {
        throw "Something went wrong";
      }
    })
    .catch((error) => {
      console.log("err", error);
      return Promise.reject(error);
    });
}
const deleteArticle = (article_id) => {
  return fetch("http://localhost:3333/articles/" + article_id, {
    method: "DELETE",
    headers: {
      "X-Authorization": localStorage.getItem("session_token"),
      "Content-Type": "application/json"
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
}


export const articleService = {
    getAll,
    getArticle,
    addArticle,
    editArticle,
    deleteArticle
}