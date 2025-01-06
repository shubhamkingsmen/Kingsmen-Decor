import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AneesSir from "../../../public/teams/AneesAntapur.jpg";
import PranavSir from "../../../public/teams/PranavG.jpg";
import RiteshSir from "../../../public/teams/RiteshT.jpg";
import YogeshSir from "../../../public/teams/YogeshS.jpg";
import ShadanSir from "../../../public/teams/ShadanS.jpg";
import JobListings from "./JobOpening";
import PageHomeBanner from "../common/PageHomeBanner";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

import { GiImpactPoint } from "react-icons/gi";
import { GiCard10Diamonds } from "react-icons/gi";
import { VscCompassActive } from "react-icons/vsc";
import { TiArrowBackOutline } from "react-icons/ti";
import { FcIdea } from "react-icons/fc";
import { IoAppsSharp } from "react-icons/io5";

import { BsAlarmFill } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { TbDiscountFilled } from "react-icons/tb";
import { GiStarSattelites } from "react-icons/gi";
import { GiThreeLeaves } from "react-icons/gi";

const CarrierPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation will only happen once when scrolled into view
    });
  }, []);

  return (
    <div className=" bg-gray-100 relative">
      {/* Background Section with Video */}
      <div>
        {/* Large screen banner */}
        <div className="hidden lg:block">
          <PageHomeBanner
            title=""
            subtitle=""
            buttonText=""
            backgroundImage="./Banners/Career_Banner.jpg"
            onButtonClick={() => alert("Button Clicked!")}
          />
        </div>

        {/* Mobile or tablet screen banner */}
        <div className="block lg:hidden">
          <PageHomeBanner
            title=""
            subtitle=""
            buttonText=""
            backgroundImage="./Banners/Home_Interior_Banner.jpg"
            onButtonClick={() => alert("Button Clicked!")}
          />
        </div>

        <section className="main-container">
          <div className=" top-spacing bottom-spacing mt-10">
            <JobListings />
          </div>

          {/* Steps Section */}
          <aside className="bottom-spacing">
            {/* <motion.h2
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              data-aos="fade-up"
            >
              Get your estimate in 4 simple steps
            </motion.h2> */}

            <motion.h2
              className="lg:text-4xl text-xl font-semibold text-[#104438] text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Get your estimate in 4 simple steps
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 top-spacing">
              {[
                {
                  step: "We focus on solutions",
                  desc: "Rather than dwelling on problems, we create better answers—every single day",
                  icon: <GiImpactPoint className="text-red-600" />,
                },
                {
                  step: "We think 10X",
                  desc: "Quality is non-negotiable, but speed beats perfection every time",
                  icon: <GiCard10Diamonds className="text-yellow-700" />,
                },
                {
                  step: "We think principles have Firs",
                  desc: "We experiment, learn, simplify the complex, and build from the ground up.",
                  icon: <VscCompassActive className="text-green-500" />,
                },
                {
                  step: "Humility Drives Us Forward",
                  desc: "We keep our egos small, own our mistakes, and always choose to do what’s right—with a smile",
                  icon: <TiArrowBackOutline className="text-orange-600" />,
                },
                {
                  step: "Ideas Over Hierarchy",
                  desc: "We hire people smarter than us because great ideas, not titles, drive us forward",
                  icon: <FcIdea className="text-blue-600" />,
                },
                {
                  step: "Work Hard, Play Hard",
                  desc: "We know how to have fun and take our leisure just as seriously!",
                  icon: <IoAppsSharp className="text-pink-500" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 border rounded-lg shadow-lg bg-gray-50 hover:bg-white transition-all duration-300 cursor-pointer"
                  whileHover={{
                    scale: 1.01,
                    rotateY: 5,
                    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
                  }}
                  data-aos="flip-left"
                  data-aos-delay={`${index * 100}`}
                  onClick={() => NavigateToFirstPage("/homeinterior/bhk")}
                >
                  <div className="text-3xl lg:text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold">{item.step}</h4>
                  <p className="text-xl text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </aside>

          {/* Spacer Teams Section */}
          <aside className="top-spacing bottom-spacing">
            <motion.h2
              className="lg:text-4xl text-xl font-semibold text-[#104438] text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Meet our Team
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 top-spacing">
              {[
                { title: "Founder", desc: "Anees Antapur", image: AneesSir },
                { title: "HR Manager", desc: "Pranav G", image: PranavSir },
                {
                  title: "Technical Manager",
                  desc: "Ritesh Thakur",
                  image: RiteshSir,
                },
                {
                  title: "Senior Brand Strategist",
                  desc: "Yogesh S",
                  image: YogeshSir,
                },
                {
                  title: "Digital Marketing Manager",
                  desc: "Shadan Shaikh",
                  image: ShadanSir,
                },
              ].map((team, index) => (
                <motion.div
                  key={index}
                  className="border rounded shadow-lg bg-white w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "800px",
                  }}
                  whileHover={{
                    scale: 1.01,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                  data-aos="flip-left"
                  data-aos-delay={`${index * 100}`} // Stagger delay
                >
                  {/* Image Container */}
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.title}
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg">{team.title}</h4>
                    <p className="text-xl text-gray-600">{team.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </aside>

          {/* Additional Cards Section */}
          <aside className="top-spacing bottom-spacing">
            <motion.h1
              className="lg:text-4xl text-xl font-semibold text-[#104438] text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Benefits And Perks
            </motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 top-spacing">
              {[
                {
                  title: "Flexible Working Hours",
                  desc: "Enjoy a work-life balance with flexible schedules.",
                  icon: <BsAlarmFill className="text-red-600" />,
                },
                {
                  title: "Health and Wellness",
                  desc: "Comprehensive health insurance programs.",
                  icon: (
                    <MdOutlineHealthAndSafety className="text-yellow-700" />
                  ),
                },
                {
                  title: "Learning Opportunities",
                  desc: "Access to training and certifications.",
                  icon: <SiSololearn className="text-green-500" />,
                },
                {
                  title: "Employee Discounts",
                  desc: "Special discounts on interior services.",
                  icon: <TbDiscountFilled className="text-orange-600" />,
                },
                {
                  title: "Collaborative Culture",
                  desc: "Work with a supportive team.",
                  icon: <GiStarSattelites className="text-blue-600" />,
                },
                {
                  title: "Generous Leave Policy",
                  desc: "Take time off when you need it.",
                  icon: <GiThreeLeaves className="text-pink-500" />,
                },
              ].map((perk, index) => (
                <motion.div
                  key={index}
                  className="border rounded shadow-lg bg-white p-6 text-center"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "800px",
                  }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 2,
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                  data-aos="flip-left" // AOS flip effect for each item
                  data-aos-delay={`${index * 100}`} // Stagger delay
                >
                  <div className="text-7xl mb-4">{perk.icon}</div>
                  <h4 className="font-bold text-lg">{perk.title}</h4>
                  <p className="text-gray-600 text-xl">{perk.desc}</p>
                </motion.div>
              ))}{" "}
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default CarrierPage;
