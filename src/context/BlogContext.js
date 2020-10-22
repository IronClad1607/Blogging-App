import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
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

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
