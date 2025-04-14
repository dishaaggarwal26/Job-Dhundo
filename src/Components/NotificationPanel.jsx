import React from 'react';
import { motion } from 'framer-motion';

const NotificationPanel = ({ onClose }) => {
  return (
    <motion.div
      key="notification-panel"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4 }}
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50"
    >
      {/* Header */}
      <div className='flex justify-between items-center border-b pb-2'>
        <h2 className='text-xl font-bold'>Notifications</h2>
        <button onClick={onClose} className='text-pink-600 font-extrabold text-3xl leading-none'>×</button>
      </div>

      {/* Today */}
      <div className='mt-4'>
        <h3 className='text-sm font-semibold text-gray-500 mb-2'>Today</h3>
        <ul className='space-y-2'>
          <li className='flex justify-between items-center text-gray-700'>
            <span>🔔 New job posted: Frontend Developer</span>
            <span className="text-xs text-gray-400">2 hrs ago</span>
          </li>
          <li className='flex justify-between items-center text-gray-700'>
            <span>💬 Message from recruiter</span>
            <span className="text-xs text-gray-400">5 hrs ago</span>
          </li>
        </ul>
      </div>

      {/* Yesterday */}
      <div className='mt-6'>
        <h3 className='text-sm font-semibold text-gray-500 mb-2'>Yesterday</h3>
        <ul className='space-y-2'>
          <li className='flex justify-between items-center text-gray-700'>
            <span>📢 Blog: Resume Writing Tips</span>
            <span className="text-xs text-gray-400">Apr 12, 3:15 PM</span>
          </li>
        </ul>
      </div>

      {/* Earlier */}
      <div className='mt-6'>
        <h3 className='text-sm font-semibold text-gray-500 mb-2'>Earlier</h3>
        <ul className='space-y-2'>
          <li className='flex justify-between items-center text-gray-700'>
            <span>🎉 You’ve completed your profile</span>
            <span className="text-xs text-gray-400">Apr 9, 10:00 AM</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NotificationPanel;
