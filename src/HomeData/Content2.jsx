import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaJoget } from 'react-icons/fa6';
import { GiGymBag } from 'react-icons/gi';
import { MdAddModerator } from 'react-icons/md';
import { SlideLeft } from '../Utility/Animation';

const Content2data = [
  {
    id: 1,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <FaJoget />,
    bgColor: "#008000"
  },
  {
    id: 2,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <GiGymBag />,
    bgColor: "#008080"
  },
  {
    id: 3,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <MdAddModerator />,
    bgColor: "#00FFFF"
  },
  {
    id: 4,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <FaDumbbell />,
    bgColor: "#0000FF"
  },
];

const Content2 = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="space-y-4 text-center max-w-[500px] mx-auto mb-8">
        <h1 className="uppercase font-semibold text-pink-500">Why Choose Us</h1>
        <p className="font-semibold text-3xl leading-tight">
          Benefits of Online Searching Services with Us
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Content2data.map((item) => (
          <motion.div
            key={item.id}
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-white"
          >
            <div
              style={{ backgroundColor: item.bgColor }}
              className="w-12 h-12 rounded-lg flex justify-center items-center text-white text-2xl"
            >
              {item.icon}
            </div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desp}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Content2;
