import React, { useState } from 'react';

const EditEducationModal = ({ data, onClose, onSave }) => {
  const [degree, setDegree] = useState(data.degree);
  const [institution, setInstitution] = useState(data.institution);
  const [year, setYear] = useState(data.year);

  const handleSave = () => {
    onSave({
      ...data,
      degree,
      institution,
      year,
    });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Education</h2>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          placeholder="Institution"
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year & Score"
          className="w-full p-2 border rounded mb-2"
        />
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-pink-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditEducationModal;
