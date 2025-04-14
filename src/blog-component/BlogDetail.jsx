import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from './BlogsData.json';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogsData.find((b) => b.id === parseInt(id));
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  if (!blog) return <div className="text-center py-10">Blog not found</div>;

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-[400px] object-cover rounded-lg mb-6 shadow"
      />

      {/* Blog Title & Info */}
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        By {blog.author} | Published: {blog.published_date} | {blog.reading_time}
      </p>

      {/* Like/Dislike Buttons */}
      <div className="flex gap-6 items-center mb-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-green-600 hover:text-green-800 transition cursor-pointer"
        >
          <FaThumbsUp /> {likes}
        </button>
        <button
          onClick={handleDislike}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 transition cursor-pointer"
        >
          <FaThumbsDown /> {dislikes}
        </button>
      </div>

      {/* Blog Content */}
      <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line cursor-pointer">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetail;

