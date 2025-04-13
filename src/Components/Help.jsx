import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQ from "../HomeData/FAQ";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";

const Help = () => {
    const [search, setSearch] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const quickSolutions = [
        "How can I deactivate my header account?",
        "How can I update/edit my Profile?",
        "I do not want my current employer to have access to my profile. How can I block a recruiter?",
        "Do I need to pay to apply to a job or get an interview call? / Recruiters are asking me to pay to schedule interview for job?"
    ];

    const browseTopics = [
        "Create Nualni Profile",
        "Search",
        "Apply",
        "Getting around Nualni",
        "Settings",
        "Security Advice"
    ];

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="mb-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold mb-6">Hi, How can we help you?</h1>

                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{
                        scale: 1,
                        boxShadow: isSearchFocused
                            ? "0 0 0 3px rgba(59, 130, 246, 0.5)"
                            : "0 0 0 0px rgba(59, 130, 246, 0)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full max-w-md">
                    <motion.input
                        type="text"
                        placeholder="Search by keyword"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        className="border-2 border-gray-800 px-6 py-3 w-full rounded-full focus:outline-none focus:border-blue-500 transition-all"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }} />
                    <motion.div
                        animate={{
                            opacity: isSearchFocused ? 0 : 1,
                            y: isSearchFocused ? 20 : 0
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-4 top-3 text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-10">
                <h2 className="text-xl font-bold mb-4">QUICK SOLUTION</h2>
                <p className="text-gray-600 mb-4">as per the recent search trend</p>
                <div className="space-y-3">
                    {quickSolutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="p-3 border-l-4 border-pink-500 bg-pink-50 hover:bg-gray-200 cursor-pointer">
                            {solution}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mb-10">
                <h2 className="text-xl font-bold mb-4">BROWSE BY TOPIC</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {browseTopics.map((topic, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 50, }}
                            className="p-4 border rounded shadow hover:shadow-md hover:underline cursor-pointer text-center">
                            {topic}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-12 text-center">
                <p className="text-lg font-semibold">Still need help?</p>
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-800 transition-all flex items-center justify-center gap-2 h-12">
                        <a href='https://wa.me/9873496767?text=Hello How can I help you ?' target='_blank'
                            className="flex items-center gap-2">
                            <FaWhatsappSquare className="text-2xl bg-green-400 hover:bg-green-600" />
                            Chat with Us</a>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-500 transition-all flex items-center justify-center gap-2 h-12">
                        <a href='mailto:beyourown111@gmail.com?subject=Help Request&body=Hello, I need help with...'
                            className="flex items-center gap-2"><FaEnvelope className="text-xl" />
                            Email Support</a>
                    </motion.button>
                </div>
            </motion.div>

            <FAQ />
        </div>
    );
};

export default Help;