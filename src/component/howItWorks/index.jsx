import React from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Evalution from "./Evalution";
import DesignQuoteForm from "./DesignQuoteForm";
import PageHomeBanner from "../common/PageHomeBanner";

import { FaHandshake } from "react-icons/fa6";
import { GiOlive } from "react-icons/gi";
import { FaHourglassStart } from "react-icons/fa";
import { FaInstalod } from "react-icons/fa6";
import { RiEmotionHappyFill } from "react-icons/ri";

const HowItWorks = () => {
  const { ref: designFormRef, inView: designFormInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust the threshold as needed
  });
  return (
    <div className="bg-gray-100 relative">
      <div>
        {/* Large screen banner */}
        <div className="hidden lg:block">
          <PageHomeBanner
            title=""
            subtitle=""
            buttonText=""
            backgroundImage="./banner/NewDesign.jpg"
            onButtonClick={() => alert("Button Clicked!")}
          />
        </div>

        {/* Mobile or tablet screen banner */}
        <div className="block lg:hidden">
          <PageHomeBanner
            title=""
            subtitle=""
            buttonText=""
            backgroundImage="./banner/DesignProcess_Mobile_Version_Banner.jpg"
            onButtonClick={() => alert("Button Clicked!")}
          />
        </div>

        {/* Steps Section */}
        <section className="main-container">
          {/* <aside className="top-spacing bottom-spacing flex flex-col gap-5">
            <motion.h2
              className="lg:text-4xl text-xl font-semibold text-[#104438] text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              data-aos="fade-up"
            >
              Work-flow from our hand for your dream home
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "Meet Designer",
                  icon: <FaHandshake className="text-red-600" />,
                  desc: "Discuss your vision and design goals with our expert.",
                },
                {
                  step: "Book Livspace",
                  icon: <GiOlive className="text-yellow-700" />,
                  desc: "Confirm your project and begin planning in detail.",
                },
                {
                  step: "Execution Begins",
                  icon: <FaHourglassStart className="text-green-500" />,
                  desc: "Our team starts building and crafting your space.",
                },
                {
                  step: "Final Installation",
                  icon: <FaInstalod className="text-orange-600" />,
                  desc: "Your furniture and fixtures are set up perfectly.",
                },
                {
                  step: "Move In",
                  icon: <RiEmotionHappyFill className="text-blue-600" />,
                  desc: "Step into your dream space and enjoy your new home.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 border rounded-lg shadow-lg bg-gray-50 hover:bg-white transition-all duration-300 cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
                  }}
                  data-aos="flip-left"
                  data-aos-delay={`${index * 100}`}
                  onClick={() => NavigateToFirstPage("/homeinterior/bhk")}
                >
                  <div className="text-3xl lg:text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold">{item.step}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </aside> */}

          <Evalution />
          {/* Design Quote Form Section */}
          <div ref={designFormRef} className="top-spacing bottom spacing">
            {designFormInView && <DesignQuoteForm />}
          </div>
        </section>
      </div>
    </div>
  );
};
export default HowItWorks;
