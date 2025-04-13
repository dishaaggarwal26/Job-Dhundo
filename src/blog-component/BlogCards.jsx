import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';

const BlogCards = ({ blogs }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start">
      {blogs.map((blog) => (
          <motion.div
          key={blog.id}
          className="p-5 shadow-lg rounded cursor-pointer bg-white hover:shadow-xl transition"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
        <Link
          to={`/blog/${blog.id}`}
          key={blog.id}
          className="p-5 shadow-lg rounded cursor-pointer"
        >
          <div>
            <img
              src={blog.image}
              alt=""
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published: {blog.published_date}
          </p>
        </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogCards;
