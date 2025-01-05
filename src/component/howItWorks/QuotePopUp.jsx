import React, { useState } from "react";
import { motion } from "framer-motion";
const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(true); // Controls the popup visibility
  const closeModal = () => {
    setIsOpen(false);
  };
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          className="w-full max-w-lg bg-gray-800 text-white p-8 rounded shadow-lg relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            '--secondary-custom-variant': '#013220',
            '--secondary-dark': '#000000',
            background: 'linear-gradient(100.23deg, var(--secondary-custom-variant), var(--secondary-dark))',
          }}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            onClick={closeModal}
          >
            &times;
          </button>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
            Designs for Every Budget
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mb-6"
          >
            Get your dream home today. Let our experts help you.
          </motion.p>
          <motion.form
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">Email ID</label>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">Phone Number</label>
              <div className="flex items-center">
                <span className="bg-white text-gray-800 p-2 rounded-l">+91</span>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-2 rounded-r bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center space-x-2">
              <input type="checkbox" id="whatsapp" className="w-4 h-4" />
              <label htmlFor="whatsapp" className="text-sm">
                Send me updates on WhatsApp
              </label>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium">Property Name</label>
              <input
                type="text"
                placeholder="Property Name"
                className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)" }}
            >
              <button
                type="submit"
                className="w-full py-2 bg-[#104438]/30 rounded text-white font-semibold transition-all duration-300"
              >
                GET FREE QUOTE
              </button>
            </motion.div>
          </motion.form>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm"
          >
            By submitting this form, you agree to the
            <a href="#" className="underline">
              <span>{" "}</span> privacy policy
            </a>
            &
            <a href="#" className="underline">
              terms and conditions
            </a>
            .
          </motion.p>
        </motion.div>
      </div>
    )
  );
};
export default PopupForm;





















