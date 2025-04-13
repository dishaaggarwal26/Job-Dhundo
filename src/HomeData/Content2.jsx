import React from "react";
import { motion } from "framer-motion";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from "../Utility/Animation";
import { FaJoget } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";

const Content2data = [
  {
    id: 1,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <FaJoget />,
    bgColor: "#008000	",
  },
  {
    id: 2,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",

    icon: <GiGymBag />,
    bgColor: "#008080	",
  },
  {
    id: 3,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <MdAddModerator />,
    bgColor: "##00FFFF",
  },
  {
    id: 4,
    title: "One-on-One Interaction",
    desp: "All of our special education experts have a degree in special education.",
    icon: <FaDumbbell />,
    bgColor: "##0000FF",
  },
];
const Content2 = () => {
  return (
    <div>
      <div className="container ">
        <div className="space-y-4 p-6 text-centre max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font font-semibold text-pink-500">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of Online Seraching Services with us
          </p>
        </div>
        <div className="container grid grid-cols-1 ml-0  sm:grid-cols-2 md:grid-cols-4 md:ml-20  lg:ml-25 gap-4 ">
          {Content2data.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(0.3)}
                initial="hidden"
                whileInView={"visible"}
                className="w-60 ml-10 space-y-4 p-8 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] md:ml-0 lg:ml-0"
              >
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="py-4 px-2 text-4xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desp}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content2;
