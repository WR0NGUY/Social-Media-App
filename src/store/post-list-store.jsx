import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to Enjoy a lot. Peace Out.",
    reactions: 0,
    userId: "user-9",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "PASS",
    body: "Completed my bachelors Degree After 4 years of Learning and Growing.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbleivable"],
  },
];

export default PostListProvider;
