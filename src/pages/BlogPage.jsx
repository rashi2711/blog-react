import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';
import BlogDetail from '../components/BlogDetail';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true); 
    let url = `${baseUrl}`; 
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Fetched Data:", data);

      if (data && data.posts) {
        const foundBlog = data.posts.find(post => post.id === blogId); 
        if (foundBlog) {
          setBlog(foundBlog); 
          setRelatedBlogs(data.posts.filter(post => post.id !== blogId)); 
        } else {
          console.warn("No blog found for the given ID:", blogId);
          setBlog(null);
          setRelatedBlogs([]); 
        }
      } else {
        console.warn("No posts found in the data:", data);
        setBlog(null);
        setRelatedBlogs([]);
      }
    } catch (error) {
      console.error("Error in fetching data:", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    
    setLoading(false); 
  }

  useEffect(() => {
    console.log("Fetching data for Blog ID:", blogId);
    if (blogId) {
      fetchRelatedBlogs(); 
    }
  }, [blogId]);

  return (
    <div className="p-4">
      <Header />
      <div className="my-4">
        <button 
          onClick={() => navigate(-1)} 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
      {loading ? (
        <div className="text-center text-gray-500"><p>Loading...</p></div>
      ) : blog ? (
        <div>
          <BlogDetail post={blog} />
          <h2 className="text-2xl font-semibold mt-6 mb-4">Related Blogs</h2>
          <div className="space-y-4">
            {relatedBlogs.length > 0 ? (
              relatedBlogs.map((post) => (
                <div key={post.id}>
                  <BlogDetail post={post} />
                </div>
              ))
            ) : (
              <p>No related blogs found.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500"><p>No blog found</p></div>
      )}
    </div>
  );
};

export default BlogPage;
