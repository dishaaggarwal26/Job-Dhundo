import React from "react";
import { motion } from "framer-motion";

const EditModal = ({ title, value, setValue, onClose, onSave }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/70 z-50">
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-1/2"
      >
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
      </motion.div>
    </div>
  );
};

export default EditModal;
