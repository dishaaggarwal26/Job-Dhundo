import React from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from './BlogsData.json';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogsData.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="text-center py-10">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        By {blog.author} | Published: {blog.published_date} | {blog.reading_time}
      </p>
      <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
