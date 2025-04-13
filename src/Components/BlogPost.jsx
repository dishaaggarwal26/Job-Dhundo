import React, { useState } from "react";

const BlogPost = () => {
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadDescription, setUploadDescription] = useState("");
  const [uploadImages, setUploadImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadCategory, setUploadCategory] = useState("");
  const [uploadAuthor, setUploadAuthor] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadImages([file]);
      setPreviewImages([URL.createObjectURL(file)]);
    } else {
      setUploadImages([]);
      setPreviewImages([]);
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    alert("Your blog post has been submitted!");

    console.log({
      title: uploadTitle,
      description: uploadDescription,
      author: uploadAuthor,
      category: uploadCategory,
      image: uploadImages[0]
    });

    // Reset all fields
    setUploadTitle("");
    setUploadDescription("");
    setUploadImages([]);
    setPreviewImages([]);
    setUploadCategory("");
    setUploadAuthor("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4 md:px-10"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/young-woman-pointing-finger-her-phone-gasping-wondered-talking-about-smartphone-app-showing-s_1258-120065.jpg?t=st=1744560932~exp=1744564532~hmac=fd8ec4aac9cbbcb2d2b24965d25b892608a0acda524bd40818f9275afe9e111a&w=1380')",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-6 md:p-10 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Post Your Blog Here
          </h2>
          <form onSubmit={handlePostSubmit} className="space-y-5">
            <input
              type="text"
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full p-3 border border-gray-300 rounded-xl cursor-pointer"
              required
            />

            <textarea
              value={uploadDescription}
              onChange={(e) => setUploadDescription(e.target.value)}
              placeholder="Write your blog content..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-xl cursor-pointer focus:border-pink-500 focus:outline-none transition-all duration-200"
              required
            />

            <input
              type="text"
              value={uploadAuthor}
              onChange={(e) => setUploadAuthor(e.target.value)}
              placeholder="Author name"
              className="w-full p-3 border border-gray-300 rounded-xl cursor-pointer"
              required
            />

            <select
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl cursor-pointer"
              required
            >
              <option value="">Select a category</option>
              <option value="Startups">Startups</option>
              <option value="Security">Security</option>
              <option value="AIs">AI</option>
              <option value="Apps">Apps</option>
              <option value="Tech">Tech</option>
              <option value="Works">Works</option>
              <option value="Career Advice">Career Advice</option>
            </select>

            {/* Upload Image Button */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <label className="bg-pink-300 text-white px-2 py-1 rounded-xl cursor-pointer hover:bg-pink-500 transition">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required
                />
              </label>
              <span className="text-gray-600 text-sm mt-2 md:mt-0">
                {uploadImages.length > 0
                  ? uploadImages[0].name
                  : "No file chosen"}
              </span>
            </div>

            {/* Preview Image */}
            {previewImages.length > 0 && (
              <div className="mt-4">
                <img
                  src={previewImages[0]}
                  alt="Preview"
                  className="rounded-xl w-full max-w-md shadow-md"
                />
              </div>
            )}

            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition cursor-pointer"
            >
              Submit Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
