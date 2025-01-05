import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const KitchenLayoutSelector = () => {
  const [selectedLayout, setSelectedLayout] = useState("");
  const navigate = useNavigate();

  const layouts = [
    {
      id: "l-shaped",
      name: "The L-Shaped Kitchen",
      img: "/Images/l-shape.jpg",
      title: "Effortless Corners",
      desc: "Designed to make the most out of corner spaces, it offers an open and efficient design that allows for easy cooking and socializing without a hitch.",
    },
    {
      id: "straight",
      name: "The Straight Kitchen",
      img: "/Images/staright.jpg",
      title: "Sleek Simplicity",
      desc: "A minimalist design, ideal for small spaces, streamlined functionality, and modern aesthetic.",
    },
    {
      id: "u-shaped",
      name: "The U-Shaped Kitchen",
      img: "/Images/u-shape-modular-kitchen.jpg",
      title: "A Chef's Haven",
      desc: "Featuring abundant storage and counter space, this layout creates a dedicated work triangle for a chef's paradise.",
    },
    {
      id: "parallel",
      name: "The Parallel Kitchen",
      img: "/Images/parallel.jpg",
      title: "Double Efficiency",
      desc: "Double the efficiency with two countertops, ideal for multitasking and creating a well-organized workflow.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="p-6 md:p-16 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex flex-col items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-center text-2xl font-bold text-gray-800 mb-4"
          data-aos="fade-up"
        >
          Select the Layout of Your Kitchen
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-500 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Want to know more?{" "}
          <a href="#" className="text-green-500 underline">
            Check here
          </a>
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {layouts.map((layout, index) => (
            <motion.div
              key={layout.id}
              variants={itemVariants}
              onClick={() => setSelectedLayout(layout.id)}
              className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-transform ${
                selectedLayout === layout.id
                  ? "border-green-500 bg-green-100 scale-105"
                  : "border-gray-200 hover:shadow-md hover:scale-105"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={layout.img}
                alt={layout.name}
                className="w-60 h-40 object-contain mb-3"
              />
              <span className="text-gray-800 font-semibold">{layout.name}</span>
              <div className="p-4 text-left">
                <span className="block text-gray-900 font-bold">{layout.title}</span>
                <span className="block text-gray-800 font-semibold">{layout.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="flex justify-between items-center mt-6"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="text-red-600 font-semibold"
            data-aos="fade-up"
            data-aos-delay="500"
            onClick={() => navigate("/kitcheninterior")}
          >
            Back
          </motion.button>
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            disabled={!selectedLayout}
            className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
              selectedLayout
                ? "bg-green-500 hover:bg-yellow-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={() => {
              if (selectedLayout === "l-shaped") {
                navigate("/kitcheninterior/layout/lshape-size");
              } else if (selectedLayout === "u-shaped") {
                navigate("/kitcheninterior/layout/ushape-size");
              } else if (selectedLayout === "straight") {
                navigate("/kitcheninterior/layout/straight-size");
              } else if (selectedLayout === "parallel") {
                navigate("/kitcheninterior/layout/parallel-size");
              }
            }}
          >
            Next
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KitchenLayoutSelector;
