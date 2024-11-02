import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContextProvider";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    fetchBlogPosts(page);
  }, [location.pathname, location.search, fetchBlogPosts]); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
