import React, { useState } from 'react';

const ShareTestimonial = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobRole: '',
    quote: '',
    image: null,
    date: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('jobRole', formData.jobRole);
    formDataToSend.append('quote', formData.quote);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('rating', 5); // Hardcoding for now
    formDataToSend.append('details', formData.details);
    formDataToSend.append('image', formData.image);
  
    try {
      const response = await fetch('https://jobdhundo-backend-nl7q.onrender.com/api/testimonials', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert('Success story submitted!');
        setFormData({
          name: '',
          jobRole: '',
          quote: '',
          image: null,
          date: '',
          details: '',
        });
      } else {
        alert('Failed to submit testimonial');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting testimonial');
    }
  };
  
  

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Share Your Success Story</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full  px-4 py-2 border rounded-lg ring-2 hover:focus:ring-pink-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Job Role</label>
          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg ring-2 hover:focus:ring-pink-500 "
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Quote</label>
          <input
            type="text"
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg  ring-2 hover: focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block p-4 w-fit mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="outline-1 ring-1 hover:focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium ">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg "
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-lg  ring-1  hover:focus:ring-pink-500"
          />
        </div>
        <button
          type="submit"
          className="px-3 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-600 transition cursor-pointer"
        >
          Submit Testimonial
        </button>
      </form>
    </div>
  );
};

export default ShareTestimonial;
