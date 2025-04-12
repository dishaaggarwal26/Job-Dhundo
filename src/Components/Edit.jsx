import React from "react";

const EditModal = ({ title, value, setValue, onClose, onSave }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/70 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <textarea
          className="w-full h-32 border border-gray-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-blue-600"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
