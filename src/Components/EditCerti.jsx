import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EditCertificationModal = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/70 z-50">
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white p-6 rounded-xl w-11/12 md:w-1/2"
      >
        <h2 className="text-xl font-bold mb-4">Edit Certification</h2>

        <input
          className="w-full p-2 border mb-3 rounded"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Certification Name"
        />
        <input
          className="w-full p-2 border mb-3 rounded"
          name="authority"
          value={formData.authority}
          onChange={handleChange}
          placeholder="Issuing Authority"
        />
        <input
          className="w-full p-2 border mb-3 rounded"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date"
        />

        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-blue-600"
            onClick={() => onSave(formData)}
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditCertificationModal;
