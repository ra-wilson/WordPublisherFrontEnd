const getAll = () => {
  return fetch(
    `http://localhost:3333/articles/${article_id}/comments`,

    {
      method: 'GET',
      headers: {
        "X-Authorization": localStorage.getItem("session_token"),
        "content-type": "appliaction/json",
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
  return fetch(http)
}


export const commentService = {
  getAll,
};
