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

const addArticle = () => {
  return fetch("http://localhost:3333/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article_title: article_title,
      article_text: article_text,
      author: author
    }),
  })
    .then((response) => {
      if (response.status === 200) {
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
    addArticle
}