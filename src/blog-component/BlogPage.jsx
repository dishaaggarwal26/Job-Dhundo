import BlogsData from './BlogsData.json';
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import CategorSelection from "./CategorSelection";
import Sidebar from "./Sidebar";
import BlogCards from "./BlogCards";


const BlogPage = ({ blogList }) => { //passing bloglist
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // number of blogs per page
  const [selectedCategory, setselectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  
  const filtered = selectedCategory
    ? BlogsData.filter(blog => blog.category === selectedCategory)
    : BlogsData;

  const totalPages = Math.ceil(filtered.length / pageSize);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);
    setBlogs(paginated);
  }, [currentPage, selectedCategory,blogList]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setselectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category section */}
      <div>
        <CategorSelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* BlogCards section */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCards
          blogs={blogs}
        />
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Pagination */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default BlogPage;

