import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts(1, { tag });
  }, [tag, fetchBlogPosts]);

  return (
    <div className="p-4">
      <Header />
      <div className="flex items-center my-4">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold text-gray-800 ml-4">
          Blogs tagged with <span className="text-blue-600 capitalize">{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
