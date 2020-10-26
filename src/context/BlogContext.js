import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "deleteBlog":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "addBlog":
      return [
        ...state,
        {
          title: action.payload.title,
          id: Math.floor(Math.random() * 99999),
          content: action.payload.content,
        },
      ];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content,callback) => {
    dispatch({
      type: "addBlog",
      payload: { title, content },
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteBlog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
