import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [...state, { title: `Blog Post #${state.length + 1}` }];

    default:
      return state;
  }
};

const addBlogPost = () => {
  dispatch({
    type: "addBlog",
  });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
