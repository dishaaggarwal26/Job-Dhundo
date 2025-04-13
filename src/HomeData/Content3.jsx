import React from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../Utility/Animation';

const Content3 = () => {
  const Content3data = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-vector/isometric-job-search-recruitment-composition-white-background-with-text-group-people-holding-megaphone_1284-31078.jpg',
      tag: 'CUSTOMIZE WITH YOUR SCHEDULE',
      title: 'Personalized Professional Online Job Platform on your Schedule',
      subtitle:
        'McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage...',
    },
    {
      id: 2,
      img: 'https://static.vecteezy.com/system/resources/previews/025/441/277/non_2x/job-hiring-and-job-search-concept-headhunting-we-are-hiring-tiny-people-interviewed-for-job-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg',
      tag: 'CUSTOMIZE WITH YOUR SCHEDULE',
      title: 'Personalized Professional Online Job Platform on your Schedule',
      subtitle:
        'McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage...',
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14">
      {Content3data.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 gap-x-12 my-14"
        >
          {/* Image Section */}
          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            className={`flex justify-center ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
          >
            <img
              src={item.img}
              alt="job"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] h-auto object-contain"
            />
          </motion.div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4">
            <motion.p
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              className="text-sm sm:text-base text-pink-600 font-semibold uppercase"
            >
              {item.tag}
            </motion.p>

            <motion.h2
              variants={SlideUp(0.2)}
              initial="hidden"
              whileInView="visible"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800"
            >
              {item.title}
            </motion.h2>

            <motion.p
              variants={SlideUp(0.2)}
              initial="hidden"
              whileInView="visible"
              className="text-sm sm:text-base text-gray-600 leading-relaxed"
            >
              {item.subtitle}
            </motion.p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-5 py-2 rounded-lg text-sm sm:text-base">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content3;
