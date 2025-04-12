import React, { useState } from 'react';

const PostCompany = () => {
  const [job, setJob] = useState({
    title: '',
    company: '',
    level:'',
    location: '',
    salary: '',
    jobType: 'Full-Time',
    description: '',
    skills: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });

      if (response.ok) {
        setMessage('✅ Job posted successfully!');
        setJob({
          title: '',
          company: '',
          location: '',
          salary: '',
          jobType: 'Full-Time',
          description: '',
          skills: '',
        });
      } else {
        setMessage('❌ Failed to post job.');
      }
    } catch (error) {
      console.error('Error posting job:', error);
      setMessage('⚠ Something went wrong.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mt-10 border-2 border-blue-300">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">🚀 Post a New Job</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Job Title */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="w-full p-3 border-2 border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />

        {/* Company Name */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleChange}
          className="w-full p-3 border-2 border-green-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          required
        />

        {/* Job Location or Level Dropdown */}
        <select
          name="location"
          value={job.location}
          onChange={handleChange}
          className="w-full p-3 border-2 border-purple-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 outline-none"
          required
        >
          <option value="">Select Location</option>
          <option value="Remote">🌍 Remote</option>
          <option value="Bangalore">🏙 Bangalore</option>
          <option value="Mumbai">🌆 Mumbai</option>
          <option value="Delhi">🏢 Delhi</option>
          <option value="Hyderabad">🌇 Hyderabad</option>
        </select>
        <select
          name="level"
          value={job.level}
          onChange={handleChange}
          className="w-full p-3 border-2 border-purple-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 outline-none"
          required
        >
          <option value="">Select Level</option>
          <option value="Beginner">🌍 Beginner</option>
          <option value="Intermediate">🏙 Intermediate</option>
          <option value="Senior">🌆 Senior</option>
            </select>
 

        {/* Job Type Dropdown */}
        <select
          name="jobType"
          value={job.jobType}
          onChange={handleChange}
          className="w-full p-3 border-2 border-red-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 outline-none"
        >
          <option value="Full-Time">🕒 Full-Time</option>
          <option value="Part-Time">⏳ Part-Time</option>
          <option value="Internship">🎓 Internship</option>
          <option value="Contract">📄 Contract</option>
        </select>

        {/* Job Description */}
        <textarea
          name="description"
          placeholder="Describe the job role, responsibilities, and requirements..."
          value={job.description}
          onChange={handleChange}
          className="w-full p-3 border-2 border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
          rows={5}
          required
        />

        {/* Salary Input */}
        <input
          type="text"
          name="salary"
          placeholder="Salary (e.g., ₹5 LPA)"
          value={job.salary}
          onChange={handleChange}
          className="w-full p-3 border-2 border-yellow-300 rounded-md focus:ring-2 focus:ring-yellow-500 outline-none"
        />
        {/* Skills */}
        <input
          type="text"
          name="skills"
          placeholder="Required Skills (comma-separated)"
          value={job.skills}
          onChange={handleChange}
          className="w-full p-3 border-2 border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className=" bg-pink-600 text-white py-3 px-4 rounded-lg text-lg font-semibold"
        >
          🚀 Post Job
        </button>

        {/* Success/Error Message */}
        {message && <p className="text-center mt-3 text-lg font-semibold">{message}</p>}
      </form>
    </div>
  );
};

export default PostCompany;
