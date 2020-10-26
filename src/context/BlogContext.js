import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "editBlog":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
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
  return (title, content, callback) => {
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

const editBlogPost = (dispatch) => {
  return (id, title, content) => {
    dispatch({
      type: "editBlog",
      payload: {
        id,
        title,
        content,
      },
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    { title: "TEST POST #1", content: "TEST CONTENT #1", id: 1 },
    { title: "TEST POST #2", content: "TEST CONTENT #2", id: 2 },
    { title: "TEST POST #3", content: "TEST CONTENT #3", id: 3 },
  ]
);
