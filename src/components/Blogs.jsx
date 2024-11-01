import React, { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';
import Spinner from './Spinner';

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="max-w-3xl mx-auto p-4">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500">No posts available</div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600">
              By <span className="font-bold">{post.author}</span> on <span className="italic">{post.category}</span>
            </p>
            <p className="text-gray-500 mb-4">Posted on {post.date}</p>
            <p className="text-gray-700">{post.content}</p>
            <div className="mt-4">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-blue-500 text-sm mr-2">{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
