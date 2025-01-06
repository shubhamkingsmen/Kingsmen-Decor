import React, { useState } from "react";
import { motion } from "framer-motion";
import designer from "../../../public/Video/meetDesigner.mp4";
import livespace from "../../../public/Video/liveSpace (2).mp4";
import execution from "../../../public/Video/execution.mp4";
import installation from "../../../public/Video/installation.mov";
import moveIn from "../../../public/Video/move-in.mp4";

import QuotePopUp from "./QuotePopUp";
const HomeProcess = () => {
  const steps = [
    {
      title: "Meet your designer",
      steps: [
        {
          title: "It all begins with a form",
          description:
            "Let’s get acquainted. The more we learn about you, the better we can design your home.",
          button: "Fill Your Form",
        },
        {
          title: "Get free consultation",
          description:
            "Talk to your designer and get personalized designs and quotes for your dream home.",
        },
      ],
      video: designer,
    },
    {
      title: "Book Kingsmen",
      steps: [
        {
          title: "Pay the booking amount to seal the deal",
          description:
            "Once you’re happy with what we’ve proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us.",
          milestone: true,
        },
        {
          title: "Finalise your home design",
          description:
            "It’s time to dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase.",
        },
      ],
      video: livespace,
    },
    {
      title: "Execution Begin",
      steps: [
        {
          title: "Pay the booking amount to seal the deal",
          description:
            "Once you’re happy with what we’ve proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us.",
          milestone: true,
        },
        {
          title: "Finalise your home design",
          description:
            "It’s time to dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase.",
        },
      ],
      video: execution,
    },
    {
      title: "Final Installation",
      steps: [
        {
          title: "Pay the booking amount to seal the deal",
          description:
            "Once you’re happy with what we’ve proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us.",
          milestone: true,
        },
        {
          title: "Finalise your home design",
          description:
            "It’s time to dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase.",
        },
      ],
      video: installation,
    },
    {
      title: "Move In",
      steps: [
        {
          title: "Confirm your order with 50% payment",
          description:
            "Finalize the design by making a cumulative 50% payment, and your project is now off to a good start.",
          milestone: true,
        },
        {
          title: "Work commences",
          description:
            "Civil work begins on site. Keep a tab on your project status on 'My Account'.",
        },
      ],
      video: moveIn,
    },
  ];
  let [isPopUpOpen, setIsPopUpOpen] = useState(false);
  let handlePopUpToggle = () => {
    // console.log("Hii");
    setIsPopUpOpen(!isPopUpOpen);
    console.log(isPopUpOpen);
  };
  return (
    <div className="flex flex-col space-y-16 p-6 bg-gray-50">
      {steps.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-up"
        >
          {/* Video */}
          <div className="lg:w-1/2 w-full ">
            <motion.video
              src={section.video}
              autoPlay
              loop
              muted
              loading="lazy"
              // className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            ></motion.video>
          </div>
          {/* Text */}
          <div className="lg:w-1/2 w-full space-y-6">
            <motion.h2
              className="text-3xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              data-aos="fade-up"
            >
              {section.title}
            </motion.h2>
            {section.steps.map((step, stepIndex) => (
              <motion.div
                key={stepIndex}
                className="space-y-2"
                data-aos="flip-left"
                data-aos-delay={`${stepIndex * 100}`}
              >
                <h3 className="text-lg font-semibold text-[#104438]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {step.milestone && (
                  <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-full">
                    Milestone
                  </span>
                )}
                {step.button && (
                  <button
                    className="mt-2 px-4 py-2 text-white font-medium rounded shadow bg-[#104438] transition"
                    onClick={handlePopUpToggle}
                  >
                    {step.button}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
      {isPopUpOpen && <QuotePopUp value={isPopUpOpen} />}
    </div>
  );
};
export default HomeProcess;
