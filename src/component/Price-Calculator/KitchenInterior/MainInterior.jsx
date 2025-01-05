import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUpForm from "../../PopUpForm/PopUpForm";

import Lshape from "./interior/lshaped.jpg";
import lsland from "./interior/lsland.jpg";
import Ushape from "./interior/UShaped.jpg";
import Straight from "./interior/Straight.jpg";
import Parallel from "./interior/parllel.jpg";
import { DiFsharp } from "react-icons/di";
import { FcWorkflow } from "react-icons/fc";
import { GiReceiveMoney } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";

const KitchenInterior = () => {
  let [isPopUpOpen, setIsPopUpOpen] = useState(false);

  let NavigateToFirstPageKitchen = useNavigate();

  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  let kitchen = [
    {
      title: "Island Kitchen",
      desc: "The island kitchen design has a central island that serves as the heart of the kitchen. This design provides extra counter space for meal prep, built-in appliances, or additional seating for casual dining. It's a popular choice for open-concept homes, offering a social and functional environment that seamlessly connects cooking, dining, and entertaining",
      image: lsland,
    },
    {
      title: "Sleek L-shaped Kitchen",
      desc: "An L-shaped kitchen is a practical layout with two adjoining walls forming an L. It creates an open and airy feel, making it perfect for homes with an open floor plan. This design offers ample counter space and storage while leaving room for a dining area or island, making it both functional and aesthetically pleasing.",
      image: Lshape,
    },
    {
      title: "Spacious U-shaped Kitchen",
      desc: "An U-shaped kitchen affords three walls or parts of cabinetry and countertops, hence, is an efficient workflow. The design can be applied on large kitchens and can also be beneficial for more people working together. It allows storage to be maximized through having cabinets and drawers on the three sides but has much counter space left for appliances and meal preparation.",
      image: Ushape,
    },
    {
      title: "Essential Straight Kitchen",
      desc: "A straight kitchen or one-wall kitchen is another sleek and compact design wherein all appliances, cabinets, and workspaces lie along one wall. For small apartments or studio space, this is ideal; it's simple but also very efficient because it easily allows movement and organization by making the most out of limited space.",
      image: Straight,
    },
    {
      title: "Elegant Parallel Kitchen",
      desc: "Also known as a galley kitchen, the parallel layout has two parallel countertops with a walkway in between. This design is excellent for maximizing efficiency and storage in medium to large spaces. The layout provides designated zones for cooking and cleaning, allowing for seamless workflow while keeping everything within easy reach.",
      image: Parallel,
    },
  ];

  let handlePopUpToggle = () => {
    setIsPopUpOpen(!isPopUpOpen); // Toggle the popup visibility
  };

  return (
    <section className="">
      <div className="main-container  bottom-spacing">
        {/* Estimates Section */}
        <div className="top-spacing bottom-spacing">
          <div className="flex flex-wrap gap-8 items-center justify-between w-full">
            <h1 className="lg:text-4xl text-xl font-semibold text-[#104438]">
              Estimates for any Kitchen
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 top-spacing ">
            {kitchen.map((kitchen, index) => (
              <div
                key={index}
                className="border rounded shadow-lg bg-white"
                data-aos="flip-left"
                data-aos-delay={`${index * 100}`}
                onClick={handlePopUpToggle}
              >
                <motion.div
                  className="h-60 sm:h-80 object-cover rounded-t"
                  style={{
                    backgroundImage: `url(${kitchen.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg">{kitchen.title}</h4>
                  <p className="text-sm text-gray-600">{kitchen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPopUpOpen && <PopUpForm value={isPopUpOpen} />}
    </section>
  );
};

export default KitchenInterior;
