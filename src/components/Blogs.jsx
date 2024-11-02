import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import BlogDetail from "./BlogDetail";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : posts && posts.length > 0 ? (
        posts.map((post) => <BlogDetail key={post.id} post={post} />)
      ) : (
        <div className="text-center text-gray-500">No blog found</div>
      )}
    </div>
  );
};

export default Blogs;
