import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "deleteBlog":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "addBlog":
      return [
        ...state,
        {
          title: `Blog Post #${state.length + 1}`,
          id: Math.floor(Math.random() * 99999),
        },
      ];

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({
      type: "addBlog",
    });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteBlog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost,deleteBlogPost },
  []
);
