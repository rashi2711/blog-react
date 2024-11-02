import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogPosts = useCallback(async (page = 1, filter = {}) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    if (filter.category) url += `&category=${filter.category}`;
    if (filter.tag) url += `&tag=${filter.tag}`;

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log("Fetched Data:", data); 

      if (data && data.posts) {
        setPage(data.page);
        setTotalPages(data.totalPages);
        setPosts(data.posts);
      } else {
        console.warn("No posts in response:", data);
        setPosts([]);
      }
    } catch (error) {
      console.error("Error in fetching data:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchBlogPosts(newPage);
  };

  const value = {
    loading,
    posts,
    page,
    totalPages,
    handlePageChange,
    fetchBlogPosts,
    setLoading, 
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
