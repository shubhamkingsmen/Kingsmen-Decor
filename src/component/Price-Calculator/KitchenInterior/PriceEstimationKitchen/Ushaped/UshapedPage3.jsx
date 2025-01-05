import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Correct image imports (assuming they are inside the `public/Images/` folder)
const image1bhk = "/Images/1bhk.jpg";
const image2bhk = "/Images/2bhk.jpg";
const image3bhk = "/Images/3bhk.png";

// Animation Variants
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

const PackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const navigate = useNavigate();

  const packages = [
    {
      id: "Premium",
      name: "Premium",
      price: "₹₹",
      description:
        "Looking for a seamless finish that sits well with every interior? This one's for you.",
      image: image1bhk,
    },
    {
      id: "Elite",
      name: "Elite Special",
      price: "₹₹",
      description:
        "Get a magazine-like look that requires low maintenance.",
      image: image2bhk,
    },
    {
      id: "Kingsmen",
      name: "Kingsmen Special",
      price: "₹₹",
      description:
        "Adds a touch of luxury to your modular wardrobe.",
      image: image3bhk,
    },
  ];

  return (
    <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-white shadow-2xl rounded-lg p-6 md:p-8 max-w-4xl w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6"
        >
          Pick your package
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {packages.map((pkg) => (
            <motion.label
              key={pkg.id}
              variants={itemVariants}
              className={`block p-4 border rounded-lg shadow-md cursor-pointer transition-transform ${
                selectedPackage === pkg.id
                  ? "bg-green-100 border-green-400 scale-105"
                  : "bg-gray-50 border-gray-200 hover:shadow-lg hover:scale-105"
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="flex flex-col items-center">
                <input
                  type="radio"
                  name="package"
                  value={pkg.id}
                  checked={selectedPackage === pkg.id}
                  onChange={() => setSelectedPackage(pkg.id)}
                  className="h-5 w-5 text-green-500 mb-3 hidden"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {pkg.name} ({pkg.price})
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-3 text-center">
                  {pkg.description}
                </p>
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-3"
                />
              </div>
            </motion.label>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="text-red-600 font-semibold"
            data-aos="fade-up"
            data-aos-delay="500"
            onClick={() => navigate("/kitcheninterior/layout/ushape-size")}
          >
            Back
          </motion.button>
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
              rotateX: 5,
              rotateY: 5,
            }}
            className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
              selectedPackage ? "bg-green-500 hover:bg-yellow-700" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedPackage}
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={() => navigate("/kitcheninterior/layout/ushape-size/package/estimate-form")}
          >
            Next
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PackageSelector;
