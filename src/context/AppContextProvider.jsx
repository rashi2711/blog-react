import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalpages, setTotalpages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPages(data.pages);
      setTotalpages(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      console.log("Error in fetching data:", error);
      setPages(1);
      setTotalpages(null);
      setPosts([]);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPages(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    pages,
    setPages,
    totalpages,
    setTotalpages,
    handlePageChange,
    fetchBlogPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
