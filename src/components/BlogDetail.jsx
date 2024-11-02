import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetail = ({ post }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4">
      <NavLink to={`/blog/${post.id}`} className="text-xl font-bold text-black hover:underline">
        {post.title}
      </NavLink>
      <p className="text-gray-600 mt-1">
        By <span className="font-semibold">{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="text-blue-500 hover:underline">
          {post.category}
        </NavLink>
      </p>
      <p className="text-sm text-gray-500">Posted on {post.date}</p>
      <p className="mt-2 text-gray-800">{post.content}</p>
      <div className="mt-4 flex gap-2">
        {post.tags && post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="text-blue-500 hover:underline">
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
